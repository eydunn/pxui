import React from "react";
import Logo from "../../img/logo.svg";
import Grid from "@material-ui/core/Grid";

export default () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <a href="http://www.hagstova.fo">
          <img
            src={Logo}
            style={{ height: "3em", alignIem: "left" }}
            alt="Hagstovan"
          />
        </a>
        <hr />
      </Grid>
    </Grid>
  </div>
);