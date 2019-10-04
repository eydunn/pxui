import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Selectors from "../Select/Selectors";
import ListMenu from "../ListMenu/ListMenu";
import TableData from "../TablesData/TablesData";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  }
}));

export default function MainBody() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");

  const classes = useStyles();

  const handleChangeUrl = e => {
    setUrl(e);
  };

  const handleChangeData = e => {
    setData(e);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography component={"span"}>
              <ListMenu onClickItem={handleChangeUrl} />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper style={{ marginBottom: "0.5cm" }} className={classes.paper}>
            <Selectors onChange={handleChangeData} url={url} />
          </Paper>
          <Paper className={classes.paper}>
            <TableData data={data} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}