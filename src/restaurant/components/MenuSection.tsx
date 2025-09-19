import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Utensils, 
  Soup, 
  Coffee,
  EggFried, 
  Wheat,
  Dessert, 
  Vegan ,
  UtensilsCrossed
} from "lucide-react";

const menuCategories = [
  { id: "thali", label: "Thali", icon: UtensilsCrossed },
  { id: "soups", label: "Soups & Drinks", icon: Coffee },
  { id: "appetizers", label: "Appetizers", icon: Utensils },
  { id: "entrees", label: "Entrées", icon: Soup },
  { id: "ricenoodles", label: "Rice & Noodles", icon: Wheat },
  { id: "naan", label: "Naans & Dosa", icon: EggFried },
  { id: "desserts", label: "Desserts", icon: Dessert },
  { id: "veganjain", label: "Vegan/Jain", icon: Vegan  }
];

// Complete menu items extracted from legacy site
const menuItems = {
  thali: [
    {
      name: "Traditional Thali",
      price: "20",
      description: "Choose any 2 curries and a soup, 1 butter naan, rice, raita, pickle, samosa, salad, chutney, and dessert of the day Served in Brass plate and bowls",
      subcategory: "Traditional",
      tags: ["Popular", "Complete Meal"]
    },
    {
      name: "Modern Thali",
      price: "20", 
      description: "Choose 2 curries, soup, 1 naan, rice, raita, pickle, samosa, salad, chutney, and Dessert of the day Served in a Plate with Spoons and Forks",
      subcategory: "Modern",
      tags: ["Complete Meal", "Western Style"]
    }
  ],
  soups: [
    {
      name: "Manchow soup",
      price: "5",
      description: "Noodles crisp in broth so hot, garlic, ginger, soy, and spice hit the spot",
      subcategory: "Asian Fusion",
      tags: ["Spicy", "Indo-Chinese"]
    },
    {
      name: "Mulligatawny Lentil Soup", 
      price: "5",
      description: "A traditional lentil soup with aromatic spices, coconut milk, and fresh herbs",
      subcategory: "Traditional",
      tags: ["Vegetarian", "Classic"]
    }
  ],
  appetizers: [
    {
      name: "Vegetable Samosa (2pcs)",
      price: "7",
      description: "Golden samosa, filled with warmth and spice, A delicious treat in every bite.",
      subcategory: "Vegetarian",
      tags: ["Fried", "Popular"]
    }
  ],
  entrees: [
    {
      name: "Dal Makhani",
      price: "17",
      description: "A rich and creamy lentil dish slow-cooked with butter, cream, and aromatic spices.",
      subcategory: "Traditional",
      tags: ["Vegetarian", "Creamy", "Popular"]
    }
  ],
  ricenoodles: [
    {
      name: "Steamed Basmati Rice",
      price: "5",
      description: "Perfectly steamed long-grain basmati rice",
      subcategory: "Basic",
      tags: ["Plain", "Side"]
    }
  ],
  naan: [
    {
      name: "Butter Naan",
      price: "4",
      description: "Soft and fluffy traditional Indian bread brushed with butter",
      subcategory: "Traditional",
      tags: ["Bread", "Butter"]
    }
  ],
  desserts: [
    {
      name: "Gulab Jamun",
      price: "7",
      description: "Soft milk dumplings soaked in cardamom-infused sugar syrup",
      subcategory: "Traditional",
      tags: ["Sweet", "Popular"]
    }
  ],
  veganjain: [
    {
      name: "Vegan Dal Tadka",
      price: "16",
      description: "Yellow lentils tempered with cumin, mustard seeds, and fresh herbs (no dairy)",
      subcategory: "Vegan",
      tags: ["Vegan", "Jain", "Light"]
    }
  ]
};

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("thali");

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with contact info */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <a 
              href="tel:407-203-8552" 
              className="text-lg font-semibold hover:underline text-restaurant-primary"
            >
              📞 Call: (407) 203-8552
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a 
              href="https://seasonsofindia.square.site/?shipping=true#YVGE5YBK5UQJYSA5ZASSZTLS"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-lg font-semibold hover:underline text-restaurant-primary"
            >
              Order Online
            </a>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-restaurant-primary">Our Menu</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our authentic Indian cuisine, crafted with traditional recipes and the finest ingredients.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="items-center justify-center rounded-md text-muted-foreground grid grid-cols-4 lg:grid-cols-8 mb-8 h-auto p-1 bg-gray-100">
            {menuCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-restaurant-primary data-[state=active]:text-white"
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-xs lg:text-sm">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {menuItems[category.id]?.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg leading-tight flex-1 mr-2">
                          {item.name}
                        </h3>
                        <span className="font-bold text-xl whitespace-nowrap text-restaurant-primary">
                          {item.price}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed flex-grow">
                        {item.description}
                      </p>
                      
                      <div className="space-y-2 mt-auto">
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="inline-block bg-restaurant-light text-restaurant-primary text-xs px-2 py-1 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>                        
                        <p className="text-xs font-medium text-restaurant-primary">
                          {item.subcategory}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>      
      </div>
    </section>
  );
};