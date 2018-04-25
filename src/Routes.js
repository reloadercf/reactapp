import React from 'react'
import {Switch,Route} from 'react-router-dom';
import HomePage from "./components/home/HomePage";
import {Perro} from './components/perros/Perro';
import {Perro2} from './components/perros/Perro2';
import Login from './components/login/Login';

export const  Routes = () =>(
    <Switch>
        <Route exact path="/" component ={HomePage}/>
        <Route path="/perro" component={Perro}/>
        <Route path="/perro2" component={Perro2}/>
        <Route path="/login" component={Login}/>
    </Switch>
);