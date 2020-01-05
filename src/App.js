import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AuthLink from "./components/AuthLink";
import { FORUM_BASE_URL } from "./helpers";
import "./App.scss";

export default function BasicExample() {
    return (
        <Router>
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
                    <AuthLink isAuthenticated={true} />
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
            <Footer />
        </Router>
    );
}
