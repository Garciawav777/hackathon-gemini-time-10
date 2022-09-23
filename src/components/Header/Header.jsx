import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (event) => {
    setShowMenu(event.currentTarget);
  };

  const handleClose = () => {
    setShowMenu(false);
  };
  return (
    <div className="root">
      <AppBar position="sticky" className="appBar">
        <Toolbar className="tollBar">
          <IconButton color="inherit" onClick={handleClick} edge="start">
            <MenuIcon fontSize="large" />
          </IconButton>

          <Menu
            id="customized-menu"
            anchorEl={showMenu}
            keepMounted
            open={showMenu}
            onClose={handleClose}
            MenuListProps={{ disablePadding: true }}
            className="paper"
          >
            <Link to="/" className="linkMenu">
              <MenuItem onClick={handleClose} className="menu">
                <Typography variant="h6">
                  Início
                </Typography>  
              </MenuItem>
            </Link>
            <Link to="/categorias" className="linkMenu">
              <MenuItem onClick={handleClose} className="menu">
                <Typography variant="h6">
                  Busca por restaurantes  
                </Typography>
              </MenuItem>
            </Link>
          </Menu>
          <div className="logo">
            <span>iterisFood</span>
          </div>

          <IconButton color="inherit" onClick={handleClick} edge="start">
            <AccountCircle fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
