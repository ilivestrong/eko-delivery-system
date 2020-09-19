import React from "react";
import { Typography } from "@material-ui/core"
import { RouteSelectionChips } from "./common";
import { TownContext } from "../common/contexts";

const DeliveryCost = (props) => {

  const townList = React.useContext(TownContext);

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
        townList={townList}
        onTownSelection={(town) => handleTownSelection(town)}
      />
    </React.Fragment>
  )
}

export default DeliveryCost;