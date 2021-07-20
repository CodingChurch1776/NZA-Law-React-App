import React from 'react';
import { makeStyles } from '@material-ui/core';
import background from '../../assets/images/nza_background.jpg'
import logo from '../../assets/images/Imagefile.png'
import login from '../../assets/images/login.png'
import shortsidenavback from '../../assets/images/nav_side_sub.jpg'
import dotmap from '../../assets/images/content-navlink-where.jpg'
import phone from '../../assets/images/content-05-contact.jpg'
import tallmeninsuits from '../../assets/images/content-link-reputation.jpg'
import tanback from '../../assets/images/other_links_background.jpg'
import metalpen from '../../assets/images/content-navlink-news.jpg'

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
        margin: "10px auto 0 auto",
        display: "grid",
        gridTemplateColumns: "25% 50% 25%", 
        gridTemplateAreas:
        '"sidebar_left main sidebar_right  "'
    },
    sidebar_left: {
        gridArea: "sidebar_left",
        padding: "10px",
        margin: "10px 10px 10px 0",
        height: "90%",
        color: "white",
        backgroundColor: "rgb(153, 23, 45)",
        justifyContent: "center",
        borderBottom: "1px black",
        "& h2": { borderBottom: "3px solid white" },
        "& p":{
            margin: "20px auto 10px auto"
        }
      },

    sidebar_right: {
        gridArea: "sidebar_right",
        padding: "10px 0 0 0",
        margin: "10px auto 10px auto",
        color: "maroon",
        height: "80%",
        backgroundColor: "rgb(219, 212, 201)",
        justifyContent: "center",
        borderBottom: "1px black",
        "& p":{
            margin: "30px auto 20px auto"
        }
      },
    main: {
        gridArea: "main",
        width: "100%",
        height: "80%",
        margin: "10px 10px",
        lineHeight: "15px",

        "& p":{
            margin: "20px auto 0 auto"
      }},
    
    folderpen: {
        border: "2px white",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%"
      },

    right: { fontSize: "20px",margin:"0 10px 0 10px"},

    where_we_work: { fontWeight: "bold", margin:"10px" },

    whereimage: {
        border: "2px solid black",
        gridArea: "sidebar_right",
        display: "block",
        cssFloat: "left",
        marginLeft: "auto",
        marginRight: "auto",
        width: "85%",
        height: "20%"
    },

    news_and_events: {
        border: "1px solid black",
        gridArea: "sidebar_right",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "85%",
        height: "20%"
    },

    news: { color: "black" },

    rotaryphone: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",
        height: "200px",
        marginBottom: "10px"
      },

    pformat: {
        fontSize: "18px",
        margin: "20px 10px 0 0"
    }

})


export const Contact = (props:Props) => {  
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
                <h2>CONTACT US</h2>
                <p id={classes.right}>Directions/Parking</p>
                <p id={classes.right}>Career Opportunities</p>
                <img src={metalpen} alt="Folders, Pens, Notebook"/>
                <p id={classes.right}> News & Events</p>
                <p id={classes.right}> Join our magnificent firm and do more stuff with us</p>
        </div>
        <div className={classes.main}>
            <img id={classes.rotaryphone} src={phone} alt="Picture of Rotary Phone"/>
            
            <p id={classes.pformat}>The office hours are 8am - 5pm Monday through Friday</p>
            
            <p id={classes.pformat}>689 East South Street</p>
            <p id={classes.pformat}>Suite 4210</p>
            <p id={classes.pformat}>Houston, Texas 09324</p>
            
            <p id={classes.pformat}>PH: 555.555.5555</p>
            <p id={classes.pformat}>FAX: 555.555.5555</p>
            <p id={classes.pformat}>Contact Rosemary Sage at <a href="rosemary@lawfirm.com">rosemary@lawfirm.com</a></p>
        </div>

        <div className={classes.sidebar_right}>
            <img id={classes.whereimage} src={dotmap} alt="Small Map"/>
            <p id={classes.where_we_work}>Where We Work</p>
            <p>Find out more about our work coverage area</p>
            <img id={classes.news_and_events} src={tallmeninsuits} alt="People Standing Around in Suits"/>
            <p id={classes.news}>Join our magnificent firm and do more stuff with us.</p>
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
)}