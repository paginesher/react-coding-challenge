import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav> 
                <Link to="/">
                    Page 1
                </Link>
                <Link to="/pagetwo">
                    Page 2
                </Link>
                <Link to="/pagethree">
                    Page 3
                </Link>
            </nav>
        )
    }
