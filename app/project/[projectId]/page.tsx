type props = {
  params: {
    projectId: string;
  };
};

export default function ProjectDetail({ params: { projectId } }: props) {
  return <h1>Project Detail : {projectId}</h1>;
}
