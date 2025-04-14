
import { Link } from "react-router-dom";
import { ArrowRight, Star, Palette, Wand2, Lightbulb, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-br from-harmony-blue to-harmony-purple flex items-center">
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bridging Cultures, Crafting Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Harmony Motion Studios connects Western and Eastern creative talent in the animation industry, 
              creating compelling stories that transcend cultural boundaries.
            </p>
            <Button asChild size="lg" className="pixar-button bg-harmony-teal group">
              <Link to="/partner">
                Partner With Us 
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
                Connecting East and West
              </h2>
              <p className="text-lg mb-6">
                At Harmony Motion Studios, we believe that the most compelling stories emerge when diverse 
                perspectives unite. Based in beautiful La Fortuna, Costa Rica, we've created a unique hub 
                for creative collaboration between Western and Eastern animation talents.
              </p>
              <Button asChild variant="outline" className="border-harmony-blue text-harmony-blue hover:bg-harmony-blue/10 rounded-full">
                <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-harmony-blue/20 to-transparent rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1560807707-8cc77767d783" 
                alt="Animated characters" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-harmony-blue">Our Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We offer a comprehensive suite of services to facilitate successful collaborations 
              between Western and Eastern animation studios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Story Development" 
              description="Creating narratives that resonate across cultural boundaries."
              icon={<Palette className="h-8 w-8 text-harmony-teal" />}
              color="bg-harmony-teal/10"
            />
            
            <ServiceCard 
              title="Animation Production" 
              description="Managing the animation process from concept to completion."
              icon={<Wand2 className="h-8 w-8 text-harmony-purple" />}
              color="bg-harmony-purple/10"
            />
            
            <ServiceCard 
              title="Cultural Consulting" 
              description="Ensuring authentic representation in cross-cultural projects."
              icon={<Lightbulb className="h-8 w-8 text-harmony-gold" />}
              color="bg-harmony-gold/10"
            />
            
            <ServiceCard 
              title="Partnership Management" 
              description="Facilitating successful collaborations between international studios."
              icon={<Star className="h-8 w-8 text-harmony-red" />}
              color="bg-harmony-red/10"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-harmony-blue to-harmony-purple text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our network of creative partners and let's craft compelling stories together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="pixar-button bg-harmony-red">
              <Link to="/partner">Partner With Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceCard = ({ title, description, icon, color }) => {
  return (
    <div className="pixar-card p-6 hover:scale-105 transition-transform duration-300">
      <div className={`${color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link to="/services" className="text-harmony-blue hover:text-harmony-teal flex items-center font-medium">
        Learn More <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default Index;
