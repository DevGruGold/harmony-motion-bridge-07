
import { CheckCircle, Pen, Film, Globe, Users, BrainCircuit, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl">
              Comprehensive solutions for cross-cultural animation production and international studio collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-harmony-blue">How We Can Help</h2>
            <p className="text-lg">
              At Harmony Motion Studios, we specialize in bridging the gap between Western and Eastern 
              animation industries, with a particular focus on facilitating partnerships with Chinese studios.
              Our comprehensive services are designed to make cross-cultural collaboration seamless and productive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <ServiceCard 
              icon={<Pen className="h-10 w-10" />}
              title="Story Development"
              description="We craft narratives that resonate with both Western and Eastern audiences, balancing cultural nuances while maintaining a compelling storyline."
              points={[
                "Cross-cultural story adaptation",
                "Script development and translation",
                "Character design consulting",
                "Narrative structure optimization"
              ]}
            />

            <ServiceCard 
              icon={<Film className="h-10 w-10" />}
              title="Animation Production"
              description="From concept to completion, we manage the animation production process, ensuring smooth collaboration between international teams."
              points={[
                "Production pipeline management",
                "Quality assurance across cultures",
                "Technical compatibility consulting",
                "Workflow optimization"
              ]}
            />

            <ServiceCard 
              icon={<Globe className="h-10 w-10" />}
              title="Cultural Consulting"
              description="Our experts ensure authentic representation of both Eastern and Western elements in animation projects, preventing cultural missteps."
              points={[
                "Cultural authenticity reviews",
                "Visual and symbolic accuracy",
                "Localization guidance",
                "Audience reception analysis"
              ]}
            />

            <ServiceCard 
              icon={<Users className="h-10 w-10" />}
              title="Partnership Management"
              description="We facilitate productive relationships between international studios, handling communication challenges and business differences."
              points={[
                "Partner matching and introduction",
                "Contract negotiation assistance",
                "Cross-cultural communication",
                "Conflict resolution"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-harmony-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-harmony-blue">Our Collaborative Process</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We've developed a streamlined approach to international animation collaboration, 
              ensuring smooth communication and exceptional results.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-harmony-blue/30 -translate-x-1/2"></div>
              
              <div className="space-y-12">
                <ProcessStep 
                  number={1}
                  title="Discovery"
                  description="We begin by understanding your project goals, target audience, and creative vision."
                  icon={<BrainCircuit />}
                />
                
                <ProcessStep 
                  number={2}
                  title="Partner Matching"
                  description="We identify and introduce you to the ideal Eastern or Western animation partners for your project."
                  icon={<Users />}
                  isReversed={true}
                />
                
                <ProcessStep 
                  number={3}
                  title="Cultural Alignment"
                  description="Our team ensures all creative elements are culturally appropriate and resonant for target audiences."
                  icon={<Globe />}
                />
                
                <ProcessStep 
                  number={4}
                  title="Production & Management"
                  description="We oversee the collaborative process, managing communication and workflow between international teams."
                  icon={<Film />}
                  isReversed={true}
                />
                
                <ProcessStep 
                  number={5}
                  title="Delivery & Beyond"
                  description="We ensure the final product meets all specifications and help plan for future collaborations."
                  icon={<Clock />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-harmony-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Cross-Cultural Animation Journey?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how we can help bring your vision to life through the power of international collaboration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-harmony-red hover:bg-harmony-red/90 text-white">
              <Link to="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceCard = ({ icon, title, description, points }) => {
  return (
    <div className="bg-harmony-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-6 text-harmony-blue">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-6">{description}</p>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-harmony-blue shrink-0 mr-2 mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProcessStep = ({ number, title, description, icon, isReversed = false }) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6`}>
      <div className="md:w-1/2">
        <div className={`flex flex-col ${isReversed ? 'md:items-start' : 'md:items-end'} md:pr-12`}>
          <div className={`bg-white p-6 rounded-lg shadow-md ${isReversed ? 'md:rounded-tr-none' : 'md:rounded-tl-none'}`}>
            <h3 className="text-xl font-bold mb-2 flex items-center text-harmony-blue">
              {title}
            </h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
      
      <div className="md:w-0 flex justify-center relative">
        <div className="bg-harmony-blue h-12 w-12 rounded-full flex items-center justify-center text-white z-10">
          {icon}
        </div>
      </div>
      
      <div className="md:w-1/2"></div>
    </div>
  );
};

export default Services;
