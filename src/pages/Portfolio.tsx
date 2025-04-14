
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Film, Pen, Video, BookOpen } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Eastern Odyssey",
    category: "animation",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "A collaborative animated series exploring ancient myths from both Eastern and Western cultures.",
    client: "Global Streaming Network",
    year: "2023",
    partners: ["Western Lights Studio", "Shanghai Animation"],
  },
  {
    id: 2,
    title: "Bamboo & Steel",
    category: "film",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580",
    description: "A feature film that bridges cyberpunk aesthetics with traditional Eastern philosophy.",
    client: "International Film Consortium",
    year: "2022",
    partners: ["Pacific Films", "Beijing Visual Arts"],
  },
  {
    id: 3,
    title: "Legends United",
    category: "writing",
    image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3",
    description: "Script development for an anthology series combining folklore from around the world.",
    client: "Worldwide Entertainment",
    year: "2022",
    partners: ["Storytellers Collective", "Eastern Tales Studio"],
  },
  {
    id: 4,
    title: "Harmony in Motion",
    category: "consulting",
    image: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c",
    description: "Cultural consulting for a major animation studio's expansion into Asian markets.",
    client: "Animation Giants Inc.",
    year: "2023",
    partners: ["Market Bridge Consultants"],
  },
  {
    id: 5,
    title: "Celestial Journey",
    category: "animation",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    description: "An animated short film exploring the journey of celestial beings across different cultures.",
    client: "Independent Production",
    year: "2021",
    partners: ["Artist Collective", "Guangzhou Animation"],
  },
  {
    id: 6,
    title: "Rhythm of Life",
    category: "film",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
    description: "Documentary series exploring music and dance traditions from East and West.",
    client: "Cultural Arts Foundation",
    year: "2022",
    partners: ["Documentary Masters", "Eastern Culture Institute"],
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl">
              Explore our collection of cross-cultural animation projects, 
              writing collaborations, and international productions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-harmony-light">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="animation">
                  <Film className="h-4 w-4 mr-2" /> Animation
                </TabsTrigger>
                <TabsTrigger value="film">
                  <Video className="h-4 w-4 mr-2" /> Film
                </TabsTrigger>
                <TabsTrigger value="writing">
                  <Pen className="h-4 w-4 mr-2" /> Writing
                </TabsTrigger>
                <TabsTrigger value="consulting">
                  <BookOpen className="h-4 w-4 mr-2" /> Consulting
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={() => setSelectedProject(project)} 
                  />
                ))}
              </div>
            </TabsContent>
            
            {["animation", "film", "writing", "consulting"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((project) => project.category === category)
                    .map((project) => (
                      <ProjectCard 
                        key={project.id} 
                        project={project} 
                        onClick={() => setSelectedProject(project)} 
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={`${selectedProject.image}?auto=format&fit=crop&w=1200&q=80`} 
                alt={selectedProject.title}
                className="w-full h-72 object-cover rounded-t-lg"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-harmony-blue">{selectedProject.title}</h2>
              <p className="text-lg mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-harmony-blue mb-2">Project Details</h3>
                  <ul className="space-y-2">
                    <li><span className="font-medium">Category:</span> {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}</li>
                    <li><span className="font-medium">Client:</span> {selectedProject.client}</li>
                    <li><span className="font-medium">Year:</span> {selectedProject.year}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-harmony-blue mb-2">Partners</h3>
                  <ul className="list-disc pl-5">
                    {selectedProject.partners.map((partner, index) => (
                      <li key={index}>{partner}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="bg-harmony-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer" 
      onClick={onClick}
    >
      <img 
        src={`${project.image}?auto=format&fit=crop&w=500&h=300&q=80`} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full bg-harmony-blue/10 text-harmony-blue text-xs uppercase tracking-wide mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
};

export default Portfolio;
