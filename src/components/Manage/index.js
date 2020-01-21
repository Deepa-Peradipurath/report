import React, {Fragment ,useEffect }  from "react"
import { useDispatch ,useSelector } from "react-redux"
import Tabs from "../tabs/index"
import BreadCrumbs from "./../breadcrumbs"
import actions from "../../store/actions"
import Loader from "../Loader"

const Manage = () => {
    const data = useSelector(state => state.notification);
    console.log("Manage....");
    const appId = data ? data.selectedApp.appId : null;
    const appName = data ? data.selectedApp.appName : null;
    console.log(appId);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getSelectedApp());
    },[dispatch]);

    if ( appId ) {
        return (
            <Fragment>
                <BreadCrumbs appName ={ appName }/>
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