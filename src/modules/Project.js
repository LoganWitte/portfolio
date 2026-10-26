export default function Project(props) {
    const {name, description, link, imageLink, technologies, technologyLinks} = props;
    return(
        <div className="w-full max-w-full p-2 mb-4 rounded-lg bg-slate-800">
            <a href={link} className="flex items-center p-2 text-xl font-bold rounded-full hover:underline w-fit">{name}<i className="ml-1 text-sm fa-solid fa-arrow-up-right-from-square"></i></a>
            <p className="px-2">{description}</p>
            <div className="flex flex-wrap gap-2 p-2 mt-2">
                {technologies.map((tech, index) => (
                    <a key={index} href={technologyLinks[index]} className="px-2 py-1 text-black bg-slate-200 rounded-xl" target="_blank" rel="noopener noreferrer">
                        {tech}
                    </a>
                ))}
            </div>
        </div>
    )
}