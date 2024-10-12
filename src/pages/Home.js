import { useState, useEffect, useRef } from "react";
import '../index.css';

const Home = () => {
    
    const [isSelected, setIsSelected] = useState("about");
    const observer = useRef();

    //Sets isSelected as the user scrolls
    useEffect(() => {
        const sections = ['about', 'experience', 'projects'];
        function callback(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsSelected(entry.target.id);
                    return;
                }
            });
        };

        observer.current = new IntersectionObserver(callback, {
            threshold: 0.8 // Adjust this value based on how much you need in view to count as visible
        });

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                observer.current.observe(element);
            }
        });

        return () => {
            if (observer.current) {
                sections.forEach(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        observer.current.unobserve(element);
                    }
                });
            }
        };
    }, []);

    return (
        <div className="bg-slate-900 w-screen h-screen overflow-y-auto text-slate-200
                        lg:flex lg:flex-row lg:justify-center"
                        >
            <div id="top"></div>
            <div className="flex flex-col px-12 mt-12 mb-24
                            lg:max-w-sm lg:flex lg:justify-between lg:flex-1 lg:py-16 lg:my-0 lg:h-fit lg:min-h-full lg:sticky lg:top-0">
                <div className="">
                    <a href="/#top" className="font-bold text-4xl hover:cursor-pointer">Logan Witte</a>
                    <div className="font-semibold text-lg py-4 max-w-xs">Computer Science Student @ University of Central Florida</div>
                    <div className="opacity-65 max-w-xs">I create precise, interesting, and accessible digital experiences.</div>
                    <div className="hidden lg:block pt-8 flex flex-col">
                        <a href="/#about" className={`${isSelected === "about" ? "font-bold opacity-100 " : "opacity-50 "}text-sm flex flex-row pb-3 hover:underline`}>
                            <div className={`h-0 border border-white relative top-3 mr-3
                                            ${isSelected === "about" ? "transition-all duration-300 transform w-12" : "transition-all duration-300 transform w-6"}
                                            `} />
                            ABOUT
                        </a>
                        <a href="/#experience" className={`${isSelected === "experience" ? "font-bold opacity-100 " : "opacity-50 "}text-sm flex flex-row pb-3 hover:underline`}>
                            <div className={`h-0 border border-white relative top-3 mr-3
                                            ${isSelected === "experience" ? "transition-all duration-300 transform w-12" : "transition-all duration-300 transform w-6"}
                                            `} />
                            EXPERIENCE
                        </a>
                        <a href="/#projects" className={`${isSelected === "projects" ? "font-bold opacity-100 " : "opacity-50 "}text-sm flex flex-row pb-3 hover:underline`}>
                            <div className={`h-0 border border-white relative top-3 mr-3
                                            ${isSelected === "projects" ? "transition-all duration-300 transform w-12" : "transition-all duration-300 transform w-6"}
                                            `} />
                            PROJECTS
                        </a>
                    </div>
                </div>
                
                <div className="text-2xl mt-4">
                    <div className="flex flex-row">
                        <a href="https://github.com/LoganWitte" target="_blank" rel="noreferrer"><i className="fa-brands fa-github p-1 pr-4 opacity-50 hover:opacity-100" /></a>
                        <a href="https://www.linkedin.com/in/logan-witte-696637308/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin p-1 pr-4 opacity-50 hover:opacity-100" /></a>
                        <a href="/resume.pdf" target="_blank" rel="noreferrer" className=" opacity-50 hover:opacity-100">
                            <div className="flex">
                                <i className="fa-solid fa-file-pdf p-1" />
                                <div className="text-base p-1 lg:pl-0">Resume</div> 
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row
                            lg:min-w-2xl lg:max-w-4xl lg:flex-1 lg:h-fit lg:pt-16">
                <div className="px-12 w-full">
                    <div id="about" style={{height: "35em"}}>ABOUT</div>
                    <div id="experience" style={{height: "35em"}}>EXPERIENCE</div>
                    <div id="projects" style={{height: "35em"}}>PROJECTS</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
