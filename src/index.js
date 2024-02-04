import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//layouts
import Header from '../src/components/layout/header/Header';
import Footer from '../src/components/layout/footer/Footer';
//pages
import MainPage from '../src/pages/MainPage';
import LoginPage from '../src/pages/LoginPage';
import BestPage from '../src/pages/BestPage';
import BottomPage from '../src/pages/BottomPage';
import CartPage from '../src/pages/CartPage';
import EtcPage from '../src/pages/EtcPage';
import MyPage from '../src/pages/MyPage';
import ReviewPage from '../src/pages/ReviewPage';
import SignUpPage from '../src/pages/SignUpPage';
import TopPage from '../src/pages/TopPage';
import ProductDetailComponent from '../src/components/app/productDetail/ProductDetailComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/best" element={<BestPage />}></Route>
            <Route path="/bottom" element={<BottomPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/etc" element={<EtcPage />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/review" element={<ReviewPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/top" element={<TopPage />}></Route>
            <Route path="/detail" element={<ProductDetailComponent />}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
);
