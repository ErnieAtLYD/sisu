import React from "react";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  main: {
    marginTop: "3rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sisu
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container component="main" className={classes.main}>
        <Avatar
          style={{ width: 160, height: 160 }}
          alt="Albert Palacio"
          src="https://wynbucket.nyc3.digitaloceanspaces.com/wynapi/pictures/PalacioAlbert.jpeg"
        />
        <Typography variant="h4" gutterBottom>
          Albert Palacio
        </Typography>
        albertdevelops@gmail.com
      </Grid>
    </>
  );
}

export default App;
