
import { Link } from "react-router-dom";
import { ArrowRight, Star, Palette, Wand2, Lightbulb, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-br from-harmony-blue to-harmony-purple flex items-center">
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("Bridging Cultures, Crafting Stories", "连接文化，创造故事")}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {t("Harmony Motion Studios connects Western and Eastern creative talent in the animation industry, creating compelling stories that transcend cultural boundaries.",
                "和谐动画工作室连接动画行业的西方和东方创意人才，创造超越文化界限的引人入胜的故事。")}
            </p>
            <Button asChild size="lg" className="pixar-button bg-harmony-teal group">
              <Link to="/partner">
                {t("Partner With Us", "与我们合作")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-harmony-light">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-harmony-blue">
                {t("Connecting East and West", "连接东西方")}
              </h2>
              <p className="text-lg mb-6">
                {t("At Harmony Motion Studios, we believe that the most compelling stories emerge when diverse perspectives unite. Based in beautiful La Fortuna, Costa Rica, we've created a unique hub for creative collaboration between Western and Eastern animation talents.",
                  "在和谐动画工作室，我们相信当不同的视角结合在一起时，最引人入胜的故事就会涌现。我们位于美丽的哥斯达黎加拉福图纳，创建了一个独特的中心，促进西方和东方动画人才之间的创意合作。")}
              </p>
              <Button asChild variant="outline" className="border-harmony-blue text-harmony-blue hover:bg-harmony-blue/10 rounded-full">
                <Link to="/about">{t("Learn More About Us", "了解更多关于我们")} <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-harmony-blue/20 to-transparent rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1560807707-8cc77767d783" 
                alt={t("Animated characters", "动画角色")}
                className="rounded-2xl shadow-xl animate-float h-96 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <Sparkles className="h-12 w-12 text-harmony-gold mx-auto mb-4 animate-bounce-slight" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-harmony-blue">{t("Our Services", "我们的服务")}</h2>
            <p className="text-lg max-w-3xl mx-auto">
              {t("We offer a comprehensive suite of services to facilitate successful collaborations between Western and Eastern animation studios.",
                "我们提供全面的服务，促进西方和东方动画工作室之间的成功合作。")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title={t("Story Development", "故事开发")}
              description={t("Creating narratives that resonate across cultural boundaries.", "创造跨越文化界限产生共鸣的叙事。")}
              icon={<Palette className="h-8 w-8 text-harmony-teal" />}
              color="bg-harmony-teal/10"
            />
            
            <ServiceCard 
              title={t("Animation Production", "动画制作")}
              description={t("Managing the animation process from concept to completion.", "管理从概念到完成的动画过程。")}
              icon={<Wand2 className="h-8 w-8 text-harmony-purple" />}
              color="bg-harmony-purple/10"
            />
            
            <ServiceCard 
              title={t("Cultural Consulting", "文化咨询")}
              description={t("Ensuring authentic representation in cross-cultural projects.", "确保跨文化项目中的真实表达。")}
              icon={<Lightbulb className="h-8 w-8 text-harmony-gold" />}
              color="bg-harmony-gold/10"
            />
            
            <ServiceCard 
              title={t("Partnership Management", "合作伙伴管理")}
              description={t("Facilitating successful collaborations between international studios.", "促进国际工作室之间的成功合作。")}
              icon={<Star className="h-8 w-8 text-harmony-red" />}
              color="bg-harmony-red/10"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-harmony-blue to-harmony-purple text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("Ready to Create Something Amazing?", "准备创造令人惊叹的东西？")}</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {t("Join our network of creative partners and let's craft compelling stories together.", "加入我们的创意合作伙伴网络，让我们一起创造引人入胜的故事。")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="pixar-button bg-harmony-red">
              <Link to="/partner">{t("Partner With Us", "与我们合作")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
              <Link to="/contact">{t("Contact Us", "联系我们")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceCard = ({ title, description, icon, color }) => {
  const { t } = useLanguage();
  
  return (
    <div className="pixar-card p-6 hover:scale-105 transition-transform duration-300">
      <div className={`${color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link to="/services" className="text-harmony-blue hover:text-harmony-teal flex items-center font-medium">
        {t("Learn More", "了解更多")} <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default Index;
