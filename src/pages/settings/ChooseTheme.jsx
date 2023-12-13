import React, { useMemo } from "react";
import Header from "components/Header";
import MainContent from "components/Maincontent";
import { Switch } from "pretty-checkbox-react";
import "pretty-checkbox/dist/pretty-checkbox.css";

import { Select } from "@mui/material";
import { ReactComponent as Arrow } from "images/arrow.svg";
import { MenuItem } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useId } from "react";
import useTheme from "utils/hook/usetheme/useTheme";

const useStyles = makeStyles((theme) => ({
  test: {
    display: "flex",
    flexDirection: "column",
    gap: "5px !important",
  },
}));
const ChooseTheme = () => {
  const { setTheme } = useTheme();
  const classes = useStyles();
  const swapTheme = (data) => {
    setTheme(data.target.value);
  };
  const id = useId();
  const themes = useMemo(() => {
    return [
      {
        value: "Green",
      },
      {
        value: "Purple",
      },
      {
        value: "Pink",
      },
      {
        value: "Blue",
      },
    ];
  }, []);

  return (
    <>
      <Header to={"/settings"} />
      <MainContent contentClassName="theme">
        <div className="settings-theme-content">
          <h1 className="settings-theme-name">Display completed tasks</h1>
          <Switch
            shape="fill"
            color="success"
            className="settings-theme-swtich"
          ></Switch>
        </div>

        <div className="settings-theme-color">
          <h1 className="settings-theme-content settings-theme-nColor">
            Color
          </h1>

          <div className="settings-theme-content">
            <h1 className="settings-theme-name">Light theme</h1>
            <Switch
              shape="fill"
              color="success"
              className="settings-theme-swtich"
            ></Switch>
          </div>

          <div className="settings-theme-content">
            <h1 className="settings-theme-name">Dark theme</h1>
            <Switch
              shape="fill"
              color="success"
              className="settings-theme-swtich"
            ></Switch>
          </div>

          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            IconComponent={Arrow}
            placeholder="Colors Theme"
            defaultValue="  "
            onChange={swapTheme}
            sx={{
              width: "100%",
              boxShadow: "none",
              fontSize: "24px",
              color: "white",
              ".MuiOutlinedInput-notchedOutline": {
                border: "none !important",
                borderWidth: "none !impotant",
                padding: "0 !important",
              },
              ".MuiSelect-outlined": {
                padding: "0  !important",
              },
            }}
            MenuProps={{
              classes: { list: classes.test },
            }}
          >
            {themes.map((item, index) => {
              return (
                <MenuItem
                  key={`${id}-${index}`}
                  style={{ borderRadius: "9px", fontSize: "24px" }}
                  value={item.value}
                >
                  {item.value}
                </MenuItem>
              );
            })}
          </Select>
        </div>
      </MainContent>
    </>
  );
};

export default ChooseTheme;
