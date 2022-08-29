import ProductItem from './ProductItem';
import classes from './Products.module.css';
const ProductArray = [
  {id: "p1", title: "Mobile Phone", price: 299, discription: "Latest Mobile Phone!"},
  {id: "p2", title: "MacBook", price: 999, discription: "Latest Apple Product!"}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {ProductArray.map(prod => {
          return (
            <ProductItem
              key={prod.id}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              description={props.discription}
            />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;