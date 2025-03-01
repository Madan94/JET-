import { useEffect, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaBitcoin, FaMapMarkerAlt } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";
import { appLinks } from "../constants";

const socialIcons = [
    { icon: AiOutlineTwitter, link: "https://x.com/JET_ONDEMAND" },
    { icon: FaGithub, link: "https://github.com/yourprofile" },
    { icon: RiDiscordFill, link: "https://discord.com/invite/yourserver" },
    { icon: FaBitcoin, link: "https://bitcoin.org" },
];

const links = [
    ["MarketPlace", "About us", "Contact us"],
    ["Services", "Cargo Transportation"],
];

export default function FooterSection() {
    const [officeAddress, setOfficeAddress] = useState("Fetching office location...");
    const [officeName,setOfficeName]=useState("Fetching Copyright details....")

    useEffect(() => {
        fetch("https://ipinfo.io/json?token=4e88e85de43441")
            .then((response) => response.json())
            .then((data) => {
                const country = data.country; 

                if (country === "IN") {
                    setOfficeAddress("D46, CMDA, Truck Terminal, Madhavaram, Chennai 600110");
                    setOfficeName("© 2025 TeSys India Private Limited. All rights reserved.");
                } else if (country === "US") {
                    setOfficeAddress("Remote Tracking Solutions Inc, 2432W. Peoria Ave, Suite 1344, Phoenix, AZ 85029");
                    setOfficeName("© 2025 Remote Tracking Solutions Inc. All rights reserved.");
                } else {
                    setOfficeAddress("Remote Tracking Solutions Inc, 2432W. Peoria Ave, Suite 1344, Phoenix, AZ 85029");
                    setOfficeName("© 2025 Remote Tracking Solutions Inc. All rights reserved.");
                }
            })
            .catch(() => setOfficeAddress("Remote Tracking Solutions Inc, 2432W. Peoria Ave, Suite 1344, Phoenix, AZ 85029")); 
    }, []);

    return (
        <footer className="relative w-full row gap-4 justify-between">
            {/* Left Section */}
            <div className="flex flex-col gap-4 min-w-[200px]">
                <h3 className="font-redzone text-4xl">JET.</h3>

                {/* Social Icons */}
                <div className="flex gap-4">
                    {socialIcons.map(({ icon: Icon, link }, i) => (
                        <a
                            key={i}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 bg-white p-2 rounded-md"
                        >
                            <Icon size={18} color="black" />
                        </a>
                    ))}
                </div>

                {/* Office Address Based on User Location */}
                <span className="text-app_gray text-sm flex items-center gap-2">
                    <FaMapMarkerAlt size={16} /> {officeAddress}
                </span>

                <span className="text-app_gray text-sm">
                    {officeName}
                </span>
            </div>

            {/* Right Section */}
            <div className="flex flex-wrap gap-6 md:gap-12">
                {links.map((group, idx) => (
                    <ul key={idx} className="flex flex-col gap-2">
                        {group.map((link, i) => (
                            <li key={link}>
                                {i === 0 ? (
                                    <span className="font-redzone mb-2">{link}</span>
                                ) : (
                                    <a
                                        href={`#${appLinks[i] || ""}`}
                                        className="font-nominee text-app_gray text-sm hover:text-white"
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
