import React from "react";
import {
  Typography,
  Snackbar,
} from "@material-ui/core";
import {
  RouteSelectionChips,
  DeliveryRouteView,
  AppMessage,
  AppButton,
  AppIconButton,
  AppDialog,
} from "./common";
import { TownContext } from "../common/contexts";
import { connect } from "react-redux";
import UndoIcon from '@material-ui/icons/Undo';
import ClearIcon from '@material-ui/icons/Clear';

const DeliveryCost = (props) => {
  const { routes } = props;
  const townList = React.useContext(TownContext);
  const [selectedTownList, setSelectedTownList] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
  const [error, setError] = React.useState("");
  const [info, setInfo] = React.useState("");
  const [showCalculateButton, setShowCalculateButton] = React.useState(false);
  const [enableCalculateButton, setEnableCalculateButton] = React.useState(false);
  const [areAvailableActionButtons, setAreAvailableActionButtons] = React.useState(false);
  const [showDeliveryCostDialog, setShowDeliveryCostDialog] = React.useState(false);
  const [deliveryCostMessage, setDeliveryCostMessage] = React.useState("");


  const handleHideDeliveryCostDialog = () => {
    setShowDeliveryCostDialog(false);

  }

  const handleTownSelection = ({ text }) => {
    if (selectedTownList.indexOf(text) > -1) {
      setIsError(true);
      setError(`The town: '${text}' has already been added to the delivery route.`);
      return;
    }
    setSelectedTownList([...selectedTownList, text]);
  }

  const handleDeliverCostCalculation = () => {

    const parseDeliveryRouteIntoNodes = () => {
      let normalizedRoutes = [];
      for (let step = 0; step <= selectedTownList.length - 1; step += 2) {
        let slice = [...selectedTownList.slice(step, step + 2)];
        normalizedRoutes.push(slice);
      }
      return normalizedRoutes;
    }

    if (routes.length === 0) {
      setIsError(true);
      setError(`
      You have not defined routes definition yet.
      Please click on Create Route link.
      `);
      return;
    }

    let sequencedRouteNodeList = [];
    let routeNodeList = parseDeliveryRouteIntoNodes();

    routeNodeList.forEach((route, index) => {
      const [currFrom, currTo] = route;
      if (index === 0) {
        sequencedRouteNodeList.push(route)
      } else {
        if (currTo !== undefined) {
          const nextFrom = routeNodeList[index - 1][1];
          const nextTo = currFrom;
          sequencedRouteNodeList.push([nextFrom, nextTo]);
          sequencedRouteNodeList.push([currFrom, currTo]);
        } else {
          const nextFrom = routeNodeList[index - 1][1];
          const nextTo = currFrom;
          sequencedRouteNodeList.push([nextFrom, nextTo]);
        }
      }
    })

    let deliverycost = 0;
    try {
      deliverycost = sequencedRouteNodeList.reduce((totalCost, current) => {
        const [from, to] = current;
        const routeFound = routes.find((route) => route.from === from && route.to === to);
        if (routeFound) {
          totalCost += routeFound.cost;
        } else {
          throw new Error("Route not found.");
        }
        return totalCost;
      }, 0);
    } catch (e) { deliverycost = -1; }

    if (deliverycost > -1) {
      setDeliveryCostMessage(`Total Delivery cost : ${deliverycost}`);
    } else {
      setDeliveryCostMessage("No Such Route.")
    }
    setShowDeliveryCostDialog(true);
  }

  const handleResetOperation = (event) => {
    setSelectedTownList([]);
  }
  const handleUndoLastOperation = () =>
    setSelectedTownList(selectedTownList.slice(0, selectedTownList.length - 1));

  React.useEffect(() => {
    if (selectedTownList.length === 1) {
      setShowCalculateButton(true);
      setAreAvailableActionButtons(true);
    }

    if (selectedTownList.length > 1) {
      setEnableCalculateButton(true)
    } else {
      setEnableCalculateButton(false);
    }

    if (selectedTownList.length < 2) {
      setInfo("Please select atleast 2 towns to build a delivery route")
    }

    if (selectedTownList.length === 0) {
      setShowCalculateButton(false);
      setAreAvailableActionButtons(false);
    }

  },
    // eslint-disable-next-line
    [selectedTownList]);


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
      {
        showCalculateButton &&
        <AppButton
          title="Calculate deliveyry cost"
          variant="contained"
          onClick={handleDeliverCostCalculation}
          disabled={!enableCalculateButton}
        >
          Calculate
        </AppButton>
      }
      {
        areAvailableActionButtons &&
        <React.Fragment>
          <AppIconButton
            title="Undo add town"
            style={{ marginLeft: 300 }}
            onClick={handleUndoLastOperation}
          >
            <UndoIcon />
          </AppIconButton>
          {"   "}
          <AppIconButton
            title="Reset operation"
            style={{ marginLeft: 10 }}
            onClick={handleResetOperation}
          >
            <ClearIcon />
          </AppIconButton>
        </React.Fragment>
      }

      <RouteSelectionChips
        townList={townList}
        onTownSelection={(town) => handleTownSelection(town)}
      />

      {
        selectedTownList.length > 0 ?
          <DeliveryRouteView route={selectedTownList} /> :
          <div style={{ marginTop: 40 }}>
            <AppMessage severity="info">{info}</AppMessage>
          </div>

      }
      <Snackbar open={isError} autoHideDuration={4000} onClose={() => setIsError(false)}>
        <AppMessage style={{ fontSize: 25 }} severity="error">{error}</AppMessage>
      </Snackbar>

      <AppDialog
        show={showDeliveryCostDialog}
        onOK={handleHideDeliveryCostDialog}
        message={deliveryCostMessage}
        title={`Route: ${selectedTownList.join(" -> ")}`}
      />

    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    routes: state.routes,
  }
}

export default connect(mapStateToProps)(DeliveryCost);