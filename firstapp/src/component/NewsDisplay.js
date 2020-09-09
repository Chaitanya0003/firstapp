import React from "react";


const NewsDisplay= (props)=>{
    console.log("Inside display",props);
    const renderlist= props.newsdata.map((data) => {

        return(
            <div key={data.id}>
                <h2>{data.title}</h2>
                <p>{data.feed}</p>
            </div>
        )
    })


    return(
        <React.Fragment>
            {renderlist}
        </React.Fragment>
    )

}

export default NewsDisplay;