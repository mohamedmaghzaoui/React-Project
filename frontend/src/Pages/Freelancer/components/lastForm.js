import { Link } from "react-router-dom";
import { Progress } from "./progress";
import { useContext, useState } from "react";
import { UserContext } from "../../../Contexts/userContext";
import Login from "../../Home/Login/loginForm";

export const LastForm = (props) => {
  const { setUsername } = useContext(UserContext);
  const [isOpenLogin, setIsOpenLogin] = useState(true);
  return (
    <div>
      <Progress third="third" />
      <h2 className="text-light-emphasis mx-5">
        Congratulations! Your Profile is Complete
      </h2>
      <p className="text-light-emphasis mx-5">
        Thank you for providing all the necessary information. Your profile
        is-invalid
        <br />
        now complete and ready for others to explore. If you need to make any
        <br />
        changes, you can always revisit your profile settings. Good luck on your
        journey
      </p>
      <Link to={"/profile"} className="btn btn-success btn-lg col-2 mx-5  ">
        Finish
      </Link>
      <Login
        text={"please connect again"}
        openLogin={isOpenLogin}
        onCloseLogin={() => setIsOpenLogin(false)}
      />
    </div>
  );
};
