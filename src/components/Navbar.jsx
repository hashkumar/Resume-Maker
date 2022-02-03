import React from "react";
import { AppBar, Typography, Container } from "@mui/material";

const Navbar = () => {
  const styles = {
    appbar: {
    minWidth: "100%",
    minHeight:"64px",
    marginBottom: "5%",
    display: "flex",
    justifyContent: "center"   
    }
  }
  return(
    <>
    <AppBar color="secondary" position="static" style={styles.appbar} >
    <Typography variant="h5" p={2} >Resume Maker</Typography> 
    </AppBar>
    </>
  )

}

export default Navbar