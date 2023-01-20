import { useContext } from 'react';

//Styles
import styles from "../../styles/styles.module.css";

//Context
import { ProductContext } from '../ProductCard/ProductCard';


export const ProductButtons = () => {
    const { increseBy, counter } = useContext(ProductContext);
  
    return (
      <div className={styles.buttonsContainer}>
        <button onClick={() => increseBy(-1)} className={styles.buttonMinus}>
          -
        </button>
  
        <div className={styles.countLabel}> {counter} </div>
  
        <button onClick={() => increseBy(+1)} className={styles.buttonAdd}>
          +
        </button>
      </div>
    );
  };
  
