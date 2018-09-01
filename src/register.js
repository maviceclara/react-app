import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './css/register.css';

class Register extends Component {
constructor() {
  super()

  this.state = {
            name:'',
            email:'',
            password:''
  }
}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

}

submitForm = () => {
  let newUser = {
    name: this.state.name,
    email: this.state.email,
    password: this.state.password
  }

  localStorage.setItem(this.state.email, newUser)
  let registerPromise= axios.post('https:v-forum-api.bahdcasts.com/api/register', newUser);
  registerPromise.then((response)=>{
    console.log(response)
  }).catch((error)=>{
    console.log(error);
  })
}

  render() {
    return (
      <div >
        <div className="jumbotron">
        <div className="containerbi">
          <div className="containersm">
            <h1>Join Medium</h1>
            <h2 className="my-4 text-dark">Create an account to personalize your homepage, follow your favorite authors and publications, applaud stories you love, and more.</h2>
            <div className="btnall2">
              <input type="text" name={"name"} id="name" value={this.state.name} className="form-control mb-2" placeholder="Enter name.." onChange={this.handleChange}/>
              <span className id="error-name" />
              <input type="email" name={"email"} id="email" value={this.state.email} className="form-control mb-2" placeholder="Enter email.." onChange={this.handleChange}/>
              <span className id="error-email" />
              <input type="password" name={"password"} id="password" value={this.state.password} className="form-control" placeholder="Enter password.." onChange={this.handleChange}/>
              <span className id="error-password" />
              <button className="btn btn-primary btn-sm my-3" id="btn" onClick={this.submitForm}>Submit</button>
              <small id="error-message" className="text-center text-danger" />
              <button className="btn btn-primary btn-sm my-3 " id="btn-loading" >
                <i className="fas fa-spinner fa-spin" />
              </button>
            </div>
            <div className="openacct">
              <p className>Already have an account? <a href="login.html"><span className="text-success">Sign in.</span></a></p>
              <p className="mt-5">To make Medium work, we log user data and share it with service providers. Click "Sign in" above to accept Medium’s 
                <Link to="/."><span className="text-dark">Terms of Service</span></Link> &amp;  
                <Link to="/."><span className="text-dark">Privacy Policy</span></Link>.
              </p>
            </div>
          </div>
        </div>
        </div>

      </div>
    );
  }
}

export default Register ;
