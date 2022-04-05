import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import smilelogo from '../assests/smilelogo.png'
import PosterCake from '../assests/PosterCake.png'
import muffin from '../assests/muffin.jpeg'
import cakes from '../assests/cakes.jpeg'
import coocies from '../assests/coocies.jpeg'
import doughnut from '../assests/doughnut.jpeg'
import classes from './Main.module.css'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
export class Main extends Component {
    render() {
        return (
            <div style={{alignItems: "center"}}>
                <nav class="navbar ">
                <a class="navbar-brand" href="#">
                <img src={smilelogo} className={classes.logot} alt="logo" />
                    
                </a>
                </nav>
                <br></br>
                <img src={PosterCake} className={classes.poster} alt="logo" />
               <br></br>
                <div class={classes.head}>
                    <br></br>
                    <h1><u>Our Bakes</u></h1>
                </div>
                <br></br>
                {/* <div>Click <NavLink to='/Transactions'>Here</NavLink> to view Transaction data</div>
                <div>Click <NavLink to='/Holdings'>Here</NavLink> to view Holdings data</div> */}
                {/* <div class="row justify-content-center" >
                    <div class="col-sm-5">
                        <div class="card text-center text-white bg-danger mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Transactions</h5>
                            <p class="card-text">To view Transaction data</p>
                            <a href="#"  ><NavLink to='/Transactions' class="btn btn-outline-warning text-white">Click Here</NavLink></a>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="card text-center text-white  bg-info mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Holdings</h5>
                            <p class="card-text">to view Holdings data</p>
                            <a href="#" ><NavLink to='/Holdings' class="btn btn-outline-warning text-white">Click Here</NavLink></a>
                        </div>
                        </div>
                    </div>
                    </div> */}
                    <CardGroup>
                        <Card style={{ width: "22rem" }}>
                            <img class={classes.img} src={muffin} />
                            <Card.Body>
                            <Card.Title>Muffin</Card.Title>
                            <Card.Text>
                            A recipe for your favorite bakery-style chocolate chip muffins. Soft, fluffy, and bursting with chocolate chips and perfect tall muffin.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 5 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card style={{ width: "22rem" }}>
                        <img class={classes.img} src={cakes} />
                            <Card.Body>
                            <Card.Title>Cakes</Card.Title>
                            <Card.Text>
                            We bring you a melt-in-mouth rang of cakes online that you never tested or seen before. Order Custom cake for any occasion of celebration.

                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <br></br>
                    </CardGroup>
                    <CardGroup>
                                    
                                <Card>
                            <img class={classes.img} src={coocies} />
                            <Card.Body>
                            <Card.Title>COOKIES</Card.Title>
                            <Card.Text>
                            There’s nothing better than the smell (or taste!) of a freshly baked Cookies
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                            </Card>
                            <Card>
                            <img class={classes.img} src={doughnut} />
                            <Card.Body>
                            <Card.Title>Doughnutzz</Card.Title>
                            <Card.Text>
                            The sugar doughnuts! Round, cushiony, bready, sugar dusted goodness. No frills, nothing fancy schmancy, just  pure goodness
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                            
                        </Card>
                                    
                    </CardGroup>  
                  
                    <div class={classes.contact}>
                    <div class={classes.head}>
                        <br></br>
                        <h1><u>Contact US</u></h1>
                    </div>
                        <br></br>
                        <b><p>Email:SmileBakers@gmail.com</p>
                        <p>Ph No.: 1010101010</p>
                        <p>Physically available @ City Center, Hubli Karnataka 580020</p>
                        </b>
                    </div>
                
                    <div class={classes.footer}>
                        <p><b><i>Have a Sweetlicious Day :)</i></b></p>


                    </div>
            </div>
            

        )
    }
}

export default Main
