// import style from "./Header.module.scss";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={4}>
      <AppBar position='static'>
        <StyledToolbar>
          <Link to={"/"}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Link>

          <Typography
            variant='h5'
            noWrap
            component='div'
            textOverflow={"unset"}
            sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          >
            Forsage Trade House India
          </Typography>
          {/* <IconButton size='large' aria-label='search' color='inherit'>
            <SearchIcon />
          </IconButton>
          <IconButton
            size='large'
            aria-label='display more actions'
            edge='end'
            color='inherit'
          >
            <MoreIcon />
          </IconButton> */}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
