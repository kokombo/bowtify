import { Copyright } from "@/components";
import { BowtifyLogo } from "@/components/logos";

const Footer = () => {
  return (
    <footer className="paddingX py-10 bg-black text-white">
      <div></div>

      <div className="flex justify-between">
        <BowtifyLogo />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
