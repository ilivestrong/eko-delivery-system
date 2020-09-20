import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  label: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
}));

export default function AppDialog(props) {
  const classes = useStyles();
  const { onOK, show, message, title } = props;

  const handleClose = () => {
    onOK();
  };

  return (
    <div>
      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="h6" className={classes.label}>
              {message}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" className={classes.label}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
