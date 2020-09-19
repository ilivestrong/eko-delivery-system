import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

export default function AppMessage(props) {
  return <MuiAlert style={{ fontSize: 20 }} elevation={6} variant="filled" {...props} />;
}