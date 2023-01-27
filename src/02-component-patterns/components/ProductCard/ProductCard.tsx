import { createContext, ReactElement, CSSProperties, useContext } from "react";

//Hooks
import { useProduct } from "../../hooks/useProduct";

//Styles
import styles from "../../styles/styles.module.css";

//Interfaces
import { ProductContextProps, Product } from "../../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increseBy } = useProduct();

  return (
    <Provider value={{ counter, increseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>{children}</div>
    </Provider>
  );
};
