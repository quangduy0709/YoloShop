import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/shopping-cart/cartitemsSlide';
const ProductView = (props) => {
    const dispatch = useDispatch();
    let product = props.product;
    if (product === undefined)
        product = {
            title: '',
            price: '',
            image01: null,
            image02: null,
            categorySlug: '',
            colors: [],
            slug: '',
            size: [],
            description: '',
        };
    const navigate = useNavigate();
    const [previewImg, setPreviewImg] = useState(product.image01);
    const [description, setDescription] = useState(false);
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    };
    const check = () => {
        if (color === undefined) {
            alert('Vui lòng chọn màu sắc!');
            return false;
        }

        if (size === undefined) {
            alert('Vui lòng chọn kích cỡ!');
            return false;
        }

        return true;
    };

    const addtoCard = () => {
        if (check()) {
            dispatch(
                addItem({
                    slug: product.slug,
                    color: color,
                    size: size,
                    quantity: quantity,
                    price: product.price,
                }),
            );
            alert('sucess');
        }
    };
    const gotoCard = () => {
        if (check()) {
            dispatch(
                addItem({
                    slug: product.slug,
                    color: color,
                    size: size,
                    quantity: quantity,
                    price: product.price,
                }),
            );
            navigate('/cart');
        }
    };
    useEffect(() => {
        setPreviewImg(product.image01);
        setQuantity(1);
        setColor();
        setSize();
    }, [product]);

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product-description ${description ? 'expand' : ''} `}>
                    <div className="product-description__title">Chi tiết sản phẩm</div>
                    <div
                        className="product-description__content"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                    <div className="product-description__toggle" onClick={() => setDescription(!description)}>
                        <Button size="sm">{description ? ' thu gon' : ' xem them'}</Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__item">
                    {
                        <span className="product__info__item__price">
                            {product.price === 0 ? '' : `${product.price.slice(0, 3)}.${product.price.slice(3)}đ`}
                        </span>
                    }
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">Mau sac</div>
                    <div className="product__info__item__list">
                        {product.colors.map((item, index) => (
                            <div
                                key={index}
                                className={`product__info__item__list__item ${color === item ? 'active' : ' '}`}
                                onClick={() => setColor(item)}
                            >
                                <div className={`circle bg-${item}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">Kich co</div>
                    <div className="product__info__item__list">
                        {product.size.map((item, index) => (
                            <div
                                key={index}
                                className={`product__info__item__list__item ${size === item ? 'active' : ' '}`}
                                onClick={() => setSize(item)}
                            >
                                <span className="product__info__item__list__item__size">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">So luong</div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('maxium')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">{quantity}</div>
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button onClick={addtoCard}> thêm vào giỏ hàng</Button>
                    <Button onClick={gotoCard}> mua ngay</Button>
                </div>
            </div>
        </div>
    );
};

ProductView.propTypes = {
    product: PropTypes.object,
};

export default ProductView;
