import React from 'react';
import { makeStyles } from '@material-ui/core';
import attorney_chairs from '../../assets/images/content-01-attorneys.jpg'
import firefighter from '../../assets/images/sub-02-subrogation.jpg'
import friends_around_table from '../../assets/images/sub-02-litigation.jpg'
import pencil_write from '../../assets/images/sub-02-business.jpg'
import blue_truck from '../../assets/images/sub-02-warehouse.jpg'
import background from '../../assets/images/nza_background.jpg'
import logo from '../../assets/images/Imagefile.png'
import login from '../../assets/images/login.png'
import tallsidenavback from '../../assets/images/nav_side.jpg'
import welcome from '../../assets/images/sub-01-welcome.jpg'

interface Props{
    title: string
}

const useStyles = makeStyles({
    root: {
        margin: "0",
        padding: "0",
        fontFamily: "Arial, Helvetica, sans-serif"
      },
      NavTop: {
        gridArea: "NavTop",
        display: "flex",
        width: "90%",
        margin:'0 auto 0 auto',
        justifyContent: "space-between"
      },
      loginbutton: {
        cssFloat: "right",
        alignSelf: "end",
        height: "40px",
        borderBottomLeftRadius: "6px",
        borderBottomRightRadius: "6px"
      },
      sampleimage: {
        display: "inline-flex",
        gridArea: "header1",
        height: "75px",
        width: "300px",
        alignSelf: "flex-end"
      },
      NavUnder:{
        gridArea: "NavUnder",
        display: "flex",
        width: "90%",
        margin: "auto auto",
        padding: "15px 0",
    
        borderTop: "3px solid black",
        borderBottom: "3px solid black",
        '& span': { fontSize: "15px" },
        '& a': {
            margin: "auto auto",
            fontSize: "large",
            color: "black",
            fontFamily: "Arial, Helvetica, sans-serif",
            textDecoration: "none"}
        },
      footer: {
        gridArea: "footer",
        display: "flex",
        width: "fit-content",
        margin: "0 auto 0 auto",
        borderTop: "2px solid black",
        justifycontent: "space-between"
      },
    center:{ 
        display: "flex",
        width: "fit-content",
        margin: ".5% auto",
        '& a':{
            textDecoration: "none",
            fontSize: "large",
            margin: "auto 35px",
            color: "black"
         },
        },
    body: {
        gridArea: "body",
        width: "90%",
        margin: "10px auto 10px auto",
        display: "grid",
        gridTemplateColumns: "25% 75% ",
        gridTemplateRows: "20% 40% 40%",
        gridTemplateAreas:
        '"sidebarleft paragraph  "\r\n "sidebarleft image "\r\n "sidebarleft image "\r\n'
    },
    sidebar_left: {
        gridArea: "sidebarleft",
        backgroundImage: `url(${tallsidenavback})`,
        padding: "20px",
        color: "white",
        marginBottom: "10px",
        marginRight: "10px",
        backgroundColor: "rgb(153, 23, 45)",
        justifyContent: "center",
        borderBottom: "1px black",
        fontSize: '15px',
        '& h2': { borderBottom: "3px solid white" },
    },
    paragraph:{
        marginLeft:"20px"
    },
  
    image: { 
        marginLeft:"20px",
        gridArea: "image",
        padding: "0 10px 0 0",
        width: "100%",
        borderBottom: "1px black",
        '& img':{
            width:"45%",
            height:"150px",    
        }},
  
    Subrogation:{
        margin:"0 10px 10px 0"
        },
  
    Litigation:{
        margin:"0 10px 10px 0"
        },
  
    Business:{
        margin:"0 10px 0 0"
        },
  
    Transportation:{
        margin:"0 10px 0 0"
        },
  
    right:{
        marginLeft:"20px",
        marginTop:"2px",
        marginRight:"20px"
    },
    BusinessTwo: {
        border: "2px white",
        marginLeft: "auto",
        marginRight: "auto"
      },
    Attorney: {
      border: "2px white",
      marginLeft: "auto",
      marginRight: "auto",
      width: '90%'
      },
    
    background: {
        padding: "2% 10%",
        height: "90vh",
        width: "auto",
        backgroundImage: `url(${background})`,
        justifyContent: "center"    
    }
    }); 

export const WhatDo = (props:Props) => {  
    const classes = useStyles();
        
    return (

<div className="container">    
    <div className={classes.NavTop}>
        <img className={classes.sampleimage} src={logo}/>
        <img className={classes.loginbutton} src={login}/>
    </div> 
    <div className={classes.NavUnder}>
        <a href="/WhoAre"> Who We Are</a>
        <a href="/WhatDo"> What We Do</a>
        <a href="#"> News and Events</a>
        <a href="/WhereWork"> Where We Work</a>    
        <a href="/Contact"> Contact Us </a>
    </div> 
    <div className={classes.body}>
        <div className={classes.sidebar_left}>
            <h2>WHAT WE DO</h2>
            <p id={classes.right}>Subrogation</p>
                <td id={classes.right}>Property</td>
                <td id={classes.right}>Worker's Comp</td>
            <p id={classes.right}>Litigation</p>
                <td id={classes.right}>Appeliate</td>
                <td id={classes.right}>Commercial</td>
                <td id={classes.right}>Defense</td>
                <td id={classes.right}>Labor/Employment</td>
            <p id={classes.right}>Business</p>
                <td id={classes.right}>Brokerage Agreement</td>
                <td id={classes.right}>Business Formation</td>
                <td id={classes.right}>Contracts</td>
                <td id={classes.right}>Property</td>
                <td id={classes.right}>Labor/Employment</td>
            <p id={classes.right}>Transportation</p>
                <td id={classes.right}>Brokerage Agreement</td>
                <td id={classes.right}>Business Formation</td>
            <img className={classes.Attorney} src={welcome} alt="Attorneys"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className={classes.paragraph}>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, dolor rem iste id cupidate ipsam. Laborum 
            ab voluptatibus praesentium error, eius nobis reprehenderit laudantium tempora voluptates dignissimos 
            excepturi quidem odit? Quia, dolor rem iste id cupiditate ipsam. Laborum ab voluptatibus praesentium
            error, eius nobis reprehenderit laudantium tempora voluptates dignissimos excepturi quidem odit? Quia,
            dolor rem iste id cupidate ipsam. Laborum ab voluptatibus praesentium error, eius nobis reprehenderit
            laundantium tempora voluptates dignissimos excepturi quidem odit. </p>
        </div>
            <div className={classes.image}>
                <img className={classes.Subrogation} src={firefighter} alt="Dramatic Firefighter"/>
                <img className={classes.Litigation} src={friends_around_table} alt="Business Casual"/>
                <br/>
                <img className={classes.Business} src={pencil_write} alt="Aggressive Writing"/>
                <img className={classes.Transportation} src={blue_truck} alt="Autobots Rollout"/>
            </div>
    </div>
        <div className={classes.footer}>
            <div className={classes.center}>
            <a href="/WhoAre">Who We Are</a>
            <span>&#9135;</span>
            <a href="/WhatDo">What We Do</a>
            <span>&#9135;</span>
            <a href="#">News and Events</a>
            <span>&#9135;</span>
            <a href="/WhereWork"> Where We Work</a>
            <span>&#9135;</span>
            <a href="/Contact">Contact US</a>
        </div>
    </div>
    
</div>
        
    )
}