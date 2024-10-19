// ProjectComponent.tsx
import React from "react";

interface ProjectComponentProps {
  name: string;
  description: string;
  path: string;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  name,
  description,
  path,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2">{description}</p>
      <a
        href={path}
        className="mt-4 inline-block text-blue-500 hover:underline"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectComponent;
