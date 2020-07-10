import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
  },
  column: {
    width: "20%",
    minHeight: "75vh",
  },
  paper: {
    backgroundColor: "#dadada",
    height: "100%",
  },
}));

const TrelloColumn = ({ key, label, students }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.column}>
      <Paper elevation={0} className={classes.paper}>
        {label}
        {students.map((student) => (
          <Card className={classes.card}>
            <CardHeader
              avatar={<Avatar className={classes.avatar} />}
              title={student.name}
            />
          </Card>
        ))}
      </Paper>
    </Grid>
  );
};

export default TrelloColumn;
