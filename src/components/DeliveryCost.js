import React from "react";
import { Typography, Button, TextField } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { RouteSelectionChips } from "./common";
import { getTowns } from "../data/towns";


const DeliveryCost = (props) => {


  const handleTownSelection = (town) => {
    /* 
    
    1. Validate if 
    Add to DeliveryCost state */
    alert(JSON.stringify(town));
  }
  return (
    <React.Fragment>
      <Typography variant="h4">
        Delivery Cost
      <hr />
      </Typography>

      <Typography variant="subtitle1" style={{ color: "gray" }}>
        * Click on Town name chips to build a route, you want to find delivery cost for. <br />
        * Town chips should be clicked in the order you want to build the route.
      </Typography>

      <RouteSelectionChips
        townList={getTowns()}
        onTownSelection={(town) => handleTownSelection(town)}
      />
    </React.Fragment>
  )
}

export default DeliveryCost;