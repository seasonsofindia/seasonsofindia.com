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
            <div className="space-y-2 text-sm">
              <p>123 Main Street, Orlando, FL 32801</p>
              <p>Phone: <a href="tel:407-203-8552" className="hover:underline">(407) 203-8552</a></p>
              <p>Email: info@seasonsofindia.com</p>
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
          <p>&copy; 2024 Seasons of India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};