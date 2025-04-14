
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("About Harmony Motion Studios", "关于和谐动画工作室")}</h1>
            <p className="text-xl">
              {t("We're on a mission to unite creative talent across continents, bringing Eastern and Western animation perspectives together.", 
                "我们的使命是将各大洲的创意人才联合起来，将东方和西方的动画视角结合起来。")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-harmony-blue">{t("Our Story", "我们的故事")}</h2>
              <p className="mb-4">
                {t("Founded in La Fortuna, Costa Rica, Harmony Motion Studios was born from a passion for storytelling and a vision of global creative collaboration. Our founder, having experienced the rich creative potential of both Eastern and Western animation traditions, recognized an opportunity to bridge these worlds.",
                  "和谐动画工作室成立于哥斯达黎加拉福图纳，源于对讲故事的热情和全球创意合作的愿景。我们的创始人曾经体验过东西方动画传统的丰富创造力，发现了连接这些世界的机会。")}
              </p>
              <p className="mb-4">
                {t("We believe that when diverse perspectives unite, extraordinary stories emerge. Our journey began with a simple goal: to create a platform where talented creators from different cultural backgrounds could collaborate seamlessly, producing animation that resonates with global audiences.",
                  "我们相信，当不同的视角团结起来时，非凡的故事就会出现。我们的旅程始于一个简单的目标：创建一个平台，让来自不同文化背景的有才华的创作者能够无缝协作，制作与全球观众产生共鸣的动画。")}
              </p>
              <p>
                {t("Today, we focus on building strategic partnerships between Western animation studios and their counterparts in China and across Asia, facilitating collaborations that honor the unique strengths of each tradition while creating something entirely new.",
                  "今天，我们专注于在西方动画工作室与中国和亚洲各地的动画工作室之间建立战略合作伙伴关系，促进合作，尊重每个传统的独特优势，同时创造全新的东西。")}
              </p>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] h-[400px] bg-cover bg-center rounded-lg shadow-xl"></div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-16 bg-harmony-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-harmony-blue">{t("Our Vision & Mission", "我们的愿景与使命")}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-harmony-blue">{t("Vision", "愿景")}</h3>
                <p>
                  {t("To become the premier bridge between Eastern and Western animation industries, fostering collaborations that redefine storytelling through animation and create content that resonates with global audiences while honoring diverse cultural perspectives.",
                    "成为东西方动画行业之间的首要桥梁，促进重新定义通过动画讲故事的合作，并创造与全球观众产生共鸣同时尊重多元文化视角的内容。")}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-harmony-blue">{t("Mission", "使命")}</h3>
                <p>
                  {t("To facilitate meaningful partnerships between animation studios across continents, provide expert cultural consulting, and develop stories that transcend boundaries—creating a new standard for international creative collaboration in the animation industry.",
                    "促进各大洲动画工作室之间有意义的合作伙伴关系，提供专业的文化咨询，并开发超越界限的故事——在动画行业为国际创意合作创造新标准。")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-harmony-blue">{t("Our Leadership", "我们的领导团队")}</h2>
            <p className="text-lg max-w-3xl mx-auto">
              {t("Behind Harmony Motion Studios is a team of passionate storytellers and industry experts dedicated to building bridges between animation cultures.",
                "和谐动画工作室背后是一支充满激情的故事讲述者和行业专家团队，致力于在动画文化之间架起桥梁。")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-harmony-light p-6 rounded-lg text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1">{t("Jane Doe", "简·多")}</h3>
              <p className="text-harmony-blue mb-4">{t("Founder & Creative Director", "创始人兼创意总监")}</p>
              <p className="text-sm">
                {t("With over 15 years of experience as a writer and producer in animation, Jane brings a wealth of industry knowledge and a passion for cross-cultural storytelling.",
                  "简拥有超过15年的动画编剧和制作人经验，带来了丰富的行业知识和对跨文化讲故事的热情。")}
              </p>
            </div>
            <div className="bg-harmony-light p-6 rounded-lg text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1">{t("John Smith", "约翰·史密斯")}</h3>
              <p className="text-harmony-blue mb-4">{t("Head of International Partnerships", "国际合作伙伴负责人")}</p>
              <p className="text-sm">
                {t("John specializes in building bridges between Western studios and partners in China, with extensive experience navigating the complexities of international collaboration.",
                  "约翰专注于在西方工作室和中国合作伙伴之间架起桥梁，在应对国际合作复杂性方面拥有丰富经验。")}
              </p>
            </div>
            <div className="bg-harmony-light p-6 rounded-lg text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1">{t("Wei Zhang", "张伟")}</h3>
              <p className="text-harmony-blue mb-4">{t("Cultural Consultant", "文化顾问")}</p>
              <p className="text-sm">
                {t("With deep connections to China's animation industry, Wei ensures authentic cultural representation in all projects and facilitates smooth communication between partners.",
                  "张伟与中国动画行业有着深厚的联系，确保所有项目中的真实文化表达，并促进合作伙伴之间的顺畅沟通。")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("What Partners Say", "合作伙伴怎么说")}</h2>
            <p className="text-lg max-w-3xl mx-auto">
              {t("Don't just take our word for it—hear from the studios and creators who have collaborated with us on international projects.",
                "不只是听我们的一面之词——听听与我们合作国际项目的工作室和创作者怎么说。")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-8 rounded-lg relative">
              <Quote className="absolute top-4 left-4 opacity-20 h-12 w-12" />
              <div className="relative z-10">
                <p className="mb-6 italic">
                  {t("\"Harmony Motion Studios bridged the gap between our studio in Los Angeles and our partners in Shanghai. Their cultural expertise made all the difference in creating a smooth, productive collaboration.\"",
                    "\"和谐动画工作室弥合了我们洛杉矶工作室与上海合作伙伴之间的差距。他们的文化专业知识在创建顺畅、高效的合作中起到了决定性的作用。\"")}
                </p>
                <div>
                  <p className="font-bold">{t("Michael Chen", "陈迈克")}</p>
                  <p>{t("Creative Director, Westcoast Animation", "创意总监，西海岸动画")}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-lg relative">
              <Quote className="absolute top-4 left-4 opacity-20 h-12 w-12" />
              <div className="relative z-10">
                <p className="mb-6 italic">
                  {t("\"Working with Harmony Motion Studios opened doors to Western markets we couldn't access before. Their understanding of both Eastern and Western storytelling traditions helped us create content with truly global appeal.\"",
                    "\"与和谐动画工作室合作为我们打开了以前无法进入的西方市场大门。他们对东西方讲故事传统的理解帮助我们创造了真正具有全球吸引力的内容。\"")}
                </p>
                <div>
                  <p className="font-bold">{t("Liu Mei", "刘美")}</p>
                  <p>{t("CEO, Eastern Star Animation Studio", "首席执行官，东方星动画工作室")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
