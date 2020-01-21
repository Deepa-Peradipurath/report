import React from "react";
import { useSelector, useDispatch } from "react-redux";
import  actions  from "../store/actions";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SwitchesSize = ({ status ,type, typeId,changeStatus}) => {
  
  const data = useSelector(state => state.notification);
  const statusChangedSucess = !!data ? data.statusChanged:""
  console.log(statusChangedSucess)
  const [checked, setChecked] = React.useState(false);
  const [statusValue, setStatusValue] = React.useState(status);
  const [statusChange, setStatusChange] = React.useState(statusChangedSucess);

  const dispatch = useDispatch();

  const toggleChecked = () => {
    dispatch(actions.statusUpdate({
        "tab":type,
        "status":status,
        "appId":101,
        "typeId":typeId,

    }));
    // if(statusChange ){
        setChecked(prev => !prev);
        setStatusValue(statusValue === "Active" ? "Inactive" : "Active");
    // }
  

 
  };
  React.useEffect(() => {
    const checkedStatus = status === "Active" ? true : false;
    setChecked(checkedStatus);
    setStatusValue(status);
    // setStatusChange(statusChangedSucess)
  }, [status,]);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch color="secondary" size="small" checked={checked} onChange={toggleChecked} />
        }
        label={statusValue}
      />
    </FormGroup>
  );
};

export default SwitchesSize;
