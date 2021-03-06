import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";
// import styles from "./styles.module.css";

function Details() {
  const classes = useStyles();
  return (
    // <Card className={styles["income_borderBottom"]}>
    <Card className={classes.income}>
      <CardHeader title="Income"></CardHeader>
      <CardContent>
        <Typography variant="h5">$50</Typography>
      </CardContent>

      {/* <Doughnut data="DATA" /> */}
    </Card>
  );
}

export default Details;
