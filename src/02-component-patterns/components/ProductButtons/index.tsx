import { useContext, CSSProperties, useCallback } from "react";

//Styles
import styles from "../../styles/styles.module.css";

//Context
import { ProductContext } from "../ProductCard/ProductCard";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className }: Props) => {
  const { increseBy, counter, maxCount } = useContext(ProductContext);

  const checkValues = (
    counter: number | undefined,
    maxCount: number | undefined
  ) => {
    if (counter === maxCount) return true;
    else return false;
  };

  const isMaxReached = useCallback(() => {
    return checkValues(counter, maxCount);
  }, [maxCount, counter]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increseBy(-1)} className={styles.buttonMinus}>
        -
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button
        disabled={isMaxReached()}
        onClick={() => increseBy(+1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
      >
        +
      </button>
    </div>
  );
};
