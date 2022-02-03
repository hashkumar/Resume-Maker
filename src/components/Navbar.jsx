import React from "react";
import { AppBar, Typography, Container } from "@mui/material";

const Navbar = () => {
  const styles = {
    appbar: {
    backgroundColor: "#4B0082",
    minWidth: "100%",
    minHeight:"64px",
    marginBottom: "5%",
    display: "flex",
    justifyContent: "center",
    color: "white",
    padding: "0.5% 0px",
    }
  }
  return(
    <>
    <AppBar position="static" style={styles.appbar} >
    <Typography variant="h6" p={2} >Design Resume</Typography> 
    </AppBar>
    </>
  )

}

export default Navbar