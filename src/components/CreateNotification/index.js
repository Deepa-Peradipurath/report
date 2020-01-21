import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions  from "../../store/actions";
import FormHeader from "../FormHeader/index";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import CustomButton from "../Button";
import FormTextBox from '../formTextBox';
import "./CreateNotification.scss";

const CreateNotificationForm = ({ setShowEdit, tag, editInfo }) => {
  const [edit, setEdit] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [description, setDescription] = useState("");
  const [ntType, setNtType] = useState("");
  const[typeId,setTypeId] = useState("");
  useEffect(() => {
    setEdit(editInfo);
    setDropdown(editInfo.categoryId);
    setDescription(editInfo.description);
    setNtType(editInfo.type);
    setTypeId(editInfo.typeId)
  }, [editInfo]);

  const changeID = event => {
    setDropdown(event.target.value);
  };
  const changeType = event => {
    setNtType(event.target.value);
  };
  const changeDescription = event => {
    setDescription(event.target.value);
  };
  const dispatch = useDispatch();

  const createNotification = () => {
    dispatch(
      actions.createNewNotification({
        name: ntType,
        description: description,
        categoryId: 100,
        appId: 2111

      })
    );
  };
  const editNotification = () => {
    dispatch(
      actions.editNotification({
        name: ntType,
        description: description,
        categoryId: 100,
        typeId:typeId,
        appId: 2111

      })
    );
  };

  return (
    <div className="create-notification-form-container">
      <Grid container item xs={12} >
        <FormHeader
          title={tag === "edit" ? "Edit Notification" : "Create Notification"}
          icon={tag === "edit" ? "edit" : "file"}
          setShowCopy={setShowEdit}
        />
        <Grid container item xs={12} className="category-container">
          <Grid item xs={4} md={1}>
            <div className="category-Label">Category</div>
          </Grid>
          <Grid item xs={8} md={2}>
              <FormControl
                size="small"
                variant="outlined"
                className="drop-down-wrapper"
              >
              <Select
                labelId="demo-simple-select-outlined-label"
                className="drop-down-content"
                value={dropdown || ""}
                onChange={changeID}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Announcements">Announcements</MenuItem>
                <MenuItem value="Tasks">Tasks</MenuItem>
                <MenuItem value={101}>Subscription</MenuItem>
                <MenuItem value={100}>Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item xs={12} className="type-container">
          <Grid item xs={12} md={6} >
            <FormTextBox label ="Notification Type" helperTxt ="0 to 100 Characters"  />
            <TextField
              size="small"
              variant="outlined"
              className="type-input-field"
              value={ntType}
              onChange={changeType}
              required = {true}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} className="desc-container">
          <Grid item xs={12}  >
            <FormTextBox label ="Description" helperTxt ="0 to 300 Characters"  />
            <TextField
              size="small"
              variant="outlined"
              className="desc-input-field"
              multiline={true}
              onChange = {changeDescription}
              rows={9}
              value={description}
            ></TextField>
          </Grid>
          <Grid container item xs={12}>
            <CustomButton text="Cancel" type="secondary" action = {() =>{setShowEdit(false)}}/>
            <CustomButton
                  text="Submit"
                  type="primary"
                  action={tag === "create" ? createNotification : editNotification}
                />
          </Grid>
        </Grid>
        
      </Grid>
    </div>
    // <div className="create-notification-form-container">
    //   <FormHeader
    //     title={tag === "edit" ? "Edit Notification" : "Create Notification"}
    //     icon={tag === "edit" ? "edit" : "file"}
    //     setShowCopy={setShowEdit}
    //   />
    //   <Grid container>
    //     <Grid container item xs={12} className="category-container">
    //       <Grid item xs={1}>
    //         <div className="category-content">Category</div>
    //       </Grid>
    //       <Grid item xs={2}>
    //         <FormControl
    //           variant="outlined"
    //           margin="dense"
    //           className="category-drop-down"
    //         >
    //           <Select
    //             labelId="demo-simple-select-outlined-label"
    //             id="demo-simple-select-outlined"
    //             className="drop-down-content"
    //             value={dropdown || ""}
    //             onChange={changeID}
    //           >
    //             <MenuItem value="">
    //               <em>None</em>
    //             </MenuItem>
    //             <MenuItem value="Announcements">Announcements</MenuItem>
    //             <MenuItem value="Tasks">Tasks</MenuItem>
    //             <MenuItem value={101}>Subscription</MenuItem>
    //             <MenuItem value={100}>Others</MenuItem>
    //           </Select>
    //         </FormControl>
    //       </Grid>
    //     </Grid>
    //     <Grid container item xs={12} className="type-container">
    //       <div className="type-content-div">
    //         <div className="content">Notification Type</div>
    //         <div className="content-helper ">0 out of 100 characters</div>
    //       </div>
    //       <Grid item xs={12}>
    //         <TextField
    //           id="outlined-basic"
    //           variant="outlined"
    //           className="type-input-field"
    //           value={ntType}
    //           onChange={changeType}
    //           required = {true}
    //         />
    //       </Grid>
    //     </Grid>
    //     <Grid container item xs={12} className="desc-container">
    //       <div className="desc-content-div">
    //         <div className="content">Description</div>
    //         <div className="content-helper">0 out of 300 characters</div>
    //       </div>

    //       <Grid item xs={12}>
    //         <TextField
    //           id="outlined-basic"
    //           variant="outlined"
    //           className="desc-input-field"
    //           multiline={true}
    //           onChange = {changeDescription}
    //           rows={9}
    //           value={description}
    //         ></TextField>
    //       </Grid>
    //     </Grid>
    //     <Grid container item xs={12} spacing={3}>
    //       <Grid item xs={12}>
    //         <div className="create-notification-action-container">
    //           <CustomButton text="Cancel" type="secondary" action = {() =>{setShowEdit(false)}}/>
    //           <CustomButton
    //             text="Submit"
    //             type="primary"
    //             action={tag === "create" ? createNotification : editNotification}
    //           />
    //         </div>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default CreateNotificationForm;
