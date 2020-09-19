import React from "react";
import {
  Button,
  Tooltip,
} from "@material-ui/core"

const AppButton = (props) => {
  const { title, children, ...rest } = props;
  return (
    <Tooltip title={title}>
      <React.Fragment>
        <Button {...rest}>
          {children}
        </Button>
      </React.Fragment>
    </Tooltip>
  )
}

export default AppButton;