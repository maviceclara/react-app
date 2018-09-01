import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import Register from './register';
import Login from './login';
import Home from './home';



ReactDOM.render(<BrowserRouter>
    <div>
        <Route path='/home' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
    </div>

</BrowserRouter>, document.getElementById('root'));
