import React,{Component} from 'react'; //or var React = require('react'); it works same as above (old syntax)
import ReactDOM from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";
import JSON from "../db.json";
import NewsDisplay from "./NewsDisplay"


class Home extends Component{
    constructor(){
        super()
        
        this.state={
            news: JSON,
            filtered: JSON
        }
    }
    /*
    var a=[ 20,35,40,63,28,47]

    a.filter((item)=> {return item>25})*/

    filterNews(userInput){
        const output= this.state.news.filter((data)=>{
            return(data.title.toLowerCase().indexOf(userInput.toLowerCase())> -1)
        })
        this.setState({filtered: output})
    }
    render(){
        console.log(this.state.news);
        return( 
            <React.Fragment>
                <Header userText= {(data)=> {this.filterNews(data)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year="2020" month="june"/>
            </React.Fragment>
            
        );
    }
  
}

export default Home;