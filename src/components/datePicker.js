import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const DatePicker = () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-12-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
    const today = new Date()
    const selectedDay = new Date(date)
    const noOfDays =  today.getTime() - selectedDay.getTime(); 
  
    var Difference_In_Days = noOfDays / (1000 * 3600 * 24); 
  
    alert(Math.round(Difference_In_Days))
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
        //   label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;
