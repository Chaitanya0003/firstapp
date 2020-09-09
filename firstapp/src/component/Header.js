import React,{Fragment, Component} from "react";
import "./Header.css"

//class component
class Header extends Component{

    constructor(props){
        super()

        this.state={
            title: "My React App",
            keyword: "User text here"
        }

    }

    inputChange= (event) =>{
            console.log(event.target.value);
            this.setState({keyword:event.target.value? event.target.value : "User Text here"})
            this.props.userText(event.target.value);
    }

    render(){
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input type="text" onChange={this.inputChange}/>
                    <div style={{color:"white"}}>{this.state.keyword}</div>
                </center>
                <hr/>
            </header>
        )
    }
}

//functional component
/*
const Header = () =>{

    return(
        <Fragment>
            <center>
                <h2>My React App</h2>
                </center>
            <hr/>
        </Fragment>
    )

}*/  

export default Header;