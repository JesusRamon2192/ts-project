import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'pro11',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
});
console.log(products);
const total = calcStock();
console.log(total);
