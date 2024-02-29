import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
export const Progress = (props) => {
  return (
    <div className="mx-5 my-2">
      <TbCircleNumber1 className="text-success" size={40} />
      <span
        style={{ fontSize: "17px" }}
        className="text-success mx-1 fw-medium "
      >
        Personal info
      </span>

      <span className="mx-1 "> &gt;</span>
      <TbCircleNumber2
        className={`mx-2 ${
          props.second || props.third ? "text-success" : "text-light-emphasis"
        }`}
        size={40}
      />
      <span
        style={{ fontSize: "17px" }}
        className={`mx-1 fw-medium ${
          props.second || props.third ? "text-success" : "text-light-emphasis"
        }`}
      >
        professional info
      </span>
      <span className="mx-1"> &gt;</span>
      <TbCircleNumber3
        className={`mx-2  ${
          props.third ? "text-success" : "text-light-emphasis"
        }`}
        size={40}
      />
      <span
        style={{ fontSize: "17px" }}
        className={`mx-1 fw-medium  ${
          props.third ? "text-success" : "text-light-emphasis"
        }`}
      >
        Finish
      </span>
      <hr />
    </div>
  );
};
