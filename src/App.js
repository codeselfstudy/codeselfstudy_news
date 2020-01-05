import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import "./App.scss";

export default function BasicExample() {
    return (
        <Router>
            <nav id="headerNav">
                <ul>
                    <li>
                        <Link class="brand" to="/">
                            News
                        </Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

            <main id="main">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}
