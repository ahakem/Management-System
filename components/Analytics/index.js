import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import InfoBox from "components/Analytics/InfoBox";
const Analytics = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} disableGutters={true} maxWidth="lg">
      <InfoBox value="Rp 1.575.000" title="Total Fuel Cost" />
      <InfoBox value="293,65 L" title="Total Fuel Volume" />
      <InfoBox value="38.046 km" title="Total km" />
      <InfoBox value="MPG (US)" title="Avg. Fuel Economy" />
      <InfoBox value="Rp 9,879" title="Cost/Liter" />
    </Container>
  );
};

export default Analytics;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: theme.spacing(0),
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));
