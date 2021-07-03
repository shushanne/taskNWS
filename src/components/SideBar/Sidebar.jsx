import React from "react"
import "./sidebar.scss"
import {NavLink} from "react-router-dom";

export const Sidebar = ({catsCategories}) => {

    return (
        <div className="sidebar">
        {catsCategories && catsCategories.map((item, index)=> (
            <NavLink
                key={item.id}
                to={`/` + item.id}
                className="nav"
                activeClassName="nav-active">
                {item.name}
            </NavLink>
        ))}
    </div>
    )
}
