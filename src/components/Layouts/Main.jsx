import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Axios from "axios";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";

import DbSelector from "../DbSelector/DbSelector";
import Selectors from "../Select/Selectors";
import ListMenu from "../ListMenu/ListMenu";
import TableData from "../TablesData/TablesData";
import statBanks from "../../json/statBanks";
import Footer from "./Footer";
import Header from "./Header";

import StatisticGreenland from "../../img/greenland.png";
import StatisticFaroeIslands from "../../img/hagstova_foroya.svg";
import StatisticIceland from "../../img/iceland.png";
import SpecificDBSelecor from "../DbSelector/SpecificDBSelecor";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  appBar: {
    backgroundColor: "#2d4182",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  paperX: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #2d4182",
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
    width: "90%",
    height: "90%"
  }
}));

let urlForSpecificDB = "";

export default function MainBody() {
  const [pxTable, setPxTable] = useState(null);
  const [data, setData] = useState(null);
  const [statBankUrl, setStatBankUrl] = useState(statBanks[0].value);
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [itemSelected, setItemSelected] = useState(
    "Vælkomin til Hagtalsgrunnin"
  );
  const [checked, setChecked] = useState(false);
  const [fullHeadLine, setFullHeadLine] = useState(true);
  const [img, setImg] = useState(StatisticFaroeIslands);
  const [showing, setShowing] = useState(false);
  const [sDB, setSDB] = useState(null);

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeUrl = e => {
    setPxTable(e);
    setOpen(!open);
    setChecked(false);
    setChecked(true);
  };

  const handleChangeData = (e, b) => {
    setItemSelected(b);
    setData(e);
  };
  const handleChangeStatBank = async e => {
    if (e.label === "Statistics Greenland") {
      setImg(StatisticGreenland);
      setShowing(false);
      setStatBankUrl(e);
    }
    if (e.label === "Hagtalsgrunnurin") {
      setImg(StatisticFaroeIslands);
      setShowing(false);
      setStatBankUrl(e);
    }
    if (e.label === "Statistics Iceland") {
      setImg(StatisticIceland);

      let x = await Axios(e.value);

      for (var i = 0; i < x.data.length; i++) {
        x.data[i].value = x.data[i]["dbid"];
        x.data[i].label = x.data[i]["text"];
        delete x.data[i].text;
        delete x.data[i].dbid;
      }
      setSDB(x);
      setStatBankUrl(e.value + x.data[0].value);
      urlForSpecificDB = e.value;
      setShowing(true);
    }
  };

  const handleChangeSpecificDB = e => {
    console.log("here", e, urlForSpecificDB);
    setStatBankUrl(urlForSpecificDB + e.value);
  };

  const test = () => {
    setOpen(false);
  };

  const displayFullHeadline = () => {
    setFullHeadLine(!fullHeadLine);
  };
  const divStyle = {
    /* Full height */
    height: "50px",
    width: "50px",
    /* Center and scale the image nicely */
    backgroundRepeat: "no-repeat"
  };

  return (
    <div className={classes.root}>
      <Header></Header>
      <CssBaseline />

      <AppBar
        position="relative"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            onClick={displayFullHeadline}
            variant="h6"
            noWrap={fullHeadLine}
          >
            {itemSelected}
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={test}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
            <img src={img} style={divStyle} alt={"logo"} />
          </IconButton>
        </div>

        <DbSelector onChange={handleChangeStatBank}></DbSelector>
        {showing ? (
          <SpecificDBSelecor db={sDB} onChange={handleChangeSpecificDB}>
            This is visible
          </SpecificDBSelecor>
        ) : null}
        <Divider />
        <ListMenu onClickItem={handleChangeUrl} statBank={statBankUrl} />
      </SwipeableDrawer>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 2000 } : {})}
      >
        <Container component="main" className={classes.main} maxWidth="m">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Paper
                elevation={6}
                style={{ marginBottom: "1cm" }}
                className={classes.paper}
              >
                <Selectors onChange={handleChangeData} pxTable={pxTable} />
              </Paper>
              <Paper elevation={6} className={classes.paper}>
                <Typography component={"span"}>
                  <TableData
                    data={data}
                    contentElement="#tableResult"
                  ></TableData>
                  <div style={{ fontSize: "1em" }} id="tableResult"></div>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>

      <footer className={classes.footer}>
        <Container maxWidth="m">
          <Typography variant="body1">
            <Divider></Divider>
            <Footer></Footer>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
