import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiTwitterXLine
} from "react-icons/ri";
import { FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export const socialData = [
  {
    name: "Email",
    link: "mailto:blocklimax@gmail.com",
    Icon: FaEnvelope,
  },
  {
    name: "Telegram",
    link: "https://t.me/Lolprof",
    Icon: FaTelegramPlane,
  },
  {
    name: "Twiiter",
    link: "https://twitter.com/blocklimax",
    Icon: RiTwitterXLine,
  },
  {
    name: "Github",
    link: "https://github.com/climax-solution",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
