import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AppSelect = (props) => {
  const classes = useStyles();
  const [selectState, setSelectState] = React.useState("");

  const { label, items = [], onSelection } = props;

  const handleChange = ({ target: { value } }) => {
    setSelectState(value);
    onSelection(value)
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink id="selectLabel">
        {label}
      </InputLabel>
      <Select
        labelId="selectLabel"
        value={selectState}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
      >
        <MenuItem key="blank" value="">
          <em>Select</em>
        </MenuItem>
        {
          items.length > 0
          && items.map((item, index) =>
            <MenuItem key={index} value={item.value}>{item.text}</MenuItem>)
        }
      </Select>
    </FormControl>
  )
}
export default AppSelect;