import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import DashBoard from "./pages/dashboard";
import News from "./pages/news";
import Login from "./pages/login";
import Header from "./components/header";
import {useDispatch} from "react-redux";
import {login} from "./redux/actions/userActions";

function App() {
    const dispatch = useDispatch()
    useEffect(() =>{
        if (localStorage.getItem('user')){
            dispatch(login())
        }
    },[])
  return (
    <Router>
        <Header/>
        <Route exact path='/' component={DashBoard}/>
        <Route path='/news' component={News}/>
        <Route path='/login' component={Login}/>
    </Router>
  );
}

export default App;
