import { useState } from "react";
import TextField from "./TextField";
import { BiHide, BiShow } from "react-icons/bi";

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" flex items-center gap-2 relative w-fit">
      <TextField
        name="password"
        id="password"
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
          {showPassword ? (
            <BiHide className="h-5 w-5" />
          ) : (
            <BiShow className="h-5 w-5" />
          )}
        </button>
      </span>
    </div>
  );
};

export default PasswordField;
