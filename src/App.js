import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";

function App() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details></Details>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details></Details>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
