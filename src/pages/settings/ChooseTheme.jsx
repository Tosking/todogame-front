import React, { useState } from "react";
import Header from "components/Header";
import MainContent from "components/Maincontent";
import { Switch } from "pretty-checkbox-react";
import "pretty-checkbox/dist/pretty-checkbox.css";
import ColorsTheme from "./ColorsTheme";
import { Checkbox } from "pretty-checkbox-react";
const options = [
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "pink", label: "Pink" },
  { value: "purple", label: "Purple" },
];

const ChooseTheme = () => {
  const [currentColor, setCurrentColor] = useState("");
  const [open, setOpen] = useState(false);

  const changeTheme = () => {
    setOpen((prev) => !prev);
  };
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

          <div className="settings-theme-content">
            <div className="theme-content__inner">
              <div onClick={changeTheme} className="theme-content-title">
                <h1 className="settings-theme-name">Color theme</h1>
                <svg
                  style={open ? { transform: "rotate(180deg)" } : {}}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 10C22 10 17.56 18 14.5 18C11.4411 18 7 10 7 10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {open ? (
                <div className="theme-content__colors">
                  <div className="colors__inner">
                    <div className="colors-row">
                      <Checkbox
                        style={{ fontSize: "30px", marginRight: "10px" }}
                        shape="round"
                        color="success"
                        animation="pulse"
                      />
                      <Checkbox
                        style={{ fontSize: "30px", marginRight: "10px" }}
                        shape="round"
                        color="success"
                        animation="pulse"
                      />
                      <Checkbox
                        style={{ fontSize: "30px", marginRight: "10px" }}
                        shape="round"
                        color="success"
                        animation="pulse"
                      />
                    </div>
                    <div className="colors-row">
                      <Checkbox
                        style={{ fontSize: "30px", marginRight: "10px" }}
                        shape="round"
                        color="success"
                        animation="pulse"
                      />
                      <Checkbox
                        style={{ fontSize: "30px", marginRight: "10px" }}
                        shape="round"
                        color="success"
                        animation="pulse"
                      />
                      <Checkbox
                        style={{ fontSize: "30px", marginRight: "10px" }}
                        shape="round"
                        color="success"
                        animation="pulse"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </MainContent>
    </>
  );
};

export default ChooseTheme;
