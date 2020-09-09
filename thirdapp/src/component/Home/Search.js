import React,{Component} from "react";
import "./Search.css";

const lurl="https://developerfunnel.herokuapp.com/location";
const hurl="";

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:""
        }
    }

    render(){
        return(
            <header>
                <div className="imageContainer">
                    <div id="logo">
                        <b>D!</b>
                    </div>
                    <div className="heading">
                        Plan Your Trip
                    </div>
                    <div className="locationSelector">
                        <select className="locationDropDown">
                            <option>---SELECT YOUR CITY---</option>
                        </select>
                        <select className="reataurantsinput">
                            <option>---SELECT YOUR HOTEL---</option>
                        </select>
                    </div>
                </div>
            </header>
        )
    }

    componentDidMount(){
        fetch(lurl,{method:"GET"})
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            this.setState({location:data})
        })
    }
}

export default Search;
