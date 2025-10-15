export function Sidebar({ isSelected }) {
    return (
        <div className="flex flex-col px-12 mt-12 mb-24 lg:max-w-sm lg:flex lg:justify-between lg:flex-1 lg:py-16 lg:my-0 lg:h-fit lg:min-h-full lg:sticky lg:top-0">
            <div>
                <a href="/#top" className="text-4xl font-bold hover:cursor-pointer">Logan Witte</a>
                <div className="max-w-xs py-4 text-lg font-semibold">Computer Science Student @ University of Central Florida</div>
                <div className="max-w-xs pb-4 opacity-65">I create responsive, appealing, and accessible websites and software</div>
                <div className="flex flex-col pt-8 lg:block">
                    {["about", "projects"].map(section => (
                        <a
                            key={section}
                            href={`/#${section}`}
                            className={`${isSelected === section ? "font-bold opacity-100" : "opacity-50"} text-sm flex flex-row mb-3 hover:underline`}
                        >
                            <div
                                className={`h-0 border border-white mr-3 mt-2 ${isSelected === section ? "transition-all duration-300 transform w-12" : "transition-all duration-300 transform w-6"}`}
                            />
                            {section.toUpperCase()}
                        </a>
                    ))}
                </div>
            </div>
            <div className="mt-4 text-2xl">
                <div className="flex flex-row">
                    <a href="https://github.com/LoganWitte" target="_blank" rel="noreferrer">
                        <i className="p-1 pr-4 opacity-50 fa-brands fa-github hover:opacity-100" />
                    </a>
                    <a href="https://www.linkedin.com/in/logan-witte-696637308/" target="_blank" rel="noreferrer">
                        <i className="p-1 pr-4 opacity-50 fa-brands fa-linkedin hover:opacity-100" />
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100">
                        <div className="flex">
                            <i className="p-1 fa-solid fa-file-pdf" />
                            <div className="p-1 text-base lg:pl-0">Resume</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}