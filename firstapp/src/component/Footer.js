import React from "react";

const Footer = (props) => {
        return(
            <React.Fragment>
                <hr/>
                <center>&copy; Developer funnel {props.year} {props.month}</center>
            </React.Fragment>
    )
}

export default Footer;