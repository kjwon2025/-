import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Section from './components/Section';
import Header from "./components/Header";
import Banner from "./components/Banner";
import SubButtons from "./components/SubButtons";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import AdMP from "./components/AdMP";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import Login from "./components/Login";
import NavChat from "./components/NavChat";
import ScrollToTop from "./components/ScrollToTop";

import Member from './pages/Member';
import Cart from './pages/Cart';
import Orderlist from './pages/Orderlist';
import Payment from './pages/Payment';
import Detail from "./pages/Detail";
import Lottery from './pages/Lottery';
import Mypage from './pages/Mypage';
import MessageCard from './pages/MessageCard';
import PaymentCompleted from './pages/PaymentCompleted';
import BoardWrite from './pages/BoardWrite';
import QnA from './pages/QnA';
import CategoryDetail from './pages/CategoryDetail';
import Community from './pages/Community';

function MainPage() {
    return (
        <>
            <Banner />
            <SubButtons />
            <Section><Section1 /></Section>
            <Section><Section2 /></Section>
            <AdMP />
            <Section><Section3 /></Section>
            <Section><Section4 /></Section>
        </>
    );
}

function App() {
    const [loginActive, setLoginActive] = useState(false);

    return (
        <>
            <ScrollToTop />
            <Header openLogin={() => setLoginActive(true)} />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/member" element={<Member />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Orderlist" element={<Orderlist />} />
                <Route path="/Payment" element={<Payment />} />
                <Route path="/Detail" element={<Detail />} />
                <Route path="/Lottery" element={<Lottery />} />
                <Route path="/Mypage" element={<Mypage />} />
                <Route path="/MessageCard" element={<MessageCard />} />
                <Route path="/PaymentCompleted" element={<PaymentCompleted />} />
                <Route path="/BoardWrite" element={<BoardWrite />} />
                <Route path="/QnA" element={<QnA />} />
                <Route path="/CategoryDetail" element={<CategoryDetail />} />
                <Route path="/Community" element={<Community />} />
            </Routes>

            <Footer />

            <Login
                isActive={loginActive}
                closeLogin={() => setLoginActive(false)}
            />
            <NavChat />
        </>
    );
}

export default App;