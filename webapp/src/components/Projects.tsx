import DownloadFile from "./DownloadFile";

type ProjectsProps = {
  projectFiles: string[];
};

function Projects(props: ProjectsProps) {
  if (!props.projectFiles?.length) {
    return (
      <div className="prose">
        <p>No projects available for this course.</p>
      </div>
    );
  }

  return (
    <div className="prose">
      <ul>
        {props.projectFiles.map((file, index) => (
          <li key={index}>
            <DownloadFile
              azureFileUrl={file}
              className="link link-primary p-0 m-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Projects;
