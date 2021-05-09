
import './App.css';
import ProductList from './Components/ProductList';

const products = [
    {
      imgSrc: `https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/08/iphone-11-pro-2019-frandroid.png?resize=580,580`,
      name: 'Iphone 11',
      price: 10,
    },
    {
      imgSrc: `https://press.razer.com/wp-content/uploads/2019/01/blade-1024x576.png`,
      name: 'Razer Blade',
      price: 200,
    },
    {
      imgSrc: `https://purepng.com/public/uploads/large/purepng.com-audi-r8audicars-961524670148fabn4.png`,
      name: 'audi R8',
      price: 5200 ,
    },
];
  



function App() {
  return (
    <div>

      
      <section>
        <ProductList products={products} />
      </section>

    </div>
  );
}

export default App;
