import React from 'react';

import { publicRoutes } from '../Routes/Routes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ProductViewModal from './ProductViewModal';

const Layout = () => {
    return (
        <Router>
            <ScrollToTop />
            <div>
                <Header />
                <div className="container">
                    <div className="main">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.components;
                                return <Route key={index} path={route.path} element={<Page />} />;
                            })}
                        </Routes>
                    </div>
                </div>
                <Footer />
                <ProductViewModal></ProductViewModal>
            </div>
        </Router>
    );
};

export default Layout;
