import { useState } from "react";
import TextField from "./TextField";
import { BiHide, BiShow } from "react-icons/bi";

type Props = {
  name: string;
  id: string;
};

const PasswordField = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" flex items-center gap-2 relative w-fit">
      <TextField
        name={props.name}
        id={props.id}
        type={showPassword ? "text" : "password"}
        autoComplete="off"
        required={true}
        label="Password"
      />

      <span className="absolute right-2 top-4">
        <button
          type="button"
          onClick={() => setShowPassword((showPassword) => !showPassword)}
        >
          {showPassword ? <BiHide /> : <BiShow />}
        </button>
      </span>
    </div>
  );
};

export default PasswordField;
