import { MapPin, Phone, Smartphone, Mail  } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="bg-restaurant-dark text-restaurant-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="/assets/logo.png"
              alt="Seasons of India"
              className="h-16 mb-4"
            />
            <p className="text-sm text-restaurant-light/80">
              Experience the authentic flavors of India with our seasonal specialties and traditional recipes.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#c79810' }}>Contact Info</h3>
            {/* Layout: each row is a flex container so the icon and the text sit on the same line */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-restaurant-primary mt-1" aria-hidden="true" />
                <p className="leading-tight"><a href="https://www.google.com/maps/place/Seasons+of+India+-+Indian+Restaurant/@28.463272,-81.3984028,17z/data=!4m6!3m5!1s0x88e77dd4c4dbcd53:0x671e40103676809b!8m2!3d28.4632247!4d-81.3957101!16s%2Fg%2F11xds6dv4y?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" className="hover:underline" target="_blank">7085 S Orange Blossom Trail, Orlando, FL 32809</a></p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-restaurant-primary" aria-hidden="true" />
                <p className="leading-tight"><a href="tel:407-203-8552" className="hover:underline">(407) 203-8552</a></p>
              </div>

              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-restaurant-primary" aria-hidden="true" />
                <p className="leading-tight"><a href="tel:689-242-4441" className="hover:underline">(689) 242-4441</a></p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-restaurant-primary" aria-hidden="true" />
                <p className="leading-tight"><a href="mailto:seasonsofindiaorlando@gmail.com" className="hover:underline">seasonsofindiaorlando@gmail.com</a></p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#c79810' }}>Hours</h3>
            <div className="space-y-2 text-sm">
              <p>Monday - Sunday</p>
              <p>11:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-restaurant-light/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Seasons of India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
