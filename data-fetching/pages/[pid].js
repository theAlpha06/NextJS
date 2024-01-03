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

export default ProductDetailPage;