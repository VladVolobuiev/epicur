import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "video-react/dist/video-react.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/animateBorder.css'
import './styles/main-styles.scss';
import './App.scss';
import './styles/Preloader.scss'
import './bootstrap.min.css';
import './styles/Home.scss'
import {HomePage} from "./client/pages/HomePage/HomePage";
import Home from "./client/pages/HomePage/Home";
import {AdminProducts} from "./client/components/AdminProducts";
import GoogleMapsAdminPage from "./client/components/GoogleMapsAdminPage/GoogleMapsAdminPage";
import {Provider} from "react-redux";
import {store} from "./store/store";
import "./styles/buttons-inputs-styles.css"
import './styles/benefits.scss'
import './styles/imgs.css'
import NewsAdminPage from "./client/components/NewsAdmin/NewsAdminPage";
import HeaderAdminHoc from "./HOC/HeaderAdminHOC/HeaderAdminHoc";
import HeaderClientHoc from "./HOC/HeaderClientHOC/HeaderClientHOC";
import News from "./client/components/News/News";
import ClientProducts from "./client/components/ClientProduct/ClientProducts";
import Block4 from "./client/pages/HomePage/Block4";
import Block5 from "./client/pages/HomePage/Block5";
import React from "react";
import Preloader from "./client/components/PreloaderHeader/Preloader";
import FullLogoEpikur from "./client/components/Svg/Images/FullLogoEpikur";
import Footer from "./client/components/Footer/Footer";
import AboutUs from "./client/components/AboutUs/AboutUs";

function App() {

    /**
     * 1.
     * 2.2
     * 3.
     *
     */
    return (
        <Router>
            <Provider store={store}>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/Home'>
                    {/*<HomePage/>*/}
                    <Home/>
                </Route>
                <Route exact path='/AdminProducts'>
                    <HeaderAdminHoc>
                        <AdminProducts/>
                    </HeaderAdminHoc>
                </Route>
                <Route exact path='/NewsAdminPage'>
                    <HeaderAdminHoc>
                        <NewsAdminPage/>
                    </HeaderAdminHoc>
                </Route>
                <Route exact path='/GoogleMapsAdminPage'>
                    <HeaderAdminHoc>
                        <GoogleMapsAdminPage/>
                    </HeaderAdminHoc>
                </Route>
                <Route exact path='/News'>
                    {/*<HeaderClientHoc>*/}
                        <News/>
                    {/*</HeaderClientHoc>*/}
                </Route>
                <Route exact path='/Our Products'>
                    {/*<HeaderClientHoc>*/}
                        <ClientProducts/>
                    {/*</HeaderClientHoc>*/}
                </Route>
                <Route exact path='/About as'>
                 <AboutUs/>
                </Route>
                <Route exact path='/Our partners'>
                    <AboutUs/>
                </Route>
                <Route exact path='/Contacts'>
                    <AboutUs/>
                </Route>
            </Provider>
        </Router>
    )
}

export default App;


{/*google-maps-key: AIzaSyABwpKfqjcCgsGGcFY2dhpb02HUPt_U4vk*/
}