import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header";
import Footer from "./Footer";

const Routing = () =>{
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;