import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Header from "components/Header";
import edit from "images/edit.svg";
import "styleComponents/Settings.css";
import MainContent from "components/Maincontent";
import { Typography } from "@mui/material";
import CustomButton from "components/Button";
import ModalContext from "contexts/ModalContext";
import ChangeEmail from "./ChangeEmail";
import { useForm } from "react-hook-form";
import ChangePassword from "./ChangePassword";
import EditName from "./EditName";
const Settings = () => {
  const { openModal } = useContext(ModalContext);
  const { control, register } = useForm();
  const changeEmail = () => {
    openModal({
      title: <Typography>Change Email</Typography>,
      children: <ChangeEmail register={register} control={control} />,
    });
  };
  const changePass = () => {
    openModal({
      title: <Typography>Change Password</Typography>,
      children: <ChangePassword register={register} control={control} />,
    });
  };
  const editName = () => {
    openModal({
      title: <Typography>Edit Name</Typography>,
      children: <EditName register={register} control={control} />,
    });
  };
  return (
    <div className="settings">
      <Header burger={true} />
      <MainContent contentClassName="settings">
        <h1 className="settings-word" style={{ fontSize: "12px" }}>
          Settings
        </h1>

        <CustomButton onClick={editName} buttonClassName="settings-cell">
          <span className="settings-word">Edit Name</span>
          <img src={edit} alt="#" />
        </CustomButton>

        <CustomButton onClick={changeEmail} buttonClassName="settings-cell">
          <span className="settings-word">Change Email</span>
          <img src={edit} alt="#" />
        </CustomButton>

        <CustomButton onClick={changePass} buttonClassName="settings-cell">
          <span className="settings-word">Change password</span>
          <img src={edit} alt="#" />
        </CustomButton>

        <Link to={"/settingsTheme"} className="settings-cell">
          <span className="settings-word">Theme</span>
          <img src={edit} alt="#" />
        </Link>
      </MainContent>
    </div>
  );
};

export default Settings;
