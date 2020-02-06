import { Router } from "@reach/router";
import React from "react";
import { Home } from "./home";
import { Sky } from "./sky";

const Routes = () => {
    return (<Router>
        <Home default />
        <Sky path="/sky" />
    </Router>)
};

export { Routes };
