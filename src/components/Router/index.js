import React , {Fragment} from "react";
import { Router } from "@reach/router";

import Home from "../Home/index";
import Notification from "../Notification/index";

const AppRouter = () => {
    console.log("Proxy Router launched......");
    function Display({ label }) {
        console.log("Display");
        return <div>{label}Hi</div>;
      }
    return (
        <Fragment>
            <Router>
                <Home path="/app"/>
                <Notification path="/app/notification" >
                <Display path="/app/notification/Templates" label="Manage Templates" />
                <Display path="/app/notification/Reports" label="Manage Reports" />
                <Display path="/app" label="Manage Notifications" />
                </Notification>
            </Router>
        </Fragment>
        
    )
}
export default AppRouter