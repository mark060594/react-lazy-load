import { createContext, ReactElement, CSSProperties } from "react";

//Hooks
import { useProduct } from "../../hooks/useProduct";

//Styles
import styles from "../../styles/styles.module.css";

//Interfaces
import { ProductContextProps, Product, onChangeArgs } from "../../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  value?:number;
  onChange?: (args: onChangeArgs) => void;
}

const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  onChange,
}: Props) => {
  const { counter, increseBy } = useProduct( {onChange, product, value} );

  return (
    <Provider value={{ counter, increseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
