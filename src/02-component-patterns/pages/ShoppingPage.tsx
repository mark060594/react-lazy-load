//Components
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

//Styles
import "../styles/custom-styles.css";

//Data
import { products } from "../data/products";

const product = products[1];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex" }}>
        <ProductCard
          product={product}
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, increseBy, count, isMaxCountReached }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className={"custom-buttons"} />

              <button onClick={reset}> Reset </button>
              <button onClick={() => increseBy(-2)}> -2 </button>

              {!isMaxCountReached && (
                <button onClick={() => increseBy(+2)}> +2 </button>
              )}

              <span>{count}</span>
            </>
          )}
        </ProductCard>
      </div>

      {/*  <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div> */}
    </div>
  );
};

export default ShoppingPage;
