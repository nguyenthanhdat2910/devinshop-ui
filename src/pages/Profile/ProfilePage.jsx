import React, { useState } from "react";
import {
  WrapperContentProfile,
  WrapperHeader,
  WrapperInput,
  WrapperLable,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const handleOnChangeEmail = () => {};

  return (
    <div style={{ width: "1270px", margin: "0 auto", height: "500px" }}>
      <WrapperHeader>Thông tin người dùng</WrapperHeader>
      <WrapperContentProfile>
        <WrapperInput>
          <WrapperLable>Email</WrapperLable>
          <InputForm
            style={{ width: "300px" }}
            value={email}
            onChange={handleOnChangeEmail}
          />
        </WrapperInput>
      </WrapperContentProfile>
    </div>
  );
};

export default ProfilePage;
