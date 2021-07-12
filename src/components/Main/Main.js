import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { page } from '../../router';

import './style.css';

import Home from '../Home/Home';
import Work from '../Work/Work';
import Services from '../Services/Services';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import NotFound from '../NotFound/NotFound';

const Main = ({ location }) => {
    useEffect(() => {
        const body = document.querySelector('#root');
    
        body.scrollIntoView({
            behavior: 'smooth'
        }, 200)
    
    }, []);

    return(
        <main className="Main">
            <Switch location={location}>
                <Route path={page.home} exact ><Home /></Route>
                <Route path={page.work} exact ><Work /></Route>
                <Route path={page.services}><Services /></Route>
                <Route path={page.about}><About /></Route>
                <Route path={page.contactUs} exact ><ContactUs /></Route>
                <Route path="*"><NotFound /></Route>
            </Switch>
        </main>
    );
}

export default Main;