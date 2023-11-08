import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

export default function CircularIndeterminate() {
  const loading = useSelector((state) => state.loading);
  return (
    <>
    {loading? <Box className="loading" sx={{ display: "flex" }}>
      <img src={require('./loader-gif.gif')} className="circular-loading" alt="loading..." />
    </Box>:""}
    </>
  );
}
