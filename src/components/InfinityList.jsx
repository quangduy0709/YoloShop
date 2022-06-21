import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid';
import ProductCard from './ProductCard';

const InfinityList = (props) => {
    const preLoad = 6;

    const [data, setData] = useState(props.data.slice(0, preLoad));

    useEffect(() => {
        setData(props.data);
    }, [props.data]);
    return (
        <div>
            <Grid col={3} mdCol={2} smCol={1} gap={20}>
                {data.map((item, index) => (
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
        </div>
    );
};

InfinityList.propTypes = {
    data: PropTypes.array.isRequired,
};

export default InfinityList;
