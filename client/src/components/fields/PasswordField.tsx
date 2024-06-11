import { useState } from "react";
import TextField from "./TextField";
import { BiHide, BiShow } from "react-icons/bi";

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-fit">
      <TextField
        name="password"
        id="password"
        type={showPassword ? "text" : "password"}
        autoComplete="off"
        required={true}
        label="Password"
      />

      <button
        type="button"
        onClick={() => setShowPassword((showPassword) => !showPassword)}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        {showPassword ? (
          <BiHide className="h-5 w-5" />
        ) : (
          <BiShow className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default PasswordField;
