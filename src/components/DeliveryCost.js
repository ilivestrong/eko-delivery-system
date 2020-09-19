import React from "react";
import {
  Typography,
  Snackbar,
} from "@material-ui/core";

import {
  RouteSelectionChips,
  DeliveryRouteView,
  AppMessage,
} from "./common";

import { TownContext } from "../common/contexts";

const DeliveryCost = (props) => {

  const townList = React.useContext(TownContext);
  const [selectedTownList, setSelectedTownList] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
  const [error, setError] = React.useState("");
  const [info, setInfo] = React.useState("");

  const handleTownSelection = ({ text }) => {
    if (selectedTownList.indexOf(text) > -1) {
      setIsError(true);
      setError(`The town: '${text}' has already been added to the delivery route.`);
      return;
    }
    setSelectedTownList([...selectedTownList, text]);
  }

  React.useState(() => {
    if (selectedTownList.length < 2) {
      setInfo("Please select atleast 2 towns to build a delivery route")
    }
  })

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

      {
        selectedTownList.length > 0 ?
          <DeliveryRouteView /> :
          <div style={{ marginTop: 40 }}>
            <AppMessage severity="info">{info}</AppMessage>
          </div>

      }

      <Snackbar open={isError} autoHideDuration={4000} onClose={() => setIsError(false)}>
        <AppMessage style={{fontSize:25}} severity="error">{error}</AppMessage>
      </Snackbar>

    </React.Fragment>
  )
}

export default DeliveryCost;