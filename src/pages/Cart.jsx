import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import productData from '../assets/fake-data/products';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import Helmet from '../components/Helmet';
import numberWithCommas from '../utils/numberWithCommas';
const Cart = () => {
    const cartItems = useSelector((state) => state.cartItem.value);

    const [cartProduct, setCardProduct] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setCardProduct(productData.getCartItemsInfo(cartItems));
        setTotalProduct(cartItems.reduce((total, item) => total + Number(item.quantity), 0));
        setTotalPrice(cartItems.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0));
    }, [cartItems]);
    return (
        <Helmet title="giỏ hàng">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>bạn đang có {totalProduct} sản phẩm trong giỏ hàng</p>
                        <div className="cart__info__txt__price">
                            <span>thành tiền</span>
                            <span>{numberWithCommas(Number(totalPrice))}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <div className="">
                            <Link to="/payment">
                                <Button size="block"> đặt hàng </Button>
                            </Link>
                        </div>
                        <Link to="/catalog">
                            <Button size="block"> tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>
                <div className="cart__list">
                    {cartProduct.map((item, index) => (
                        <CartItem item={item} key={index} />
                    ))}
                </div>
            </div>
        </Helmet>
    );
};

export default Cart;
