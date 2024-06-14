import MyIcon from "../MyIcon";
import { IoIosCheckmarkCircle } from "react-icons/io";

const SuccessLogout = () => {
  return (
    <div className="flex items-center gap-3 py-6 px-4 bg-green-300 mx-[3%] my-10">
      <MyIcon icon={IoIosCheckmarkCircle} />
      <h6>You&apos;ve successfully logged out of Bowtify. Come back soon!</h6>
    </div>
  );
};

export default SuccessLogout;
