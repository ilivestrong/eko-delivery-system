import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
    marginTop: 40
  },
}));

const RouteSelectionChips = (props) => {
  const classes = useStyles();
  const { townList = [], onTownSelection } = props;

  const handleClick = (town) => {
    onTownSelection(town);
  };

  return (
    <div className={classes.root}>
      {
        townList.length > 0
        &&
        townList.map((town) =>
          <Chip
            icon={<LocationOnIcon />}
            onClick={() => handleClick(town)}
            variant="outlined"
            label={town.text}
            color="secondary"
          />)
      }
    </div>
  )
}

export default RouteSelectionChips;