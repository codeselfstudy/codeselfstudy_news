import React from "react";

export default function About() {
    return (
        <div>
            <h2>About</h2>
            <p>
                This site is a simple Reddit- or HN-like site where you can
                submit interesting news and discuss it.
            </p>

            <p>The backend is Discourse and the frontend is React.</p>
            <p>
                For more information, see{" "}
                <a href="https://codeselfstudy.com/">Code Self Study</a> &mdash;
                a programming club in Berkeley, California.
            </p>
            <h2>Apps</h2>

            <p>Get the browser extensions for easier sharing:</p>

            <ul>
                <li>
                    <a href="https://addons.mozilla.org/en-US/firefox/addon/codeselfstudy/">
                        Firefox version
                    </a>{" "}
                    (recommended)
                </li>
                <li>
                    <a href="https://chrome.google.com/webstore/detail/code-self-study/mejalgpjkfdfpemlljeomjdefolbikch">
                        Chrome version
                    </a>
                </li>
            </ul>
            <p>
                The source code is available{" "}
                <a href="https://github.com/codeselfstudy/codeselfstudy_browser_extension">
                    here
                </a>
                .
            </p>
            <h2>Contributing</h2>
            <p>
                Please see the issue queue on{" "}
                <a href="https://github.com/codeselfstudy/codeselfstudy_news">
                    the project's Github page
                </a>
                .
            </p>
        </div>
    );
}
