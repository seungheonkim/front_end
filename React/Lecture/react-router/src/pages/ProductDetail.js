import {useParams} from "react-router-dom";

const ProductDetail = () => {
    //해당 url path 에서 params 를 받아온다
    const params = useParams();
    console.log(params.productId);

  return (
      <section>
          <h1>Product detail</h1>
          <p>{params.productId}</p>
      </section>
  )
};

export default ProductDetail;