(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });
  console.log(products);

  addProduct({
    title: 'pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'XL',
  });
  console.log(products);
  products.push({
    title: 'Prod3',
    createdAt: new Date(1992, 21, 11);
    stock: 12,
    size: 'XL'
  })
})();
