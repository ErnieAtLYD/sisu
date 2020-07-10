import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AppContextProvider } from "./context/AppContext";

import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Login from "./components/Login";
import NavDrawer from "./components/NavDrawer";
import UserTable from "./components/UserTable";
import Progress from "./components/Progress";
import Trello from "./components/Trello";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  main: {
    display: "flex",
    marginTop: "3rem",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  const [isOpen, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppContextProvider>
      <Router>
        <CssBaseline />
        <Route component={Login} path="/login" />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: isOpen,
          })}
        >
          <Toolbar variant="dense" className={classes.toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              WynTools
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <NavDrawer isOpen={isOpen} setOpen={setOpen} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Route component={UserTable} path="/students" />
            <Route component={Progress} path="/progress" />
            <Route component={Trello} path="/trello" />
          </Container>
        </main>
      </Router>
    </AppContextProvider>
  );
}

export default App;
