import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function DeliveryRouteView(props) {
  const classes = useStyles();

  const { route } = props;
  console.log(route)

  return (
    <Timeline align="alternate">
      {
        route.length > 0 &&
        route.map(
          (town, index) => {
            const isDestination = index === route.length - 1;
            return <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary" style ={{fontWeight: "bold"}}>
                  {index === 0 && "Start"}
                  {(isDestination && route.length > 1) && "Destination"}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <LocationOnIcon />
                </TimelineDot>
                {
                  !isDestination &&
                  <TimelineConnector />
                }
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    Town: {town}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          }
        )
      }
    </Timeline>
  );
}
