import React from 'react';
import Helmet from '../components/Helmet';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { useState } from 'react';
import { useEffect } from 'react';
import productData from '../assets/fake-data/products';
const Payment = () => {
    const cartItems = useSelector((state) => state.cartItem.value);
    console.log(cartItems);
    const [cartProduct, setCardProduct] = useState([]);
    useEffect(() => {
        setCardProduct(productData.getCartItemsInfo(cartItems));
    }, [cartItems]);
    return (
        <Helmet title="thanh toán đơn hàng">
            <div className="payment">
                <div className="payment__left">
                    <div className="payment__left__items">
                        <h2> Thong tin nhan hang</h2>
                        <div className="payment__left__items__content">
                            <input className="payment__left__items__content__input" type="text" placeholder="Email" />
                            <input
                                className="payment__left__items__content__input"
                                type="text"
                                placeholder="Ho va ten"
                            />
                            <input
                                className="payment__left__items__content__input"
                                type="text"
                                placeholder="So dien thoai"
                            />
                            <input className="payment__left__items__content__input" type="text" placeholder="Dia chi" />
                        </div>
                    </div>
                    <div className="payment__left__items">
                        <h2> Van chuyen</h2>
                        <div className="payment__left__items__content">
                            <div className="payment__left__items__content__col">
                                <div className="payment__left__items__content__col__input">
                                    <input type="radio" name="select_price" />
                                </div>
                                <div className="paymen__left__items__content__col__txt">
                                    <span>Miễn phí vận chuyển với đơn hàng trên 2 triệu đồng</span>
                                </div>
                            </div>
                            <div className="payment__left__items__content__col">
                                <div className="payment__left__items__content__col__input">
                                    <input type="radio" name="select_price" />
                                </div>
                                <div className="payment__left__items__content__col__txt">
                                    <span> Giao hàng tận nơi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment__right">
                    <div className="payment__right__items">
                        <div className="payment__right__items__title">
                            <span>Đơn hàng ({cartItems.length} sản phẩm)</span>
                            <div className="hr"></div>
                        </div>
                        <div className="payment__right__items__item">
                            {cartProduct.map((item, index) => (
                                <CartItem item={item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Payment;
