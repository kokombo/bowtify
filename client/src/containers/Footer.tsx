import { Copyright, FooterLinks } from "@/components";
import { BowtifyLogo } from "@/components/logos";

const Footer = () => {
  return (
    <footer className="paddingX pt-16 pb-5 bg-black text-white">
      <div className="flex justify-between mb-10">
        <FooterLinks />
        <div />
      </div>

      <div className="flex justify-between">
        <BowtifyLogo />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
