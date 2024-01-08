import classes from './post-content.module.css'
import PostHeader from './post-header';

const dymmy =   {
  title: 'NextJS',
  slug: 'getting-started-with-nextjs',
  image: 'nextjs.png',
  content: '# This is a first post.',
  date: '2022-02-10'
}

function PostContent() {
  const imagePath = `/images/posts/${dymmy.image}`;
  return <article className={classes.content}>
    <PostHeader title={dymmy.title} image={imagePath} />
    {dymmy.content}
  </article> 
}

export default PostContent;