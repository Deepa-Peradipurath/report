import React from "react";
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import './InlineFormTextBox.scss';

const InlineFormTextBox = ({
    label ,textbox ,dropdown  
}) => {

    return(
        <List  className = 'inlineTextBox'>
            <ListItem className ='listItemLeft'>
            <label className="label-name">{label}</label>
            </ListItem>
            <ListItem className ='listItemRight'>
            {
                dropdown
                &&
                <FormControl variant="outlined" size="small" className="dropDown">
                    <Select className="template-drop-down-content">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Email</MenuItem>
                        <MenuItem value={20}>SMS</MenuItem>
                        <MenuItem value={30}>Push Notification</MenuItem>
                    </Select>
                </FormControl>
            }

            {
                textbox
                &&
                <TextField
                    className="textBox"
                    required
                    variant="outlined"
                    size="small"
                />
            }
            
            </ListItem>
        </List> 
    )
}

export default InlineFormTextBox