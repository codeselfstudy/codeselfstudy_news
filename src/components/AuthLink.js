import React from "react";
import { FORUM_BASE_URL } from "../helpers";

export default function AuthLink({ isAuthenticated }) {
    const url = isAuthenticated
        ? `${FORUM_BASE_URL}/my/summary`
        : `${FORUM_BASE_URL}/login`;
    const text = isAuthenticated ? "my account" : "log in";
    return (
        <li>
            <a href={url}>{text}</a>
        </li>
    );
}
