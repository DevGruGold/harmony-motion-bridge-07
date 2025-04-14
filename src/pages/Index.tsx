
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Pen, Users, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen bg-hero-pattern bg-cover bg-center flex items-center">
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bridging Cultures, Crafting Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Harmony Motion Studios connects Western and Eastern creative talent in the animation industry, 
              creating compelling stories that transcend cultural boundaries.
            </p>
            <Button asChild size="lg" className="bg-harmony-red hover:bg-harmony-red/90 text-white text-lg">
              <Link to="/partner">Partner With Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
              <Button asChild variant="outline" className="border-harmony-blue text-harmony-blue hover:bg-harmony-blue/10">
                <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] h-96 bg-cover bg-center rounded-lg shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-harmony-blue">Our Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We offer a comprehensive suite of services to facilitate successful collaborations 
              between Western and Eastern animation studios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-harmony-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-harmony-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Pen className="h-8 w-8 text-harmony-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Story Development</h3>
              <p className="mb-4">Creating narratives that resonate across cultural boundaries.</p>
              <Link to="/services" className="text-harmony-blue hover:text-harmony-gold flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-harmony-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-harmony-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Film className="h-8 w-8 text-harmony-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Animation Production</h3>
              <p className="mb-4">Managing the animation process from concept to completion.</p>
              <Link to="/services" className="text-harmony-blue hover:text-harmony-gold flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-harmony-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-harmony-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-harmony-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cultural Consulting</h3>
              <p className="mb-4">Ensuring authentic representation in cross-cultural projects.</p>
              <Link to="/services" className="text-harmony-blue hover:text-harmony-gold flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-harmony-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-harmony-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-harmony-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Partnership Management</h3>
              <p className="mb-4">Facilitating successful collaborations between international studios.</p>
              <Link to="/services" className="text-harmony-blue hover:text-harmony-gold flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-harmony-blue text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our network of creative partners and let's craft compelling stories together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-harmony-red hover:bg-harmony-red/90">
              <Link to="/partner">Partner With Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
