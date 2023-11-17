import "./ProductComponent.css";

const ProductComponent = () => {
  return (
    <div className="product-frame col-4">
        <img className="product-image" alt="" src="/rectangle-2@2x.png" />

        <div className="product-info">
          <b className="barfi-rs-900-container">
            <p className="barfi">Barfi</p>
            <p className="barfi">Rs. 900/=</p>
          </b>

          <button className="btn btn-success">Order Now</button>
        </div>
    </div>
  );
}


export default ProductComponent;