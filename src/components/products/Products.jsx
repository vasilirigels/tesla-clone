import Product from '../product/Product';
import './Products.css';
import cybertruckImage from '../../assets/cybertruck.jpg';
import modelSImage from '../../assets/model-s.jpg';
import modelXImage from '../../assets/model-x.jpg';
import modelYImage from '../../assets/model-y.jpg'
import model3Image from '../../assets/model-3.jpg'
import teslaCharger from '../../assets/tesla-charger.jpg';

const products = [
    {
        id: 1,
        image: cybertruckImage,
        title: 'Cybertruck',
        description: 'Description of Cybertruck',
        price: 76390,
    },
    {
        id: 2,
        image: modelSImage,
        title: 'Model S',
        description: 'Description of Model S',
        price: 71090,
    },
    {
        id: 3,
        image: modelXImage,
        title: 'Model X',
        description: 'Description of Model X',
        price: 68590,
    },
    {
        id: 4,
        image: modelYImage,
        title: 'Model Y',
        description: 'Description of Model Y',
        price: 32890,
    },
    {
        id: 5,
        image: model3Image,
        title: 'Model 3',
        description: 'Description of Model 3',
        price: 42990,
    },
    {
        id: 6,
        image: teslaCharger,
        title: 'Charger',
        description: 'Description of Charger',
        price: 5800,
    },
];

export default function Products() {
    return (
        <div className="products">
            {products.map((product) => (
                <Product
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    );
}