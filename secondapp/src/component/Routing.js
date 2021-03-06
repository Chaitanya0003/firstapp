import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Header from "./Header";
import postDetails from "./postDetails";

const Routing= () =>{

    return(
        <BrowserRouter>
        <div>
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route path="/post/:topic" component={postDetails}></Route>
            <Route path="/profile" component={Profile}></Route>
        </div>
    </BrowserRouter>
    )
}
    
   

export default Routing;
