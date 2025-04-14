
import { ArrowRight, Globe, Users, Sparkles, Handshake, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Partner = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h1>
            <p className="text-xl">
              Join our network of creative studios and be part of the bridge 
              between Western and Eastern animation traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-harmony-blue">Why Partner With Us</h2>
              <p className="mb-6">
                At Harmony Motion Studios, we specialize in creating meaningful connections between 
                Western studios and their Eastern counterparts, with a particular focus on Chinese animation studios.
              </p>
              <p className="mb-6">
                Our deep understanding of both cultures and extensive network of contacts makes us 
                the ideal bridge for your next international animation collaboration.
              </p>
              <p>
                Whether you're a Western studio looking to expand into Asian markets or a Chinese studio 
                seeking Western expertise and distribution, we provide the expertise and connections 
                you need for a successful partnership.
              </p>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0')] h-[400px] bg-cover bg-center rounded-lg shadow-xl"></div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-harmony-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-harmony-blue">Benefits of Partnership</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our partnership program offers numerous advantages for animation studios looking to expand globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <BenefitCard
              icon={<Globe className="h-8 w-8" />}
              title="Global Reach"
              description="Expand your audience beyond your home market and reach viewers across continents."
            />
            <BenefitCard
              icon={<Handshake className="h-8 w-8" />}
              title="Cultural Exchange"
              description="Learn from different animation traditions and incorporate diverse perspectives into your work."
            />
            <BenefitCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Creative Growth"
              description="Develop new styles and techniques through collaboration with international talent."
            />
            <BenefitCard
              icon={<Users className="h-8 w-8" />}
              title="Network Expansion"
              description="Connect with industry professionals from around the world and build lasting relationships."
            />
            <BenefitCard
              icon={<CheckCircle className="h-8 w-8" />}
              title="Quality Assurance"
              description="Benefit from our oversight to ensure cultural authenticity and technical compatibility."
            />
            <BenefitCard
              icon={<ArrowRight className="h-8 w-8" />}
              title="Market Entry"
              description="Gain guided access to new markets with local expertise and established connections."
            />
          </div>
        </div>
      </section>

      {/* Global Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-harmony-blue">Our Global Network</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Harmony Motion Studios has established partnerships with animation studios, distributors, 
              and creative talent across multiple countries, with a special focus on China and the broader Asian market.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-4">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&w=1200&q=80" 
              alt="World Map" 
              className="w-full h-auto rounded-lg opacity-25"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 bg-white/80 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-harmony-blue">Expanding Our Reach</h3>
                <p className="mb-6">
                  Our network currently spans North America, Europe, and East Asia, with 
                  headquarters in Costa Rica serving as our central hub for global operations.
                </p>
                <Button asChild className="bg-harmony-red hover:bg-harmony-red/90 text-white">
                  <Link to="/contact">Join Our Network</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Partnership Process</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Becoming a partner with Harmony Motion Studios is a straightforward process designed 
              to find the perfect match for your creative ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="bg-white/20 h-16 w-16 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Initial Consultation</h3>
              <p>
                We begin with a detailed discussion about your studio, projects, and goals for international collaboration.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="bg-white/20 h-16 w-16 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Partner Matching</h3>
              <p>
                Based on your needs, we identify potential partners from our network who align with your vision and capabilities.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="bg-white/20 h-16 w-16 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration Launch</h3>
              <p>
                We facilitate introductions, help establish communication protocols, and provide ongoing support as your partnership develops.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-harmony-red hover:bg-harmony-red/90 text-white">
              <Link to="/contact">Start the Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
      <div className="text-harmony-blue mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Partner;
