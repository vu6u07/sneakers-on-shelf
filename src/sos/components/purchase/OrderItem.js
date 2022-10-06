import { Link } from 'react-router-dom';
import { fCurrency } from '../../../utils/formatNumber';

export default function OrderItem({ orderItem }) {

    const { quantity, productId, name, size, image, price } = orderItem;

    return (<>
        <div className="row m-0 py-3 border-bottom">
            <div className="col-lg-8 m-0 p-0 row">
                <div className="col-4 col-lg-3 p-0">
                    <Link to={`/products/${productId}`}><img src={image} className="img-fluid" alt="product" /></Link>
                </div>
                <div className="col-8 d-flex flex-column justify-content-around">
                    <p className="m-0 fw-bold">{name}</p>
                    <p className="m-0">Size : {size}</p>
                    <p className="m-0">
                        {fCurrency(price)}
                    </p>
                    <p className="m-0">x {quantity}</p>
                </div>
            </div>
            <div className="col-lg-4 m-0 py-2 py-lg-0 d-flex align-items-center">
                <div className="w-100 text-center justify-content-center">
                    <p className="m-0 text-danger">{fCurrency(price * quantity)}</p>
                </div>
            </div>
        </div>
    </>)
}