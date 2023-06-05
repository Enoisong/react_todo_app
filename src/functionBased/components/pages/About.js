import React from 'react'
import { Link, useRouteMatch, Route } from "react-router-dom"
import SinglePage from './SinglePage'

const About = () => {
    const { url, path } = useRouteMatch()
    return (
        <div className="about_content">
            <ul className="about_list">
                <li>
               <Link to={`${url}/about-app`}>About App</Link>
               </li> 
               <li>
               <Link to={`${url}/about-author`}>About Author</Link>
               </li>                  
 
            </ul>
            <Route path={`${path}/:slug`}>
                <SinglePage />
            </Route>
        </div>
    )
}