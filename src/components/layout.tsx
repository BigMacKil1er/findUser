import { Route, Routes } from "react-router-dom";
import { UserDetails } from "./pages/user/UserDetails";
import { SideBar } from "./ui/sidebar/SideBar";
import style from "./style/layout.module.scss";
import { Header } from "./ui/header/Header";
export const Layout = () => {
    return (
        <div className={style.layout}>
            <Header />
            <div className={style.page_layout}>
                <SideBar />
                <div className={style.page}>
                    <Routes>
                        <Route path="/" element={<UserDetails />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};
