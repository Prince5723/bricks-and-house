import {
    Card,
    CardContent
  } from "@/components/ui/card";
  
  interface Project {
    _id: string;
    siteAddress: string;
    clientId: {
      name: string;
    };
    status: string;
  }
  
  interface ProjectsListProps {
    projects: Project[];
  }
  
  export default function ProjectsList({ projects }: ProjectsListProps) {
    return (
      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project._id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600">
                    {project.siteAddress}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Client: {project.clientId?.name || 'N/A'}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {project.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
        {projects.length === 0 && (
          <p className="text-center text-gray-500">No projects assigned yet.</p>
        )}
      </div>
    );
  }