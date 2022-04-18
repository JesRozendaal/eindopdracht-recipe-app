import React from 'react';
import {Link} from "react-router-dom";

const Imageblock = ({image, alt, title, link, className}) => {
    return (
            <article className="link-box">
                <Link to={link} className={className}>
                    <img src={image} alt={alt} height="225" width="355" className="image"/>
                    <span className="title-link">
                        <h4>{title}</h4>
                    </span>
                </Link>
            </article>
    );
};

export default Imageblock;