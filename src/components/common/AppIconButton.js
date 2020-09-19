import React from "react";
import {
  IconButton,
  Tooltip,
} from "@material-ui/core"

const AppIconButton = (props) => {
  const { title, children, ...rest } = props;
  return (
    <Tooltip title={title}>
      <IconButton {...rest}>
        {children}
      </IconButton>
    </Tooltip>
  )
}

export default AppIconButton;