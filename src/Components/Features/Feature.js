import React from 'react'
import './Feature.css'

export default function Feature(props) {
    return (
        <div className="feature-data">
            <div className="feature-img"><img src={props.data.src} alt=""
                height={props.data.height} width={props.data.width}/></div>
            <div className="feature-heading">{props.data.heading}</div>
            <div className="feature-desc"><p>{props.data.desc}</p></div>
            
            
        </div>
    )
}
