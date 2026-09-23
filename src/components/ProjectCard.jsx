function ProjectCard({ number, title, description, preview }) {
    return (
        <article className="work-card">
            {preview}
            <div className="project-info">
                <span>{number}</span>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    );
}
export default ProjectCard;