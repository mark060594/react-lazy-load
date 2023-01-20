import { createContext, ReactElement, useContext } from "react";

//Hooks
import { useProduct } from "../../hooks/useProduct";

//Styles
import styles from "../../styles/styles.module.css";


//Interfaces
import { ProductContextProps, ProductCardProps } from "../../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increseBy } = useProduct();

  return (
    <Provider value={{ counter, increseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};




