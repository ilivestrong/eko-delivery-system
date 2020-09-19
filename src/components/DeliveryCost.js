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
} from "./common";
import { TownContext } from "../common/contexts";
import { connect } from "react-redux";
import UndoIcon from '@material-ui/icons/Undo';
import ClearIcon from '@material-ui/icons/Clear';

const DeliveryCost = () => {
  const townList = React.useContext(TownContext);
  const [selectedTownList, setSelectedTownList] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
  const [error, setError] = React.useState("");
  const [info, setInfo] = React.useState("");
  const [showCalculateButton, setShowCalculateButton] = React.useState(false);
  const [enableCalculateButton, setEnableCalculateButton] = React.useState(false);
  const [areAvailableActionButtons, setAreAvailableActionButtons] = React.useState(false);

  const handleTownSelection = ({ text }) => {
    if (selectedTownList.indexOf(text) > -1) {
      setIsError(true);
      setError(`The town: '${text}' has already been added to the delivery route.`);
      return;
    }
    setSelectedTownList([...selectedTownList, text]);
  }

  const handleDeliverCostCalculation = () => {

  }

  const handleResetOperation = (event) => {
    setSelectedTownList([]);
  }
  const hanndleUndoLastOperation = () =>
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
            onClick={hanndleUndoLastOperation}
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
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    routes: state.routes,
  }
}

export default connect(mapStateToProps)(DeliveryCost);