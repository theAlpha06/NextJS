/*
  !Order of execution of the functions in Next.js

  1. getStaticPaths()
  2. getStaticProps()
  3. getServerSideProps()

*/

import { Fragment } from "react";
import path from 'path';
import fs from 'fs/promises';

function ProductDetailPage(props) {

  const { loadedProduct } = props;

  // if(!loadedProduct) {
  //   return <p>Loading...</p>
  // }

  return <Fragment>
    <h1>Product Detail Page</h1>
    <p>{loadedProduct.title}</p>
    <p>{loadedProduct.description}</p>

  </Fragment>
}

async function getData() {
  // fetch data for a single product
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find(product => product.id === productId);

  return {
    props: {
      loadedProduct: product
    }
  }
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map(product => product.id);

  const pathsWithParams = ids.map(id => ({ params: { pid: id } }));
  return {
    paths: pathsWithParams,
    fallback: 'blocking' // if true, then it will pregenerate the page for the paths that are defined in the paths array and for the rest of the paths, it will generate the page on the fly
    // if 'blocking', then it will pregenerate the page for the paths that are defined in the paths array and for the rest of the paths, it will wait until the page is generated and then it will show the page
    // if false, then it will pregenerate the page for the paths that are defined in the paths array and for the rest of the paths, it will show 404 page
    // it is same as the code on the line 18
  }
}

export default ProductDetailPage;

/*

!If you have dynamic component then the default behaviour is not to pregenerate the page because it is dynamic and it can change at any time. So, if you want to pregenerate the page then you have to use getStaticPathProps() function. They are generated just in time in the server. So, if you have a dynamic page and you want to pregenerate it then you have to use getStaticPathProps() function. It will pregenerate the page for you.


? Pre-Genearting Paths with getStaticPaths()

TODO - Dynamic pages don't just need data, they also need to know which paths should be pre-generated. For example, if you have a dynamic page like /products/[pid], Next.js needs to know that /products/1, /products/2, etc. should be pre-generated.

TODO - For this, you need to export an async function called getStaticPaths from your page. In this function, you need to return a list of possible values for pid.

*/