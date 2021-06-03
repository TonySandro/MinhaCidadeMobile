import React, { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import ImgDefault from "../../images/default.jpg";

import { Button } from "./styles";

export default function Profile() {
  const { user } = useContext(Context);
  const imgLink = user.user.profile_pic
    ? { uri: `http://138.0.196.120:5005/` + user.user.profile_pic }
    : ImgDefault;

    // console.log(process.env['BASE_URL'])

  return <Button source={imgLink} />;
}
