import React, { useEffect, useState } from 'react';
import productData from '../assets/fake-data/products';
import ProductView from './ProductView';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import { remove } from '../redux/product-modal/productModalSlice';

const ProductViewModal = () => {
    const productSlug = useSelector((state) => state.productModal.value);

    const dispatch = useDispatch();
    const [product, setProduct] = useState();

    useEffect(() => {
        setProduct(productData.getProductBySlug(productSlug));
    }, [productSlug]);

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product} />
                <div className="product-view__modal__content__close">
                    <Button size="sm" onClick={() => dispatch(remove())}>
                        x
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
