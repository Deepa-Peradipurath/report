// import React from "react";

// const Notification = ()=>{
//     return(
//         <h1>Notification</h1>
//     )
// }
// export default Notification
import React, {Fragment }  from "react"
//import { useEffect } from "react"
import { useDispatch ,useSelector } from "react-redux"
import Tabs from "../tabs/index"
import BreadCrumbs from "./../breadcrumbs"
import actions from "../../store/actions"
import Loader from "../Loader"

const Manage = () => {
    const data = useSelector(state => state.notification);
    console.log("Notifications....");
    const appId = data ? data.selectedApp.appId : null;
    console.log(appId);
    const dispatch = useDispatch();

    
    React.useEffect(() => {
        dispatch(actions.getSelectedApp());
    },[dispatch]);

    if ( appId ) {
        return (
            <Fragment>
                <BreadCrumbs/>
                <Tabs appId = { appId }/>
            </Fragment>
        )

    } else {
        return (
            <Loader/>    
        )
    }  
    
}
export default Manage