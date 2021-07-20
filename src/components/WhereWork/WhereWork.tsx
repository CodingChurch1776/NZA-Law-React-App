import React from 'react';
import { makeStyles } from '@material-ui/core';
import surfing_the_web from '../../assets/images/content-navlink-career.jpg'
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
      body: {
        gridArea: "body",
        width: "90%",
        margin: "10px auto 0 auto",
        display: "grid",
        gridTemplateColumns: "25% 60% 15%",
        gridTemplateRows: "25% 75%",
        gridTemplateAreas:
          '"sidebar paragraph paragraph "\r\n    "sidebar stateTable internationalTable"'
      },
      paragraph: { 
        gridArea: "paragraph",
        '& p': { lineHeight: 2, marginBottom: "70px" }
        },
      sidebar: {
          gridArea: "sidebar",
          backgroundImage: `url(${tallsidenavback})`,
          backgroundPosition: "center",
          height: "fit-content",
          padding: "20px 0",
          width: "90%",
          color: "white",
          '& h1': {
              borderBottom: "2px solid white",
              margin: "10px auto",
              width: "80%",
              fontWeight: "lighter"
            },
          '& ul': {
              listStyle: "none",
              width: "80%",
              margin: "auto auto",
              paddingLeft: "0",
              '& p': { fontSize: "small", margin: "0 0" },
              '& li':{ margin: "20px 0", paddingLeft: "0",
                  "& img": { width: "100%" }
          }
        }
      },
        stateTable: {
          display: "flex", 
          marginTop: "10px",
          gridArea: "stateTable",
          '& th': {
              textAlign: "center",
              fontSize: "large",
              borderBottom: "2px solid rgb(183, 183, 183)",
              padding: "5px 0"
            },
          '& td': { 
              paddingTop: "5px",
              margin: "0 auto"},
  
          '& tr': { 
              padding: "5px 0 0 0",
              margin: "0 0 0 0"}
          
           },
  
        internationalTable: { cssFloat: "left", marginTop: "10px", width: "100%" , gridArea: "internationalTable",
        '& th': {
          textAlign: "left",
          fontSize: "large",
          borderBottom: "2px solid rgb(183, 183, 183)",
          padding: "5px 0"
        },
        '& td': { paddingTop: "5px" }
      },
  
        no_bottom_margin: { marginBottom: "10px" 
      }        
      }); 

export const WhereWork = (props:Props) => {  
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
            <div className={classes.sidebar}>
                <h1>Where We Work</h1>
                <ul>
                    <li>United States</li>
                    <li>International</li>
                    <li><img src={surfing_the_web}/></li>
                    <li className={classes.no_bottom_margin}>Career Opportunities</li>
                    <p> Join our magnificent firm</p>
                </ul>                 
            </div>
            <div className={classes.paragraph}>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia neque facilis iure mollitia blanditiis nobis qui! Quae vero dignissimos labore assumenda dolorem! Quam doloribus quaerat at deserunt accusamus itaque soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. At enim delectus suscipit veniam corrupti ipsum sapiente voluptatum fugiat est harum recusandae deleniti ipsa accusamus eum quod repellendus autem, molestiae modi.</p>
            </div>
            <div className={classes.stateTable}>
                <table id={classes.stateTable}>
                    <tr  >
                        <th colSpan={3}> United States </th>
                    </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>    
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>    
                        </tr>   
                        <tr>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>    
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>    
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>    
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>    
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>    
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>    
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>    
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                            <td>State</td>    
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                               
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                               
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>State</td>
                            
                        </tr>
                </table>
            </div>
            <div className={classes.internationalTable}>
                <table id="table2">
                    <tr >
                        <th>International</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>Columbia</td>
                        </tr>
                        <tr>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Nicaragua</td>
                        </tr>
                    </tbody>
                </table>
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