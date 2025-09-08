import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Popup from './components/Popup';
import Section from './components/Section';
import Header from "./components/Header";
import Banner from "./components/Banner";
import SubButtons from "./components/SubButtons";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import WeatherBanner from "./components/WeatherBanner";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import Login from "./components/Login";
import NavChat from "./components/NavChat";
import ScrollToTop from "./components/ScrollToTop";
import AdMP from "./components/AdMP";
import News from './components/News'

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
import { CartProvider } from "./CartContext";
import BoardEdit from "./pages/BoardEdit";


/* 소셜로그인 */
import SocialLog from "./components/SocialLog";
import AuthProvider from "./context/SocialLog_data";

function MainPage() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
    }, []);

    return (
        <>
            <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
            <Banner />
            <SubButtons />
            <Section><Section1 /></Section>
            <Section><Section2 /></Section>
            <WeatherBanner />
            <Section><Section3 /></Section>
            <Section><Section4 /></Section>
            <AdMP />
            <Section><News /></Section>
        </>
    );
}

function App() {
    const [loginActive, setLoginActive] = useState(false);

    return (
        <>
            <AuthProvider>
                <CartProvider> {/* ✅ 장바구니 Context로 감싸줌 */}
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
                        <Route path="/BoardEdit/:id" element={<BoardEdit />} />
                    </Routes>

                    <Footer />

                    <Login
                        isActive={loginActive}
                        closeLogin={() => setLoginActive(false)}
                    />
                    <NavChat />
                </CartProvider>
            </AuthProvider>

        </>
    );
}

export default App;