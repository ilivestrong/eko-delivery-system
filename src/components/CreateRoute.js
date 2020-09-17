import React from "react";
import { Typography, Button, TextField } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { AppSelect } from "./common";
import { getTowns } from "../data/towns";

const useStyles = makeStyles((theme) => ({
  "control-top-margin": {
    marginTop: 10
  }
}))

const CreateRoute = (props) => {
  const classes = useStyles();
  const townsList = getTowns();

  return (
    <React.Fragment>

      <Typography>
        <h2>Create Route</h2>
        <hr />
      </Typography>

      <Typography>
        <h5 style={{ color: "gray" }}>
          * To create a route please select the towns
      </h5>
      </Typography>

      <div style={{ paddingTop: 15 }}>
        <AppSelect
          label="From"
          items={townsList}
          onSelection={(selected) => { /* TODO: integrate with state */ }}
        />

        {"     "}

        <AppSelect
          label="To"
          items={townsList}
          onSelection={(selected) => { /* TODO: integrate with state  */ }}
        />

      </div>

      <div className={classes["control-top-margin"]}>
        <TextField id="cost" label="Enter cost" />
      </div>

      <div style={{ marginTop: 40 }}>
        <Button variant="contained">Create</Button>
      </div>

    </React.Fragment>
  )
}

export default CreateRoute;