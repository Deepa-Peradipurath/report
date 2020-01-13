// import React from "react";

// const Notification = ()=>{
//     return(
//         <h1>Notification</h1>
//     )
// }
// export default Notification
import React, {Fragment }  from "react";
//import Tabs from "../tabs/index-old";
import Tabs from "../tabs/index";
import BreadCrumbs from "./../breadcrumbs";

const Notification = () => {
    return (
        <Fragment>
            <BreadCrumbs/>
            <Tabs />
        </Fragment>
    )
}
export default Notification