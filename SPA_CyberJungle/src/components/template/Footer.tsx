import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Logo from "../shared/Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black/30 text-zinc-400 mt-10">
      <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
      <div className="container flex flex-col py-10 gap-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
          <Logo />
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-zinc-200 pb-2">About</span>
            <span className="text-sm">Our Story</span>
            <span className="text-sm">Privacy Policy</span>
            <span className="text-sm">Terms of Use</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-zinc-200 pb-2">
              Contact
            </span>
            <span className="text-sm">support@cyber.jungle</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
          <div className="flex gap-2 ">
            <a href="https://github.com/ricardofpe" target="_blank">
              {" "}
              <IconBrandGithub
                className="cursor-pointer"
                size={28}
                stroke={1}
              />
            </a>

            <a href="https://www.linkedin.com/in/ricardofpe/" target="_blank">
              <IconBrandLinkedin
                className="cursor-pointer"
                size={28}
                stroke={1}
              />
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1.5 text-sm text-zinc-500 mt-2">
            <div className="flex gap-1.5">
              <span>Made with</span>
              <span>🖤 by ricardofpe</span>
              <span>in {new Date().getFullYear()}</span>
            </div>
            <span className="hidden md:inline-block">-</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
