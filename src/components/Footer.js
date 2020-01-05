import React from "react";
import { Link } from "react-router-dom";

const styles = {
    margin: "117px 0 0 0",
    padding: "17px",
    borderTop: "1px solid #aaa",
};

export default function Footer() {
    return (
        <footer style={styles}>
            <a href="https://codeselfstudy.com/">Code Self Study</a> &bull;
            Berkeley, California &bull; <Link to="/about">About Us</Link>
        </footer>
    );
}
