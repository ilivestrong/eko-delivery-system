import React from "react";
import { Typography, Button, TextField } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppSelect, RouteList } from "./common";
import { ACTION_CREATORS } from "../state/actions"
import { TownContext } from "../common/contexts";

const useStyles = makeStyles((theme) => ({
  "control-top-margin": {
    marginTop: 10
  }
}))

const CreateRoute = (props) => {
  const classes = useStyles();
  const { createRoute, routes } = props;
  const [fromTown, setFromTown] = React.useState("");
  const [toTown, setToTown] = React.useState("");
  const [cost, setCost] = React.useState("");
  const townList = React.useContext(TownContext);

  const handleTownSelection = (type, value) => {
    if (value && value !== "") {
      const town = String.fromCharCode(value);
      if (type === "F") {
        setFromTown(town);
      } else {
        setToTown(town);
      }
    }
  }

  const handleRouteCreation = () => {
    createRoute(
      fromTown,
      toTown,
      Number(cost),
    );

    setCost("");
  }

  return (
    <React.Fragment>

      <Typography variant="h4">
        Create Route
        <hr />
      </Typography>

      <Typography variant="h6" style={{ color: "gray" }}>
        * Select the towns
      </Typography>

      <div style={{ paddingTop: 15 }}>
        <AppSelect
          label="From"
          items={townList}
          onSelection={(value) => handleTownSelection("F", value)}
        />

        {"     "}

        <AppSelect
          label="To"
          items={townList}
          onSelection={(value) => handleTownSelection("T", value)}
        />

      </div>

      <div className={classes["control-top-margin"]}>
        <TextField
          id="cost"
          label="Enter cost"
          value={cost}
          onChange={({ target: { value } }) => setCost(value)}
        />
      </div>

      <div style={{ marginTop: 40 }}>
        <Button
          variant="contained"
          onClick={handleRouteCreation}
          disabled={!fromTown || !toTown || !cost}
        >Create</Button>
      </div>

      <div>
        <RouteList data={routes} />
      </div>

    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    routes: state.routes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ACTION_CREATORS, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoute);