import React from "react";
import {Link} from "react-router-dom";

const Post= () =>{

    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                <h3>Post Page</h3>
            </div>
            <div className="panel-body">
                <div className="jumbotron">
                Post Page Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                
                    <h3>Javascript</h3>
                    <Link to="/post/Javascript">Details</Link>
                    <h3>Node</h3>
                    <Link to="/post/Node">Details</Link>
                    <h3>Bootstrap</h3>
                    <Link to="/post/Bootstrap">Details</Link>
                    <h3>React</h3>
                    <Link to="/post/React">Details</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Post;