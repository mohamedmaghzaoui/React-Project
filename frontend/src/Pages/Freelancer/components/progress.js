import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
export const Progress = () => {
  return (
    <div className="mx-5 my-2">
      <TbCircleNumber1 className="text-success" size={40} />
      <span
        style={{ fontSize: "17px" }}
        className="text-success mx-1 fw-medium "
      >
        Personal info
      </span>
      <span className="mx-1 text-success"> &gt;</span>
      <TbCircleNumber2 className=" mx-2 text-light-emphasis" size={40} />
      <span style={{ fontSize: "17px" }} className=" mx-1 fw-medium ">
        professional info
      </span>
      <span className="mx-1"> &gt;</span>
      <TbCircleNumber3 className=" mx-2 text-light-emphasis" size={40} />
      <span style={{ fontSize: "17px" }} className=" mx-1 fw-medium ">
        Finish
      </span>
      <hr />
    </div>
  );
};
