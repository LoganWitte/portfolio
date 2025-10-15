import { useState, useEffect, useRef } from "react";
import { Sidebar } from "../modules/Sidebar";

export default function Home() {

    const outerRef = useRef(null);
    const [isSelected, setIsSelected] = useState("about");
    const refs = useRef({});

    // Detects selected section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sectionIds = ["about", "projects"];
            const viewportMiddle = window.innerHeight / 2;
            
            let closestSection = null;
            let closestDistance = Infinity;
            
            sectionIds.forEach((id) => {
                const el = refs.current[id];
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const distance = Math.min(Math.abs(rect.top + 1 - viewportMiddle), Math.abs(rect.bottom - 1 - viewportMiddle));
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestSection = id;
                    }
                }
            });
            
            if (closestSection) {
                setIsSelected(closestSection);
            }
        };
        
        // Initial check
        handleScroll();
        
        // Listen to scroll events
        const container = outerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // Color selection
    const backgroundColor = "#0F172A";
    const textColor = "#FFFFFF";

    return (
        <div
            style={{ color: textColor, backgroundColor: backgroundColor }}
            className={`w-screen h-screen overflow-y-auto lg:flex lg:flex-row lg:justify-center`}
            ref={outerRef}
        >

            <div id="top"></div>
            <Sidebar isSelected={isSelected} />

            <main className="w-full px-12 overflow-visible lg:min-w-2xl lg:max-w-4xl lg:flex-1 lg:pt-16">

                <section
                    id="about"
                    ref={el => refs.current["about"] = el}
                    className="min-h-[60vh]"
                >
                    <h2 className="mb-4 text-3xl font-bold">About</h2>
                    <p className="text-red-500">
                        Note: this website is unfinished as of now.
                        <br />
                        Please reference resume (located <span className="hidden lg:inline">bottom left</span><span className="lg:hidden">above</span>).
                    </p>
                </section>

                <section
                    id="projects"
                    ref={el => refs.current["projects"] = el}
                    className="min-h-[60vh]"
                >
                    <h2 className="mb-4 text-3xl font-bold">Projects</h2>
                </section>

            </main>

        </div>
    );
};