import Button from "../components/Button";

export default function MainSection() {
    return (
        <section className="w-full flex flex-col md:flex-row center gap-8">
            <div className="text md:w-1/2 col gap-8">
                <h1 className="md:text-6xl text-4xl font-redzone">
                    Providing Modern <span style={{color:"pink"}} className="font-redzone">Cargo</span> MarketPlace with <span style={{color:"yellow"}} className="font-redzone">Blockchain.</span>
                </h1>
                <span className="text-app_gray leading-8 text-xl">
                        We connect businesses and truck owners for efficient, cost-effective logistics solutions powered by AI and blockchain technology.
                </span>
                <div className="row gap-4">
                    <Button>Explore us</Button>
                    <Button outline={true}>Join Our Community</Button>
                </div>
            </div>
            <div className="relative md:w-1/2 col gap-4 center">
                <img
                    src="/assets/etherum.png"
                    alt="etherum_logo"
                    className="w-[86%] h-[70%] object-contain"
                />
            </div>
        </section>
    );
}
