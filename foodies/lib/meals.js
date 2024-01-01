import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
const db = sql('meals.db');
import { S3 } from '@aws-sdk/client-s3';


const s3 = new S3({
  region: 'us-east-1'
});

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('Something went wrong');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, {
    lower: true,
  });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: 'foodies-nextjs',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;

  db.prepare(`
    INSERT INTO meals (title, slug, summary, instructions, image, creator, creator_email)
    VALUES (@title, @slug, @summary, @instructions, @image, @creator, @creator_email)
  `).run(meal);

}