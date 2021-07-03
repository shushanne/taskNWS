import React, { useEffect } from "react";
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {getCats, getCatsCategories} from "../../store/actionCreators/fetchCats"
import {Cat} from "../../components/Cats/Cat";
import {Sidebar} from "../../components/SideBar/Sidebar";
import "./listofcats.scss";

export const ListOfCats = () => {
    const dispatch = useDispatch();
    const catsList = useSelector((state) => state.fetchCats.cats);
    const error = useSelector((state) => state.fetchCats.error);
    const loading = useSelector((state) => state.fetchCats.loading);
    const catsCategories = useSelector((state) => state.fetchCats.catsCategories);
    const params = useParams()

    useEffect(() => {
        dispatch(getCats())
        dispatch(getCatsCategories(params))
    }, [params])

    return (
        <div className="main">
        <Sidebar catsCategories={catsCategories}/>
        <div className="main-content">
            {catsList && catsList.map((item, index)=> (
              <Cat item={item} key={item.id}/>
            ))}
            {!catsList && <div>No Items Available</div>}
            {error && !loading && <div>{error}</div>}
        </div>
        </div>
    )
}
