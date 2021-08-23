import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {AppBar, makeStyles, Toolbar} from "@material-ui/core"

export default function NavBar() {
    const useStyles = makeStyles(theme => ({
        root: {
            boxShadow: "none",
            backgroundColor: "lightskyblue"
        }
    }));

    const classes = useStyles();

    return (
        <Router>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <img src="https://www.myhelsinki.fi/static/97d28d50f16a3b2b470476a601aa37c2.svg" alt="myhelsinki"/>
                </Toolbar>
            </AppBar>
        </Router>
    )
}