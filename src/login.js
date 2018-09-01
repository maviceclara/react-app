import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import './css/login.css';
import axios from 'axios'

class Login extends Component {
constructor(){
  super()
  this.state = {
    email:'',
    password:''
  }
}


handleInputChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = () => {
  let loginDetails = {
    email: this.state.email,
    password: this.state.password
  }

  let registeredUser = axios.post('https:v-forum-api.bahdcasts.com/api/login', loginDetails)
  registeredUser.then((response)=> {
    console.log(response);
    if(response.status === 200) {
      return <Redirect to = '/home' />
    }
    
  }).catch((error)=>{
    console.log(error);
  })

}

  render() {
    return (
      <div >
        <div className="jumbotron">
          <div className="containerbig">
            <div className="containersmall">
              <h1>Welcome Back</h1>
              <h2 className="my-4 text-dark">Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you. </h2>
              <div>
                <input type="email" name={"email"} id="email" className="form-control mb-2" placeholder="Enter email.." onChange={this.handleInputChange} />
                <input type="password" name={"password"} id="password" className="form-control" placeholder="Enter password.." onChange={this.handleInputChange}/>
                <small id="error-message" className="text-center text-danger" />
                <button className="btn btn-primary btn-sm my-3" id="btn" onClick={this.handleSubmit}>Login</button>
              </div>
              <div className="acct">
                <p>No account? <Link to="/register"><span className="text-success">Create one.</span></Link></p>
                <p>To make Medium work, we log user data and share it with service providers. Click "Sign in" above to accept Medium’s
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

export default Login ;
