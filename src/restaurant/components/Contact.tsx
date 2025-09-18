import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#c79810' }}>Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us for an authentic Indian dining experience or get in touch for reservations and inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 mx-auto mb-4" style={{ color: '#c79810' }} />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-sm text-muted-foreground">
                123 Main Street<br />
                Orlando, FL 32801
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 mx-auto mb-4" style={{ color: '#c79810' }} />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">
                <a href="tel:407-203-8552" className="hover:underline">
                  (407) 203-8552
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 mx-auto mb-4" style={{ color: '#c79810' }} />
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-sm text-muted-foreground">
                Mon - Sun<br />
                11:00 AM - 10:00 PM
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 mx-auto mb-4" style={{ color: '#c79810' }} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">
                info@seasonsofindia.com
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="text-white text-lg px-8 py-4"
            style={{ backgroundColor: '#c79810' }}
          >
            <a
              href="tel:407-203-8552"
            >
              Call for Reservations
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};