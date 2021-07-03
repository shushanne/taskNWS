import React from "react"
import "./cat.scss"

export const Cat = ({item}) => {
    return (
        <div className="cat">
           <img src={item.url} alt={item}/>
       </div>)
}
