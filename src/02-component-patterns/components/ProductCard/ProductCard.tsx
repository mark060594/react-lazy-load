import { createContext,CSSProperties } from "react";

//Hooks
import { useProduct } from "../../hooks/useProduct";

//Styles
import styles from "../../styles/styles.module.css";

//Interfaces
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
 /*  children?: ReactElement | ReactElement[]; */
  children: (args:ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  value?:number;
  onChange?: (args: onChangeArgs) => void;
  initialValues?: InitialValues
}



const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  onChange,
  initialValues
}: Props) => {
  const { counter, increseBy, maxCount, isMaxCountReached, reset } = useProduct( {onChange, product, value, initialValues} );

  return (
    <Provider value={{ counter, increseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count:counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          increseBy,
          reset
        })}
      </div>
    </Provider>
  );
};
