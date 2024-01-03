import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';

function HomePage(props) {
  const { products } = props;

  //? React way of fetching data from backend
  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   fetch('/dummy-backend.json')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     setProduct(data.products);
  //   });
  // }
  // , []);


  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  /*

  if (!data) {
    return { notFound: true }
  }

  if (data.products.length === 0) {
    return { redirect: { destination: '/no-data' } }
  }

  */

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // regenerate every 10 seconds until a new request comes in less than 10 seconds(in development mode it will always regenerate)

    /*

    notFound: true // if true, it will show 404 page if the page is not found

    redirect: {
      destination: '/no-data' // redirect to this page if the page is not found
    }

    */
  }
}

export default HomePage;


/*
  Server Side Rendering(SSR) vs Static Site Generation(SSG)

  Server Side Rendering(SSR):
  - It is used when the data changes frequently
  - It is used when the data is private or user specific
  - It is used when the data is not available at build time

  Static Site Generation(SSG):
  - It is used when the data changes less frequently
  - It is used when the data is public

  !Note: If the data is public and changes frequently, then we can use SSG with revalidate option

  ?Sometimes, you need to pre-reder for every reuqest OR you nedd access to the request object in getStaticProps() function. In that case, you can use getServerSideProps() function. It will pre-render for every request and it will give you access to the request object. So basically, it's "run server-side code at request time" and that code is added in getServerSideProps() function. The function is executed whenever a request for the page is made. 
  !You should only use getStaticProps() or getServerSideProps() inside the same component
*/