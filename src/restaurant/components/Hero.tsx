import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    // Reduced min-height and top padding to tighten gap under header
    <section id="home" className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url('/assets/bg-hero.jpg')",
        }}
      />
      
  <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Enjoy Our<br />
              <span style={{ color: '#c79810ff' }}>Delicious Meal</span>
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-lg animate-fade-in">
              We offer a culinary journey through the vibrant spices and seasonal 
              specialties of India, delivering a perfect blend of traditional and 
              modern Indian cuisine in a warm and inviting atmosphere. Join us for 
              a taste of India, where every season is a feast for the senses.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-8 py-4 animate-fade-in"
              style={{ backgroundColor: '#c79810ff', color: 'white' }}
            >
              <a
                href="https://seasonsofindia.square.site/?shipping=true#YVGE5YBK5UQJYSA5ZASSZTLS"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online
              </a>
            </Button>
          </div>
          
          {/* Rotating Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/assets/hero.png"
                alt="Delicious Indian Food"
                className="w-full max-w-md lg:max-w-lg animate-rotate-slow filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};