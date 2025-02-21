import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaBitcoin } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";
import { appLinks } from "../constants";

const socialIcons = [AiOutlineTwitter];

const links = [
    ["MarketPlace", "About us", "Contact us",],
    ["Services", "Cargo Transportation",],
];

export default function FooterSection() {
    return (
        <footer className="relative w-full row gap-4 justify-between">
            {/* Left Section */}
            <div className="col gap-4 min-w-[200px] justify-between">
                <div className="space-y-6">
                    <h3 className="font-redzone text-4xl">JET.</h3>
                    <div className="row gap-4">
                        {socialIcons.map((Icon, i) => (
                            <a
                                key={i}
                                href="https://x.com/JET_ONDEMAND"
                                className="hover:text-blue-500 text-black bg-white p-2 br"
                                style={{borderRadius:"5px"}}
                            >
                                <Icon size={18} color="inherit" />
                            </a>
                        ))}
                    </div>
                </div>

                <span className="text-app_gray text-sm">
                © 2024 TeSys India Private Limited. All rights reserved.
                </span>
            </div>
            {/* Right Section */}
            <div className="row md:gap-24 gap-6">
                {links.map((group, idx) => (
                    <ul key={idx + 1} className="col gap-2">
                        {group.map((link, i) => (
                            <li key={link}>
                                {i === 0 ? (
                                    <span className="font-redzone mb-2">{link}</span>
                                ) : (
                                    <a
                                        href={`#${appLinks[i]}`} target="_blank"
                                        className={`font-nominee text-app_gray text-xs hover:text-white`}
                                    >
                                        {link}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </footer>
    );
}
