import { Fragment } from "react";
import path from 'path';
import fs from 'fs/promises';

function ProductDetailPage(props) {

  const { loadedProduct } = props;

  return <Fragment>
    <h1>Product Detail Page</h1>
    <p>{loadedProduct.title}</p>
    <p>{loadedProduct.description}</p>

  </Fragment>
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  // fetch data for a single product
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find(product => product.id === productId);

  return {
    props: {
      loadedProduct: product
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    fallback: false // if true, then it will pregenerate the page for the paths that are defined in the paths array and for the rest of the paths, it will generate the page on the fly
  }
}

export default ProductDetailPage;

/*

!If you have dynamic component then the default behaviour is not to pregenerate the page because it is dynamic and it can change at any time. So, if you want to pregenerate the page then you have to use getStaticPathProps() function. They are generated just in time in the server. So, if you have a dynamic page and you want to pregenerate it then you have to use getStaticPathProps() function. It will pregenerate the page for you.


? Pre-Genearting Paths with getStaticPaths()

TODO - Dynamic pages don't just need data, they also need to know which paths should be pre-generated. For example, if you have a dynamic page like /products/[pid], Next.js needs to know that /products/1, /products/2, etc. should be pre-generated.

TODO - For this, you need to export an async function called getStaticPaths from your page. In this function, you need to return a list of possible values for pid.

*/