import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { menuCategories, menuItems, MenuItem } from "../data/menuData";

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("thali");
  const currentItems = menuItems[activeCategory] || [];

  return (
    <section id="menu" className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 lg:mb-12">
          <p className="text-base lg:text-lg mb-4" style={{ color: '#c79810' }}>
            Please call <a href="tel:407-203-8552" className="underline font-semibold hover:opacity-80 transition-opacity" aria-label="Call Seasons of India for reservations">(407) 203-8552</a> for Reservations
          </p>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4" style={{ color: '#c79810' }}>
            Authentic Indian Food Menu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the rich flavors of India with our carefully crafted dishes using traditional spices and fresh ingredients.
          </p>
        </header>

        {/* Menu Category Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8 lg:mb-12" role="tablist" aria-label="Menu categories">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`menu-panel-${category.id}`}
              className={`flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-3 rounded-lg transition-all duration-300 font-medium text-sm lg:text-base ${
                activeCategory === category.id 
                  ? 'shadow-lg transform scale-105' 
                  : 'hover:bg-gray-100 hover:shadow-md'
              }`}
              style={{
                backgroundColor: activeCategory === category.id ? '#c79810' : 'white',
                color: activeCategory === category.id ? 'white' : '#374151'
              }}
            >
              <span className="text-lg lg:text-xl" role="img" aria-hidden="true">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </nav>

        {/* Menu Items Grid */}
        <main 
          id={`menu-panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto"
        >
          {currentItems.map((item: MenuItem, index: number) => (
            <article key={index} className="bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden">
              <div className="p-4 lg:p-6">
                <header className="flex justify-between items-start mb-3">
                  <div className="flex-1 pr-4">
                    <h2 className="font-bold text-base lg:text-lg text-gray-900 mb-2 leading-tight">
                      {item.name}
                    </h2>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-2" role="list" aria-label="Dish tags">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          role="listitem"
                          className="px-2 py-1 text-xs rounded-full text-white font-medium"
                          style={{ backgroundColor: '#c79810' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span className="font-bold text-lg lg:text-xl" style={{ color: '#c79810' }}>
                      {item.price}
                    </span>
                  </div>
                </header>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-2">
                  {item.description}
                </p>
                <footer className="text-xs text-gray-500 font-medium">
                  Category: {item.subcategory}
                </footer>
              </div>
            </article>
          ))}
        </main>

        {/* Call to Action */}
        <footer className="text-center mt-8 lg:mt-12">
          <a
            href="https://seasonsofindia.square.site/?shipping=true#YVGE5YBK5UQJYSA5ZASSZTLS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-white font-bold text-base lg:text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#c79810' }}
            aria-label="Order food online from Seasons of India"
          >
            Order Online Now
          </a>
        </footer>
      </div>
    </section>
  );
};