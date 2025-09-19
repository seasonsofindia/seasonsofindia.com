import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-semibold mb-2">We Specialize in Indian, Mughalai, & Indo Chinese Cuisines.</h3>
          <h3 className="font-semibold mb-2">We do not add MSG to our food.</h3>
          <h3 className="font-semibold mb-2">We serve Halal Meat.</h3>
          <h3 className="font-semibold mb-2">Please be advised that food prepared here may contain these ingredients: Milk, Egg, Wheat, Nuts and Fish.</h3>
          <h3 className="font-semibold mb-2">Entrée is served with a Side of Rice.</h3>
          <h3 className="font-semibold mb-2">Pricing and availability subject to change.</h3>
          <h3 className="font-semibold mb-2">Some menu items can be made Vegan and Gluten Free.</h3>
          <h3 className="font-semibold mb-2">An 18% gratuity will be added to parties of 6 or more.</h3>

          <h2 className="text-4xl font-bold mb-4 text-restaurant-primary">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us for an authentic Indian dining experience or get in touch for reservations and inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-restaurant-primary" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-sm text-muted-foreground">
                7085 S Orange Blossom Trail<br />
                Orlando, FL 32805
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 mx-auto mb-4 text-restaurant-primary" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">
                <a href="tel:407-203-8552" className="hover:underline">
                  (407) 203-8552
                </a> <br />
                <a href="tel:689-242-4441" className="hover:underline">
                  (689) 242-4441
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 mx-auto mb-4 text-restaurant-primary" />
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-sm text-muted-foreground">
                Mon - Sun<br />
                11:00 AM - 10:00 PM
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 mx-auto mb-4 text-restaurant-primary" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">
                seasonsofindia17@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="text-white text-lg px-8 py-4"
          >
            <a
              href="tel:407-203-8552"
            >
              Call for Reservations
            </a>
          </Button>
          </div>
        <span className="block h-1"></span> {/* Spacer */}
          <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-restaurant-primary hover:bg-restaurant-primary/90 text-white text-lg px-8 py-4">
            <a href="tel:407-203-8552" >
              Call for Catering            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};