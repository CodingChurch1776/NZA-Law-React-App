import React from 'react';
import { makeStyles } from '@material-ui/core';
import nza_forest from '../../assets/images/nza_slideshow.jpg'
import background from '../../assets/images/nza_background.jpg'
import logo from '../../assets/images/Imagefile.png'
import login from '../../assets/images/login.png'
import tallsidenavback from '../../assets/images/nav_side.jpg'

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
        body:{
            gridArea: "body",
            width: "90%",
            margin:"10px auto 0 auto",
            display: "grid",
            gridTemplateColumns: "20% 60% 20%",
            gridTemplateRows: "75% 25%",
            gridTemplateAreas:
            '"middle middle sidebar_right "\r\n    "middle middle sidebar_text"'
          },
        
          sidebar_right:{
            gridArea: "sidebar_right",
            backgroundColor: "hsl(14, 82%, 26%)",
            color: "white",
            overflowY: "auto",
            marginLeft:'20px',
            paddingLeft: "20px",
            paddingRight: "20px",
            fontSize: "small",
            height: "80%"
          },
        
          newsfeed: { textDecoration: "underline",
          },
        
          sidebar_text: {
            display: "block",
            gridArea: "sidebar_text",
          },
        
          middle: { 
            gridArea: "middle",
            paddingLeft:"0",
            "& h3":{marginLeft: "10px" },
            "& p":{marginLeft: "10px" }
            },
        
            responsive: { width: "100%", height: "70%", marginRight: "20px" 
            },
      }); 

export const WhoAre = (props:Props) => {  
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
        <div className={classes.middle}> 
            <img className={classes.responsive} src={nza_forest} alt="nature shot"/>
            <h3>Welcome to our website</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dicta cupiditate consectetur nam esse quisquam at totam quas, voluptatibus optio, minus laborum ducimus fuga explicabo nobis! Ipsum, mollitia nam. Ipsa!</p>
        </div>
        <div className={classes.sidebar_right}>
            <h3 className={classes.newsfeed}>NEWS FEED</h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
            Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
            consequuntur tempora dolorum enim inventore qui repudiandae <br />
            adipisci debitis dignissimos deleniti itaque odit excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
            Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
            consequuntur tempora dolorum enim inventore qui repudiandae <br />
            adipisci debitis dignissimos deleniti itaque odit excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
            Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
            consequuntur tempora dolorum enim inventore qui repudiandae <br />
            adipisci debitis dignissimos deleniti itaque odit excepturi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
            Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
            consequuntur tempora dolorum enim inventore qui repudiandae <br />
            adipisci debitis dignissimos deleniti itaque odit excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
            Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
            consequuntur tempora dolorum enim inventore qui repudiandae <br />
            adipisci debitis dignissimos deleniti itaque odit excepturi!Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
            Tempore aspernatur at ratione consequatur, sed hic iste <br /> 
            consequuntur tempora dolorum enim inventore qui repudiandae <br />
            adipisci debitis dignissimos deleniti itaque odit excepturi!
        </div>
        <div className={classes.sidebar_text}>
            <h5>Bigshot, Zoo, & Adds, P.C.</h5>
            <p className="address">419 West South Street, Suite 4200 <br />
                Houston, Texas 35983 <br />
                555-555-5555 (Phone) <br />
                555-555-5555 (Fax) <br />
            </p>
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
          