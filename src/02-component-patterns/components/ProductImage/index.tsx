import { useContext } from "react";

//Assets
import noImage from "../../assets/no-image.jpg";

//Styles
import styles from "../../styles/styles.module.css";

//Context
import { ProductContext } from "../ProductCard/ProductCard";

export interface Props {
  img?:string;
  className?:string;
}

export const ProductImage = ({ img, className}:Props) => {


    const { product } = useContext(ProductContext);
  
    let imgToShow: string;
  
    if (img) {
      imgToShow = img;
    } else if (product.img) {
      imgToShow = product.img;
    } else {
      imgToShow = noImage;
    }
  
    return (
      <img className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product" />
    );
  };

