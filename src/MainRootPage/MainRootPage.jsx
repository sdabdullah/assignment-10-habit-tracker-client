import React from 'react';
import { Outlet } from 'react-router';
import HeaderNavbar from '../component/HeaderNavbar';
import Footer from '../component/Footer';

const MainRootPage = () => {
    return (
        <div>
            <div>
                <section>
                    <header>
                        <HeaderNavbar></HeaderNavbar>
                    </header>
                </section>
                <section>
                    <main>
                        <Outlet></Outlet>
                    </main>
                </section>
                <section>
                    <Footer></Footer>
                </section>
            </div>
        </div>
    );
};

export default MainRootPage;