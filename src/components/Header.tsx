import { appLinks } from "../constants";
import Button from "./Button";
import AppLogo from "./sub-components/AppLogo";
import ThemeControl from "./sub-components/ThemeControl";

const links = ["Home", "Cargo Marketplace", "Contact us",];

export default function Header() {
    return (
        <header className="sticky w-full mt-2 py-4 px-1 min-h-16 row items-center justify-between gap-2">
            <div className="row items-center gap-2">
                <AppLogo
                    onClick={() => window.location.assign("/")}
                    className="cursor-pointer"
                />
                <div className="ml-24 hidden lg:flex flex-row justify-content-around flex-wrap gap-8">
                    {links.map((li, i) => (
                        <a
                            key={i}
                            href={`#${appLinks[i]}`}
                            className={`uppercase font-redzone mr-8 ml-8`}
                            style={{fontSize:"20px"}}
                        >
                            {li}
                        </a>
                    ))}
                </div>
            </div>
            <div className="row items-center gap-12">
                <ThemeControl />
                <div className="hidden sm:block">
                    <Button><a href="https://x.com/JET_ONDEMAND" target="_blank">Connect with us</a></Button>
                </div>
            </div>
        </header>
    );
}
