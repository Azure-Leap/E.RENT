import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Facebook, Instagram, YouTube, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        paddingTop: "10px",
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingBottom: "10px",
        position: "fixed",
        bottom: 0,
        width: "100%",
        background:
          "linear-gradient(to right bottom, #55A3DF,#4BA58C,#1FC4DC,#5ECDB1)",
      }}
    >
      <Box>
        <Typography variant="h2" color="white">
          E.Rent
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", paddingTop: "10px" }}>
        <Box>
          <Typography color="white" variant="h4" sx={{ paddingBottom: "5px" }}>
            Mail
          </Typography>
          <Link sx={{ color: "white", textDecoration: "none" }} href="#">
            e.rent@gmail.com
          </Link>
        </Box>
        <Box
          sx={{ paddingLeft: "13%", display: "flex", flexDirection: "column" }}
        >
          <Typography color="white" variant="h4" sx={{ paddingBottom: "5px" }}>
            Social
          </Typography>
          <Link
            sx={{ paddingTop: "15px", color: "white", textDecoration: "none" }}
            href="#"
          >
            <Facebook />
            Facebook
          </Link>
          <Link
            sx={{ paddingTop: "5px", color: "white", textDecoration: "none" }}
            href="#"
          >
            <Instagram />
            Instagram
          </Link>
          <Link
            sx={{ paddingTop: "5px", color: "white", textDecoration: "none" }}
            href="#"
          >
            <Twitter />
            Twitter
          </Link>
          <Link
            sx={{ paddingTop: "5px", color: "white", textDecoration: "none" }}
            href="#"
          >
            <YouTube />
            YouTube
          </Link>
        </Box>
        <Box
          sx={{ paddingLeft: "13%", display: "flex", flexDirection: "column" }}
        >
          <Typography color="white" variant="h4" sx={{ paddingBottom: "5px" }}>
            Contacts
          </Typography>
          <Typography color="white" sx={{ paddingTop: "15px" }}>
            +976 98364566
          </Typography>
          <Typography color="white" sx={{ paddingTop: "5px" }}>
            +976 98364566
          </Typography>
          <Typography color="white" sx={{ paddingTop: "5px" }}>
            +976 98364566
          </Typography>
        </Box>
        <Box
          sx={{ paddingLeft: "13%", display: "flex", flexDirection: "column" }}
        >
          <Typography color="white" variant="h4" sx={{ paddingBottom: "5px" }}>
            Help
          </Typography>
          <Link
            sx={{ paddingTop: "15px", color: "white", textDecoration: "none" }}
            href="#"
          >
            Түгээмэл асуулт & хариулт
          </Link>
          <Link
            sx={{ paddingTop: "5px", color: "white", textDecoration: "none" }}
            href="#"
          >
            Нууцлалын бодлого
          </Link>
        </Box>
      </Box>
      <Typography
        variant="h6"
        color="white"
        sx={{ textAlign: "center", paddingTop: "20px" }}
      >
        2023
      </Typography>
    </Box>
  );
};

export default Footer;
