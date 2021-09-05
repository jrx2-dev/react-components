export interface ProductItem {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  description?: string;
}

export interface styles {
  readonly [key: string]: string;
}
