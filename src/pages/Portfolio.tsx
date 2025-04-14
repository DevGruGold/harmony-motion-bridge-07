
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Film, Pen, Video, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t("Eastern Odyssey", "东方奥德赛"),
      category: "animation",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      description: t("A collaborative animated series exploring ancient myths from both Eastern and Western cultures.", 
                     "一个合作的动画系列，探索东西方文化的古代神话。"),
      client: t("Global Streaming Network", "全球流媒体网络"),
      year: "2023",
      partners: [t("Western Lights Studio", "西方灯光工作室"), t("Shanghai Animation", "上海动画")],
    },
    {
      id: 2,
      title: t("Bamboo & Steel", "竹与钢"),
      category: "film",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580",
      description: t("A feature film that bridges cyberpunk aesthetics with traditional Eastern philosophy.", 
                     "一部将赛博朋克美学与传统东方哲学相结合的故事片。"),
      client: t("International Film Consortium", "国际电影联盟"),
      year: "2022",
      partners: [t("Pacific Films", "太平洋电影"), t("Beijing Visual Arts", "北京视觉艺术")],
    },
    {
      id: 3,
      title: t("Legends United", "传奇联合"),
      category: "writing",
      image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3",
      description: t("Script development for an anthology series combining folklore from around the world.", 
                     "为结合世界各地民间传说的选集系列开发剧本。"),
      client: t("Worldwide Entertainment", "全球娱乐"),
      year: "2022",
      partners: [t("Storytellers Collective", "讲故事者集体"), t("Eastern Tales Studio", "东方传说工作室")],
    },
    {
      id: 4,
      title: t("Harmony in Motion", "运动中的和谐"),
      category: "consulting",
      image: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c",
      description: t("Cultural consulting for a major animation studio's expansion into Asian markets.", 
                     "为一家大型动画工作室进军亚洲市场提供文化咨询。"),
      client: t("Animation Giants Inc.", "动画巨人公司"),
      year: "2023",
      partners: [t("Market Bridge Consultants", "市场桥梁咨询")],
    },
    {
      id: 5,
      title: t("Celestial Journey", "天体之旅"),
      category: "animation",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
      description: t("An animated short film exploring the journey of celestial beings across different cultures.", 
                     "一部动画短片，探索不同文化中天体的旅程。"),
      client: t("Independent Production", "独立制作"),
      year: "2021",
      partners: [t("Artist Collective", "艺术家集体"), t("Guangzhou Animation", "广州动画")],
    },
    {
      id: 6,
      title: t("Rhythm of Life", "生命的韵律"),
      category: "film",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
      description: t("Documentary series exploring music and dance traditions from East and West.", 
                     "纪录片系列，探索东西方的音乐和舞蹈传统。"),
      client: t("Cultural Arts Foundation", "文化艺术基金会"),
      year: "2022",
      partners: [t("Documentary Masters", "纪录片大师"), t("Eastern Culture Institute", "东方文化研究所")],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("Our Portfolio", "我们的作品集")}</h1>
            <p className="text-xl">
              {t("Explore our collection of cross-cultural animation projects, writing collaborations, and international productions.",
                "探索我们的跨文化动画项目、写作合作和国际制作集合。")}
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
                <TabsTrigger value="all">{t("All Projects", "所有项目")}</TabsTrigger>
                <TabsTrigger value="animation">
                  <Film className="h-4 w-4 mr-2" /> {t("Animation", "动画")}
                </TabsTrigger>
                <TabsTrigger value="film">
                  <Video className="h-4 w-4 mr-2" /> {t("Film", "电影")}
                </TabsTrigger>
                <TabsTrigger value="writing">
                  <Pen className="h-4 w-4 mr-2" /> {t("Writing", "编剧")}
                </TabsTrigger>
                <TabsTrigger value="consulting">
                  <BookOpen className="h-4 w-4 mr-2" /> {t("Consulting", "咨询")}
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
                  <h3 className="font-bold text-harmony-blue mb-2">{t("Project Details", "项目详情")}</h3>
                  <ul className="space-y-2">
                    <li><span className="font-medium">{t("Category", "类别")}:</span> {t(selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1), 
                      selectedProject.category === "animation" ? "动画" : 
                      selectedProject.category === "film" ? "电影" : 
                      selectedProject.category === "writing" ? "编剧" : "咨询")}</li>
                    <li><span className="font-medium">{t("Client", "客户")}:</span> {selectedProject.client}</li>
                    <li><span className="font-medium">{t("Year", "年份")}:</span> {selectedProject.year}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-harmony-blue mb-2">{t("Partners", "合作伙伴")}</h3>
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
  const { t } = useLanguage();
  
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
          {t(project.category, 
            project.category === "animation" ? "动画" : 
            project.category === "film" ? "电影" : 
            project.category === "writing" ? "编剧" : "咨询")}
        </span>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
};

export default Portfolio;
