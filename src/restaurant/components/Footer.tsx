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
                <p className="leading-tight"><a href="https://www.google.com/maps/place/Seasons+of+India/@28.5425405,-81.4104685,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77b88433438d7:0xf326c20606a96600!8m2!3d28.5425358!4d-81.4078936!16s%2Fg%2F11t57mxd85?entry=ttu" className="hover:underline" target="_blank">7085 S Orange Blossom Trail, Orlando, FL 32809</a></p>
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
                <p className="leading-tight"><a href="mailto:seasonsofindia17@gmail.com" className="hover:underline">seasonsofindia17@gmail.com</a></p>
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