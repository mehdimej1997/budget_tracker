import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  income: {
    borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
  },
  expense: {
    borderBottom: "10px solid rgba(255, 0, 0, 0.5)",
  },
  desktop: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      display: "5%",
    },
  },
  last: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      paddingBottom: "200px",
    },
  },
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));
