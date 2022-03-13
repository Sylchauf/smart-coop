import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

import MenuIcon from "@mui/icons-material/Menu";

import DeviceDisplayer from "./DeviceDisplayer";
import Logo from "./Logo";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const user = useTracker(() => Meteor.user(), []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: `1px solid lightgray`,
        paddingBottom: 4,
        marginBottom: 16,
      }}
    >
      <Logo onClick={() => navigate("/")} />

      {!!user && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <DeviceDisplayer />

          <IconButton onClick={() => navigate("/settings")}>
            <MenuIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Header;
