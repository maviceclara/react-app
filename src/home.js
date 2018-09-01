import React, { Component } from 'react';
import "./css/home.css";
import {Link} from 'react-router-dom'



class Home extends Component {
  render() {
    return (
        <div >
            <header className="container">
                <div className="row">
                    <div className="col-md-4 pt-3">
                    <Link to="/login"><span className="text-muted">About membership</span></Link>
                    </div>
                    <div className="col-md-4">
                    <center><span className="logo">Medium</span></center>
                    </div>
                    <div className="col-md-4">
                        <div className="iconstyle">
                            <i className="fas fa-search " />
                            <Link to="/login"> <span className="text-success ml-2">Sign in</span></Link>
                            <Link className="btn btn-outline-success ml-2" to="/register" role="button">Get started</Link>
                        </div>
                    </div>
                </div>
            </header>

                <nav className="container">
                    <div className="row my-4 sm-2">    
                        <Link to="/login"> <span className="col" type="text-dark">HOME</span></Link>
                        <Link to="/login"> <span className="col" type="text-muted">FUTURE HUMAN</span></Link>
                        <Link to="/login"> <span className="col" type="text-muted">CULTURE</span></Link>
                        <Link to="/login"> <span className="col" type="text-muted">TECH</span></Link>
                        <Link to="/login"> <span className="col" type="text-muted">ENTREPRENEURSHIP</span></Link>
                        <Link to="/login"> <span className="col" type="text-muted">SELF</span></Link>
                        <Link to="/login"> <span className="col" type="text-muted">POLITICS</span></Link>
                        <Link to="/login"> <span className="col" type="text-muted">DESIGN</span></Link>
                        <Link to="/login"> <span className="col" type="text-muted">SCIENCE</span></Link>
                        <Link to="/login"> <span className="col" type="text-muted">POPULAR</span></Link>
                        <Link to="/login"> <span className="col" type="text-muted">MORE</span></Link>
                    </div>
                </nav>

                
                <div className="container-fluid">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4"> 
                        <Link to="/login"><div className="img_med_1" /></Link><br />
                        <div>
                            <Link to="/login"><h5 className="text-dark newFont">This is How Normal life Feels as a Psychopath</h5></Link>
                        </div>
                        <div className="page_descriptors pt-2">
                            <p className="text-muted metaData">Everyday, nonviolent psychopaths say they're... </p>
                            <span className="metaData">
                            <Link to="/login"> <span className="text-muted">Jessica Brown</span></Link><br />
                            <time>Jul 12  . </time>
                            <span className="ml-3"><i className="fas fa-star " /></span>
                            <span className="ml-3">6 min read</span>
                            </span>
                        </div>
                        </div>
                        {/*    second part of my row     */}
                        <div className="col-md-4">
                        <div className="media">
                            <Link to="/login"> <img className="mr-3" src="https://cdn-images-1.medium.com/fit/c/100/100/1*DcUzgjchHViNlVh4hIT11A.jpeg" alt="football" /></Link>
                            <div className="media-body newFont">
                            <h5 className="mt-0 meta_Data">Why France's Victory Matters</h5>
                            <p className="meta">Liberalism triumphed over a history of... </p>
                            <div className="seeFeat">
                                <time>Jul 16 .</time>
                                <span><i className="fas fa-star" /></span>
                                <span>4 min read</span>
                            </div>        
                            </div>
                        </div>
                        <div className="media mt-3">
                            <Link to="/login"> <img className="mr-3" src="https://cdn-images-1.medium.com/fit/c/100/100/0*Cw5gup1Wu-MdjkY3.jpg" alt="Man" /></Link>
                            <div className="media-body newFont">
                            <h5 className="mt-0 meta_Data">The Tech Jargon in Mueller's Russian Indictment, Explained</h5>
                            <div className="seeFeat mt-4 ">
                                <Link to="/login" className="text-muted">Neel mehta.</Link><br />
                                <time>Jul 16 .</time>
                                <span><i className="fas fa-star" /></span>
                                <span>11 min read</span>
                            </div>
                            </div>
                        </div>
                        <div className="media mt-3">
                            <Link to="/."><img className="mr-3" src="https://cdn-images-1.medium.com/focal/100/100/44/58/0*nJYamgDhX77DNU2d" alt="Pepsi" /></Link>
                            <div className="media-body newFont">
                            <h5 className="mt-0 meta_Data mb-3">Better Versions of Themselves</h5>
                            <div className="seeFeat mt-5 ">
                                <Link to="/login"> className="text-muted">Zander Nethercutt</Link><br />
                                <time>Jul 7 .</time>
                                <span><i className="fas fa-star" /></span>
                                <span>11 min read</span>
                            </div>
                            </div>
                        </div>
                        </div>    
                        {/*    third part of my row*/}
                        <div className="col-md-4 ">
                        <Link to="/login"> <div className="img_med_2" /></Link><br />
                        <div>
                            <Link to="/."><h5 className="text-dark newFont">Brett Kavanaugh Is Nice.That Doesn't Mean He's Not Sexist.</h5></Link>
                        </div>
                        <div className="page_descripors pt-2">
                            <p className="text-muted metaData">We've confused "sexism" with meannes...</p>
                            <span className="metaData">
                            <Link to="/login"> <span className="text-muted">Sady Doyle</span></Link><br />
                            <time>Jul 17  . </time>
                            <span className="ml-3"><i className="fas fa-star" /></span>
                            <span className="ml-3">6 min read</span>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>    
                </div>

                <div className="con">
                    <Link to="/login" className="seeFeat text-success"> SEE ALL FEATURED <i className="fas fa-greater-than" /></Link>
                </div>  
                {/*     The Fourth Section*/}

                <div className="divider" />

                <div className="container lead">
                    <div className="row ">
                        <div className="col-md-6 loc">
                            <h2 className="changetext"> Welcome to forum,<br /> where words matter</h2>
                            <p className="changetext2 text-muted">We'll deliver the best stories and ideas on the topics you care about most straight to your homepage, app, orinbox.</p>
                            <button className="btn btn-dark btn2">Get started</button>
                            <button className="btn btn-outline-dark">Learn more</button>
                        </div>
                        <div className="col-md-6 loc2">
                        </div>
                    </div>
                </div>
            </div>

        
    );
  }
}

export default Home ;
