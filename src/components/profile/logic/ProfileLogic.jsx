import { useContext } from "react";
import { AppContext } from "../../../../context/appContext";

const ProfileLogic = () => {
  const { profileData } = useContext(AppContext);
  const length = profileData.length == 0;

  return {length};
};

export default ProfileLogic;
