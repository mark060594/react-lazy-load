import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProducCardProps } from "../components/ProductCard/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increseBy: (value: number) => void;
  product: Product;
  maxCount?:number | undefined;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProducCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props:ProductButtonsProps ) => JSX.Element;
}


export interface onChangeArgs {
  product:Product;
  count:number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?:number;
  maxCount?:number;
}

export interface ProductCardHandlers {
  count:number;
  isMaxCountReached:boolean;
  maxCount?:number;
  product:Product;
  increseBy: ( value:number ) => void;
  reset: () => void;

}