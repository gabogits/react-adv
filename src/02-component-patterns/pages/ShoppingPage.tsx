import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components/";

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
          <ProductCard.Image />
          <ProductCard.Title title={"holissss"} />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
