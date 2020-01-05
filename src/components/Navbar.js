import React from "react";
import { Link } from "react-router-dom";
import AuthLink from "./AuthLink";
import { FORUM_BASE_URL } from "../helpers";

export default function Navbar({ isAuthenticated }) {
    return (
        <nav id="headerNav">
            <ul>
                <li>
                    <Link className="brand" to="/">
                        news
                    </Link>
                </li>

                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <a
                        href={`${FORUM_BASE_URL}/new-topic?title=&body=&category=news&tags=`}
                    >
                        submit
                    </a>
                </li>
                {/* for now, just show a "my account" link, whether they
                are logged in or not */}
                <AuthLink isAuthenticated={true} />
            </ul>
        </nav>
    );
}
