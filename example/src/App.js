import React from "react";
import DatePickerCustom from "@riski-react-ui/date-picker-material-ui";

const App = () => {
  const onDatePickerDateChange = () => {};
  return (
    <div className="App">
      <DatePickerCustom
        id="search-date"
        datePickerChangeHandler={onDatePickerDateChange}
        name="SeacrhDate"
        label="Дата поиска"
        value="2020-12-28"
        maxDate="2021-12-31"
        minDate="2020-12-01"
        minDateMessage="Дата меньше допустимой"
        maxDateMessage="Дата больше допустимой"
      />
    </div>
  );
};

export default App;
