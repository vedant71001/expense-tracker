import { Grid, FormControl, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import "./FilterExpense.css";
import { FilterYears } from "../../constants/constants";
import { useEffect, useState } from "react";
import { FilterExpenseProp } from "../../constants/prop.type";

export const FilterExpense = (props : FilterExpenseProp) => {

  const [yearSelected,setYearSelected] = useState(FilterYears[FilterYears.length-1]);

  useEffect(()=>{
    document.title = `Expenses - ${yearSelected}`
  })

  const yearSelectHandler = (event : SelectChangeEvent<string>) => {
    setYearSelected(event.target.value)
    props.onFilterSelect(event.target.value);
  }

  return (
    <Grid container className="filter-wrapper">
      <Grid item xs={9}>
        <h2 className="list-header">Expenses</h2>
      </Grid>
      <Grid item xs={3} className="d-flex">
        <h4 className="m-2">Year:</h4>
        <FormControl fullWidth>
          <Select className="custom-select" onChange={yearSelectHandler} value={yearSelected}>
            {FilterYears.map((year) => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
