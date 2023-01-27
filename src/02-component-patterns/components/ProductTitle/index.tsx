import { useContext } from "react";

//Styles
import styles from "../../styles/styles.module.css";

//Context
import { ProductContext } from "../ProductCard/ProductCard";

//Interface inline
/* { title }: { title?: string } */ 

export interface Props {
  title?:string;
  className?:string;
}


export const ProductTitle = ({title, className}:Props) => {
    const { product } = useContext(ProductContext);
  
    return (
      <span className={`${styles.productDescription} ${className}`}>
        {title ? title : product.title}
      </span>
    );
  };


