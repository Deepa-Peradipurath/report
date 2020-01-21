import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../store/actions"
// import CustomButton from "../Button";
// import DropDown from "../dropDown";
import StickyHeadTable from "../table/index";
import SwitchesSize from "../switch";
import CopyPayload from "../CopyPayload";
import CreateTemplateForm from "../CreateTemplate";
import EditIcon from '@material-ui/icons/EditOutlined';
import ShowPayloadIcon from '@material-ui/icons/InsertDriveFile';
import { makeStyles } from '@material-ui/core/styles';
import Filter from '../Filter/index'

const Template = () => {
  
  const useStyles = makeStyles(theme => ({
    inlineList: {
      display: 'inline-flex',
      flexDirection: 'row',
      padding: 0
      },
      customForm : {
        marginBottom : '0px'
      }
      // '&:li': {
      //   width :"100px"
      // },
      
  }));

  const [filter, setFilter] = useState(-1);
  const [search, setSearch] = useState("");
  const [start, setStart] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [page, setPage] = useState(0);
  const [showCopy, setShowCopy] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [tag, setTag] = useState("");
  const [channel, setChannel] = useState({});



  const [tempID, setTempID] = useState("");

  const columns = [
    { id: "type", label: "Notification Type", minWidth: 170 },
    {
      id: "channel",
      label: "Channel",
      minWidth: 150,
      align: "left",
      format: value => value.toLocaleString()
    },
    {
      id: "name",
      label: "Template Name",
      minWidth: 150,
      align: "left",
      format: value => value.toLocaleString()
    },
    {
      id: "date",
      label: "Updated Date",
      minWidth: 150,
      align: "left"
    },
    {
      id: "statusData",
      label: "Status",
      minWidth: 150,
      align: "left"
    },
    {
      id: "file",
      label: "",
      minWidth: 100,
      align: "right"
    },
    {
      id: "edit",
      label: "",
      minWidth: 100,
      align: "right"
    }
  ];
  const dispatch = useDispatch();

  const showPayload = tempID => {
    setTempID(tempID);
    dispatch(actions.getSamplePayload(tempID));
    setShowCopy(true);
  };
  const editTemplate = tempID => {
    setShowEdit(true);
    setTag("edit");
  };
  const createTemplate = () =>{
      setShowEdit(true);
      setTag("create");
    }
  
  const createData = (type, channel, name, newDate, status, tempID) => {
    const edit = (
      <EditIcon
        onClick={() => {
          editTemplate(tempID);
        }}
      />
    );
    const file = (
      <ShowPayloadIcon
        onClick={() => {
          showPayload(tempID);
        }}
      />
    );
    const dateFormat = new Date(newDate);
    const date =
      dateFormat.getDate() +
      "/" +
      (dateFormat.getMonth() + 1) +
      "/" +
      dateFormat.getFullYear();
    const statusData = (
      <SwitchesSize
        status={status === 1 ? "Active" : "Inactive"}
        type="template"
        typeId={tempID}
      />
    );
    return { type, channel, name, date, statusData, file, edit };
  };

  React.useEffect(() => {
    setChannel(channelList)
    dispatch(
      actions.getAllNotTempData({
        info: {
          name: search,
          channelId: filter,
          startNum: start,
          pageSize: pageSize,
          appId:appId
        },
        tab: "template"
      })
    );
  }, [search, filter, start, pageSize, page,channelList]);

  const inputChange = e => {
    setPage(0);
    setStart(0);
    setSearch(e.target.value);
  };
  const inputSubmit = e => {
    e.preventDefault();
    dispatch(
      actions.getAllNotTempData({
        info: {
          name: search,
          channelId: filter,
          startNum: start,
          pageSize: pageSize,
          appId: appId
        },
        tab: "template"
      })
    );
  };

  const data = useSelector(state => state.notification);
  const templateData = !!data
    ? data.tempData
      ? data.tempData.records
      : ""
    : "";
  const totalCount = !!data
    ? data.tempData
      ? data.tempData.count
      : 0
    : 0;
    const appId = !!data
    ? data.selectedApp
      ? data.selectedApp.appId
      : 0
    : 0;
   const channelList = !!data
    ? data.channelList
      ? data.channelList.notificationChannels
      : "" :""
  return (
    <div className="template">
      {!showCopy && !showEdit && (
        <Fragment>
          <Filter dropDownLabel ='Channel' channel = {channel} textBoxLabel = 'Template Name' ButtonLabel ='Create Template' createAction = {createTemplate} filter = {filter} setFilter = {setFilter} search = {search} setSearch ={setSearch} start = {start} setStart= {setStart} setPage = {setPage}/>
          {/* <div className="template-container">
            <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
              <form className={classes.customForm} onSubmit={inputSubmit}>
              <Grid container spacing={0}>
                <Grid item xs={12} md={4}>
                  <List  className = {classes.inlineList}>
                    <ListItem className ={ classes.inLineListItem}>
                      <label className="label-name">Channel</label>
                    </ListItem>
                    <ListItem>
                    <DropDown
                      title="Channel"
                      fields={categoryFields}
                      setFilter={setFilter}
                      inputSubmit={inputSubmit}
                      section="template"
                    />
                    </ListItem>
                  </List> 
                </Grid>
                <Grid item xs={12} md={8}>
                  <List className = {classes.inlineList}>
                      <ListItem className ={ classes.inLineListItem}>
                        <label className="label-name">Template Name</label>
                      </ListItem>
                      <ListItem>
                      <TextField
                          id="outlined-size-small"
                          defaultValue="Small"
                          variant="outlined"
                          size="small" placeholder="Temlate name"
                          value={search}
                          onChange={inputChange}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          />
                      </ListItem>
                    </List>
                </Grid>
              </Grid>
              </form>
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomButton type="primary" text="Create Template" action={() => {
                    setShowEdit(true);
                    setTag("create");
                  }}/> 
            </Grid>
          </Grid> 
          </div> */}
          <div className="table">
            <StickyHeadTable
              type="template"
              tableData={templateData}
              start={start}
              setStart={setStart}
              columns={columns}
              createData={createData}
              pageSize={pageSize}
              setPageSize={setPageSize}
              totalCount={totalCount}
              page={page}
              setPage={setPage}
            />
          </div>
        </Fragment>
      )}
      {showCopy && <CopyPayload tempID={tempID} setShowCopy={setShowCopy} />}
      {showEdit && <CreateTemplateForm setShowCopy={setShowEdit} tag={tag} />}
    </div>
  );
};

export default Template;
