import React from "react";
import DatePickerCustom from "@insolva-dev/date-picker-material-ui";

const App = () => {
  const onDatePickerDateChange = () => {};
  return (
    <div className="App">
      <DatePickerCustom
        id="search-date"
        datePickerChangeHandler={onDatePickerDateChange}
        name="SeacrhDate"
        label="Boy"
        value="2020-12-28"
        maxDate="2021-12-31"
        minDate="2020-12-01"
        minDateMessage="Boy"
        maxDateMessage="Boy"
      />
    </div>
  );
};

export default App;
