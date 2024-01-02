import fs from 'fs/promises';
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
        <li key={product.id}>{product.title}</li>
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
