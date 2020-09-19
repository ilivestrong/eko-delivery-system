import React from "react";
import {
  Button,
  Tooltip,
} from "@material-ui/core"

const AppButton = (props) => {
  const { title, children, ...rest } = props;
  return (
    <Tooltip title={title}>
      <Button {...rest}>
        {children}
      </Button>
    </Tooltip>
  )
}

export default AppButton;