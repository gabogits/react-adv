import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  let imgtoShow: string;
  if (img) {
    imgtoShow = img;
  } else if (product.img) {
    imgtoShow = product.img;
  } else {
    imgtoShow = noImage;
  }

  return (
    <img className={styles.productImg} src={imgtoShow} alt="Product imge" />
  );
};
