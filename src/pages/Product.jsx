import React from 'react';
import productData from '../assets/fake-data/products';
import Helmet from '../components/Helmet';
import {useParams} from 'react-router-dom';
import Section, {SectionBody, SectionTitle} from '../components/Section';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import ProductView from '../components/ProductView';

const Product = (props) => {
    const slug = useParams();

    const product = productData.getProductBySlug(slug.slug);

    const relateProducts = productData.getProducts(8);

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle> Khám phá thêm</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {relateProducts.map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={item.price}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default Product;
