
import { Quote } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Harmony Motion Studios</h1>
            <p className="text-xl">
              We're on a mission to unite creative talent across continents, 
              bringing Eastern and Western animation perspectives together.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-harmony-blue">Our Story</h2>
              <p className="mb-4">
                Founded in La Fortuna, Costa Rica, Harmony Motion Studios was born from a passion for 
                storytelling and a vision of global creative collaboration. Our founder, having experienced 
                the rich creative potential of both Eastern and Western animation traditions, recognized 
                an opportunity to bridge these worlds.
              </p>
              <p className="mb-4">
                We believe that when diverse perspectives unite, extraordinary stories emerge. Our journey 
                began with a simple goal: to create a platform where talented creators from different cultural 
                backgrounds could collaborate seamlessly, producing animation that resonates with global audiences.
              </p>
              <p>
                Today, we focus on building strategic partnerships between Western animation studios and 
                their counterparts in China and across Asia, facilitating collaborations that honor the 
                unique strengths of each tradition while creating something entirely new.
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
              <h2 className="text-3xl font-bold mb-2 text-harmony-blue">Our Vision & Mission</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-harmony-blue">Vision</h3>
                <p>
                  To become the premier bridge between Eastern and Western animation industries, 
                  fostering collaborations that redefine storytelling through animation and create 
                  content that resonates with global audiences while honoring diverse cultural perspectives.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-harmony-blue">Mission</h3>
                <p>
                  To facilitate meaningful partnerships between animation studios across continents, 
                  provide expert cultural consulting, and develop stories that transcend boundaries—creating 
                  a new standard for international creative collaboration in the animation industry.
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
            <h2 className="text-3xl font-bold mb-4 text-harmony-blue">Our Leadership</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Behind Harmony Motion Studios is a team of passionate storytellers and industry experts 
              dedicated to building bridges between animation cultures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-harmony-light p-6 rounded-lg text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1">Jane Doe</h3>
              <p className="text-harmony-blue mb-4">Founder & Creative Director</p>
              <p className="text-sm">
                With over 15 years of experience as a writer and producer in animation, 
                Jane brings a wealth of industry knowledge and a passion for cross-cultural storytelling.
              </p>
            </div>
            <div className="bg-harmony-light p-6 rounded-lg text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1">John Smith</h3>
              <p className="text-harmony-blue mb-4">Head of International Partnerships</p>
              <p className="text-sm">
                John specializes in building bridges between Western studios and partners in China, 
                with extensive experience navigating the complexities of international collaboration.
              </p>
            </div>
            <div className="bg-harmony-light p-6 rounded-lg text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1">Wei Zhang</h3>
              <p className="text-harmony-blue mb-4">Cultural Consultant</p>
              <p className="text-sm">
                With deep connections to China's animation industry, Wei ensures authentic cultural 
                representation in all projects and facilitates smooth communication between partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Partners Say</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Don't just take our word for it—hear from the studios and creators who have 
              collaborated with us on international projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-8 rounded-lg relative">
              <Quote className="absolute top-4 left-4 opacity-20 h-12 w-12" />
              <div className="relative z-10">
                <p className="mb-6 italic">
                  "Harmony Motion Studios bridged the gap between our studio in Los Angeles and our partners 
                  in Shanghai. Their cultural expertise made all the difference in creating a smooth, 
                  productive collaboration."
                </p>
                <div>
                  <p className="font-bold">Michael Chen</p>
                  <p>Creative Director, Westcoast Animation</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-lg relative">
              <Quote className="absolute top-4 left-4 opacity-20 h-12 w-12" />
              <div className="relative z-10">
                <p className="mb-6 italic">
                  "Working with Harmony Motion Studios opened doors to Western markets we couldn't access before. 
                  Their understanding of both Eastern and Western storytelling traditions helped us create 
                  content with truly global appeal."
                </p>
                <div>
                  <p className="font-bold">Liu Mei</p>
                  <p>CEO, Eastern Star Animation Studio</p>
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
