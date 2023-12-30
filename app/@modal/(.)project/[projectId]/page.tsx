import Modal from "@/components/Modal";

type props = {
  params: {
    projectId: string;
  };
};

export default function ProjectDetailModal({ params: { projectId } }: props) {
  return (
    <Modal>
      <h1>Project Detail Modal : {projectId}</h1>;
    </Modal>
  );
}
