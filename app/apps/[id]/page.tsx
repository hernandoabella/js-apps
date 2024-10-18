// app/apps/[id]/page.tsx
import { apps } from "@/app/appData"; // Adjust the path as necessary
import ProjectDetail from "@/app/components/ProjectDetail"; // Adjust the path as necessary
import { notFound } from "next/navigation";

interface Params {
  params: {
    id: string;
  };
}

const AppPage = async ({ params }: Params) => {
  const app = apps.find((a) => a.path.split('/').pop() === params.id);

  // If the app is not found, show a 404 page
  if (!app) {
    return notFound();
  }

  return (
    <div>
      <ProjectDetail app={app} />
    </div>
  );
};

export default AppPage;
