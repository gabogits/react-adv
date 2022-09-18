import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components/";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee",

  img: "./coffee-mug.png",
};
const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>

      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image className="custom-image" activeClass="holi" />
          <ProductCard.Title title={"holissss"} className="text-white" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" activeClass="holi" />
          <ProductTitle className="text-white" />
          <ProductButtons
            className="custom-buttons"
            style={{ display: "flex", justifyContent: "end" }}
          />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark"
          style={{ backgroundColor: "#107ec8" }}
        >
          <ProductImage className="custom-image" activeClass="holi" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
