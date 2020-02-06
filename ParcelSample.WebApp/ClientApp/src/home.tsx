import React from "react";
import { Link, RouteComponentProps } from "@reach/router";

const Home = (props: RouteComponentProps) => (
    <div>
        <h1>Welcome!</h1>
        <h2>A sample project with ASP.NET Core 3.0, React 16.12 and Parcel 1.12</h2>
        <p>Click <Link to="/sky">here</Link> if you wish to see a nice picture of sky.</p>
    </div>)

export { Home }