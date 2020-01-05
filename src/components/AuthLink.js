import React, { useState, useEffect } from "react";
import axios from "axios";
import { FORUM_BASE_URL } from "../helpers";

function LoginLink({ url, text }) {
    return (
        <li>
            <a target="_blank" href={url}>{text}</a>
        </li>
    );
}
export default function AuthLink({ isAuthenticated }) {
    const url = isAuthenticated
        ? "https://forum.codeselfstudy.com/my/summary"
        : "https://forum.codeselfstudy.com/login";
    const text = isAuthenticated ? "my account" : "log in";
    return <LoginLink url={url} text={text} />;
}
