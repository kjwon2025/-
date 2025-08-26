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

import Member from './pages/Member'
import Cart from './pages/Cart'
import Orderlist from './pages/Orderlist'
import Payment from './pages/Payment'

function MainPage() {
    const [loginActive, setLoginActive] = useState(false);

    return (
        <>
            <Header openLogin={() => setLoginActive(true)} />
            <Banner />
            <SubButtons />
            <Section><Section1 /></Section>
            <Section><Section2 /></Section>
            <AdMP />
            <Section><Section3 /></Section>
            <Section><Section4 /></Section>
            <Footer />

            <Login
                isActive={loginActive}
                closeLogin={() => setLoginActive(false)}
            />
            <NavChat />
        </>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/member" element={<Member />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Orderlist" element={<Orderlist />} />
            <Route path="/Payment" element={<Payment />} />
        </Routes>
    );
}

export default App;
