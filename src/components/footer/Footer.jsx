import React from "react";
import style from "./Footer.module.scss";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className={style.footer}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant='h5'
          noWrap
          component='div'
          sx={{ flexGrow: 1, alignSelf: "flex-end" }}
        >
          whatsApp: +91 62849-86402 <br></br> Mail: sales@th-tool.in
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
