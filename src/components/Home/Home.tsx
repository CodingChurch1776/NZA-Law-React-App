import React from 'react';
import { makeStyles } from '@material-ui/core';
import background from '../../assets/images/nza_background.jpg'
import logo from '../../assets/images/Imagefile.png'
import login from '../../assets/images/login.png'

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
      }); 
     

export const Home = (props:Props) => {  
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
    <div className={classes.center}>

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
  