import { useContext } from "react";

//Styles
import styles from "../../styles/styles.module.css";

//Context
import { ProductContext } from "../ProductCard/ProductCard";

export const ProductTitle = ({ title }: { title?: string }) => {
    const { product } = useContext(ProductContext);
  
    return (
      <span className={styles.productDescription}>
        {title ? title : product.title}
      </span>
    );
  };


