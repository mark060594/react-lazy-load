

//Components
import { ProductCard,ProductButtons,ProductImage,ProductTitle } from '../components'



const product = {
  id:'1',
  title:'Coffe Mug'
}

const ShoppingPage = () => {


  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr/>

        <ProductCard product={product}>
            <ProductCard.Image/>
            <ProductCard.Title title={''}/>
            <ProductCard.Buttons/>

        </ProductCard>

        <ProductCard product={product}>
            <ProductImage/>
            <ProductTitle />
            <ProductButtons/>

        </ProductCard>

    </div>
  )
}

export default ShoppingPage