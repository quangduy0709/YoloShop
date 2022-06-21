import React from 'react';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Grid from '../components/Grid';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import heroSliderData from '../assets/fake-data/hero-slider';
import policy from '../assets/fake-data/policy';
import productData from '../assets/fake-data/products';
import PolicyCard from '../components/PolicyCard';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import banner from '../assets/images/banner.png';

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            {/* slider */}
            <HeroSlider data={heroSliderData} control={false} auto={true} />
            {/* policy */}
            <Section>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {policy.map((item, index) => (
                            <Link to="/policy" key={index}>
                                <PolicyCard
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* product */}
            <Section>
                <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(4).map((item, index) => (
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
            {/* banner */}
            <Section>
                <SectionBody>
                    <img src={banner} alt="" />
                </SectionBody>
            </Section>
            {/* san pham moi ve */}
            <Section>
                <SectionTitle> YOLO - thoải mái, tự tin mọi lúc mọi nơi</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(12).map((item, index) => (
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

export default Home;
