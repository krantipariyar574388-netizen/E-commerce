import { useParams } from "react-router";

const ProductDetailPage = () => {
    const params = useParams();
    console.log(params);

    // get by id request
  return (
    <main style = {{ border : "1px solid gray", minHeight : "100vh"}}>
        <h1>Product Detail Page</h1>
        <p>Products ID : {params.id}</p>
    </main>
  )
}

export default ProductDetailPage;