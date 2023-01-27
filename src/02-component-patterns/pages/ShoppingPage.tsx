//Components
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

//Styles
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe Mug",
};

const ShoppingPage = () => {
  return (
    <div style={{}}>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard product={product}>
        <ProductCard.Image className="custom-image"/>
        <ProductCard.Title className="text-bold"  />
        <ProductCard.Buttons />
      </ProductCard>

      <ProductCard product={product} className="bg-dark text-white">
        <ProductImage className="custom-image"/>
        <ProductTitle className="text-bold"/>
        <ProductButtons className={"custom-buttons"}/>
      </ProductCard>

      <ProductCard product={product} style={{background:"#70D1F"}}>
        <ProductImage />
        <ProductTitle/>
        <ProductButtons />
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
