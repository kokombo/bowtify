"use client";
import { Copyright } from "@/components";
import { BowtifyLogo } from "@/components/logos";
import { FooterLinks } from "@/components/untitled-lists";

const Footer = () => {
  return (
    <footer className="paddingX pt-8 lg:pt-16 pb-5 bg-black text-white">
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
