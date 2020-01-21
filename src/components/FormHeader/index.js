import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CloseIcon from '@material-ui/icons/Close';
import './FormHeader.scss'


const FormHeader = ({title, icon, setShowCopy}) => {
    return (
        <div className="appbar-container">
            <AppBar position="static" className="form-header-app-bar">
                <Toolbar>
                    <IconButton color="inherit"  aria-label="menu">
                        {icon === "edit" ?<EditIcon /> : <FileCopyIcon/>}
                    </IconButton>
                    <h4 className="title">{title}</h4>
                    {/* <Typography variant="h5" className="title">
                    {title}          </Typography> */}
                    <CloseIcon onClick = {() => {setShowCopy(false)}}/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default FormHeader;