
//Components
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

//Hooks
import { useShoppingCart } from "../hooks/useShoppingCart";

//Styles
import "../styles/custom-styles.css";


//Data
import { products } from "../data/products";



const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart} = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={ shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className={"custom-buttons"} />
          </ProductCard>
        ))}

        <div className="shopping-cart">
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{ width: "100px" }}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className={"custom-buttons"}
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ProductCard>
          ))}
        </div>
      </div>

     {/*  <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div> */}
    </div>
  );
};

export default ShoppingPage;
