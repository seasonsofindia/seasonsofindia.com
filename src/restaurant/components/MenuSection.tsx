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
  UtensilsCrossed,
  Salad,
  ChefHat
} from "lucide-react";

const menuCategories = [
  { id: "chefSpecial", label: "Chef Special", icon: ChefHat},
  { id: "thali", label: "Thali", icon: UtensilsCrossed },
  { id: "soups", label: "Soups & Drinks", icon: Coffee },
  { id: "lightfood", label: "Light Food", icon: Salad },
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
      description: "Choose any 2 curries and a soup, 1 butter naan, rice, raita, pickle, samosa, salad, chutney, and dessert of the day. Served in brass plate and bowls.",
      subcategory: "Traditional",
      tags: ["Popular", "Complete Meal"]
    },
    {
      name: "Modern Thali",
      price: "20", 
      description: "Choose 2 curries, soup, 1 naan, rice, raita, pickle, samosa, salad, chutney, and dessert of the day. Served in a plate with spoons and forks.",
      subcategory: "Modern",
      tags: ["Complete Meal", "Western Style"]
    }
  ],
  soups: [
    {
      name: "Manchow Soup",
      price: "5",
      description: "Noodles crisp in broth so hot, garlic, ginger, soy, and spice hit the spot.",
      subcategory: "Soups",
      tags: ["Spicy", "Indo-Chinese"]
    },
    {
      name: "Mulligatawny Lentil Soup", 
      price: "5",
      description: "Lentils, veggies and spice blend, garlic, turmeric, and cumin send.",
      subcategory: "Soups",
      tags: ["Vegetarian", "Vegan"]
    },
    {
      name: "Cream of Tomato",
      price: "5",
      description: "Tomatoes blend with cream so smooth, ginger, garlic, and spices groove.",
      subcategory: "Soups",
      tags: ["Creamy", "Vegetarian"]
    },
    {
      name: "Mango Lassi",
      price: "7", 
      description: "A creamy, mango-flavored refreshing yogurt drink.",
      subcategory: "Beverages",
      tags: ["Cold", "Fruit", "Popular"]
    },
    {
      name: "Lassi (Sweet/Salt)",
      price: "6",
      description: "A creamy, refreshing yogurt drink, with a choice of delicate salted or sweet.",
      subcategory: "Beverages",
      tags: ["Cold", "Fresh"]
    },
    {
      name: "Fresh Lime Soda (Sweet/Salt)",
      price: "6",
      description: "A refreshing blend of fresh lime juice, sparkling water, and a touch of sweetness or salt.",
      subcategory: "Beverages",
      tags: ["Cold", "Fresh"]
    },
    {
      name: "Fountain Soda",
      price: "3",
      description: "Choice of Fountain Soda (Refillable).",
      subcategory: "Beverages",
      tags: ["Refillable", "Cold"]
    },
    {
      name: "Fruit Juice (Mango/Passion Fruit)",
      price: "5",
      description: "Fresh juice made in house with a choice of Mango or Passion Fruit.",
      subcategory: "Beverages",
      tags: ["Fresh", "Cold"]
    }
  ],
  lightfood: [
    {
      name: "Pani Puri (6pcs)",
      price: "",
      description: "Puffed crispy ball with potatoes, peas, tamarind, mint, and spice water dance with ease.",
      subcategory: "Chaat/ Street Food",
      tags: ["Street Food", "Popular", "Vegan"]
    },
    {
      name: "Delhi Samosa Chaat",
      price: "",
      description: "Crispy, spicy delight, drenched in chutneys, a flavor-filled bite.",
      subcategory: "Chaat/ Street Food",
      tags: ["Street Food", "Popular", "Vegetarian"]
    },
    {
      name: "Mumbai Vada Pav",
      price: "",
      description: "Spiced potato, green chili’s heat, Mumbai’s vada pav—street food elite.",
      subcategory: "Chaat/ Street Food",
      tags: ["Street Food", "Popular", "Vegan"]
    },
    {
      name: "Uttar se Palak Chaat",
      price: "",
      description: "Crisp spinach leaves, golden and fried, Topped with yogurt, chutney, and sprinkled spices, a flavorful delight.",
      subcategory: "Chaat/ Street Food",
      tags: ["Street Food", "Popular", "Vegetarian"]
    },
    {
      name: "Kaarakhaana Pav Bhaji",
      price: "",
      description: "Soft buttered rolls with spiced veggie blend, A divine treat your soul will commend.",
      subcategory: "Chaat/ Street Food",
      tags: ["Street Food", "Popular", "Vegan"]
    },
    {
      name: "Rajasthani Katori Chaat",
      price: "",
      description: "Crispy potato bowl with fillings divine, Chickpeas, yogurt, and chutneys combined",
      subcategory: "Chaat/ Street Food",
      tags: ["Street Food", "Popular", "Vegetarian"]
    },
    {
      name: "Idli (3Pcs) (Plain/Ghee)",
      price: "9",
      description: "Rice and black lentils, soaked just right, ground to a paste, smooth and light, fermented to fluff, soft and warm, steamed to perfection, has a delicious charm.",
      subcategory: "South Indian",
      tags: ["Popular", "Vegan"]
    },
    {
      name: "Delhi Samosa Chaat",
      price: "",
      description: "Crispy, spicy delight, drenched in chutneys, a flavor-filled bite.",
      subcategory: "Chaat/ Street Food",
      tags: ["Street Food", "Popular", "Vegetarian"]
    },
    {
      name: "Mumbai Vada Pav",
      price: "",
      description: "Spiced potato, green chili’s heat, Mumbai’s vada pav—street food elite.",
      subcategory: "Chaat/ Street Food",
      tags: ["Street Food", "Popular", "Vegan"]
    },
    {
      name: "Uttar se Palak Chaat",
      price: "",
      description: "Crisp spinach leaves, golden and fried, Topped with yogurt, chutney, and sprinkled spices, a flavorful delight.",
      subcategory: "Chaat/ Street Food",
      tags: ["Street Food", "Popular", "Vegetarian"]
    },
    {
      name: "Kaarakhaana Pav Bhaji",
      price: "",
      description: "Soft buttered rolls with spiced veggie blend, A divine treat your soul will commend.",
      subcategory: "Chaat/ Street Food",
      tags: ["Street Food", "Popular", "Vegan"]
    },
    {
      name: "Rajasthani Katori Chaat",
      price: "",
      description: "Crispy potato bowl with fillings divine, Chickpeas, yogurt, and chutneys combined",
      subcategory: "Chaat/ Street Food",
      tags: ["Street Food", "Popular", "Vegetarian"]
    }
  ],
  appetizers: [    
    {
      name: "Vegetable Samosa (2pcs)",
      price: "7",
      description: "Golden samosa, filled with warmth and spice. A delicious treat in every bite.",
      subcategory: "Vegetarian Appetizers",
      tags: ["Fried", "Popular", "Vegetarian"]
    },
    {
      name: "Chicken Tikka",
      price: "15",
      description: "Juicy chicken tikka, grilled just right. Spiced to perfection in every bite.",
      subcategory: "Tandoori Appetizers",
      tags: ["Chicken", "Grilled", "Popular"]
    },
    {
      name: "Paneer Tikka",
      price: "18",
      description: "Indian cottage cheese, grilled with spices' embrace. Tender, flavorful in every taste.",
      subcategory: "Tandoori Appetizers",
      tags: ["Vegetarian", "Grilled"]
    },
    {
      name: "Tandoori Shrimp",
      price: "20",
      description: "Tender shrimp, spiced and char-grilled with care. In a clay oven's embrace, a taste beyond compare.",
      subcategory: "Tandoori Appetizers",
      tags: ["Shrimp", "Grilled", "Premium"]
    },
    {
      name: "Canteen 65 (Gobi/Paneer/Chicken)",
      price: "15",
      description: "Deep-fried in spicy batter, a crispy delight. Tossed in tangy sauce, creamy and bright. Contains Dairy.",
      subcategory: "Indo-Chinese Appetizers",
      tags: ["Crispy", "Choice", "Spicy"]
    },
    {
      name: "Asian Chilli (Paneer/Chicken)",
      price: "15",
      description: "Crispy Paneer or Chicken, sizzled just right. Tossed with onions, bell peppers in fiery chili bite.",
      subcategory: "Indo-Chinese Appetizers",
      tags: ["Spicy", "Choice", "Crispy"]
    },
    {
      name: "Manchurian (Gobi/Paneer/Chicken)",
      price: "15",
      description: "Golden-fried Cauliflower/Paneer/Chicken. Tossed in bold garlic-ginger Manchurian magic.",
      subcategory: "Indo-Chinese Appetizers",
      tags: ["Choice", "Garlic-Ginger", "Fried"]
    },
    {
      name: "Drums of Heaven (6pcs)",
      price: "12",
      description: "Crispy wings coated in our signature sauce. A savory treat with every bite, full of gloss.",
      subcategory: "Indo-Chinese Appetizers",
      tags: ["Wings", "Signature", "Crispy"]
    }
  ],
  entrees: [
    {
      name: "Panchmel Dal",
      price: "16",
      description: "A classic Rajasthani dish of five lentils, slow-cooked with aromatic spices like cumin, turmeric, and garam masala.",
      subcategory: "Vegetarian",
      tags: ["Lentils", "Traditional", "Rajasthani"]
    },
    {
      name: "Dal Bukhara",
      price: "16",
      description: "A creamy, smoky Punjabi lentil dish made with slow-cooked black lentils, butter, cream, and aromatic spices for a rich, flavorful experience.",
      subcategory: "Vegetarian",
      tags: ["Creamy", "Punjabi", "Rich"]
    },
    {
      name: "The Buttery Chicken",
      price: "21",
      description: "Tender chicken cooked in a rich tomato-based sauce, enriched with butter and cream, flavored with garam masala, turmeric, and cumin.",
      subcategory: "Non-Vegetarian",
      tags: ["Chicken", "Creamy", "Popular"]
    },
    {
      name: "Paneer Butter Masala",
      price: "18",
      description: "Soft paneer cubes in a rich, creamy tomato-based sauce with butter and cream.",
      subcategory: "Vegetarian",
      tags: ["Paneer", "Creamy", "Popular"]
    },
    {
      name: "Chettinad Experience", 
      price: "19+",
      description: "A flavorful dish from Chettinad, renowned for its bold, aromatic spices. Made with fennel, star anise, black pepper, curry leaves and your choice of protein.",
      subcategory: "Regional",
      tags: ["Spicy", "Choice", "Chettinad"]
    }
  ],
  ricenoodles: [
    {
      name: "Hyderabadi Chicken Dum Biryani",
      price: "19",
      description: "A regal feast of aromatic basmati rice, tender chicken, and exotic spices, slow-cooked to perfection.",
      subcategory: "Biryani",
      tags: ["Chicken", "Dum", "Popular"]
    },
    {
      name: "Vegetable Biryani",
      price: "18",
      description: "A regal dish that combines colorful vegetables, creamy yogurt masala, aromatic spices, and fluffy basmati rice.",
      subcategory: "Biryani",
      tags: ["Vegetarian", "Regal"]
    },
    {
      name: "Jeera Rice",
      price: "9", 
      description: "Fragrant basmati rice delicately infused with the earthy warmth of cumin seeds.",
      subcategory: "Rice",
      tags: ["Cumin", "Aromatic"]
    },
    {
      name: "Hakka Noodles",
      price: "15+",
      description: "Stir-fried noodles with fresh vegetables, soy sauce, and your choice of protein for a perfect Indo-Chinese experience.",
      subcategory: "Noodles",
      tags: ["Choice", "Indo-Chinese"]
    }
  ],
  naan: [
    {
      name: "Butter Naan",
      price: "4",
      description: "Soft and fluffy traditional Indian bread brushed with butter.",
      subcategory: "Naan",
      tags: ["Bread", "Butter"]
    },
    {
      name: "Garlic Naan",
      price: "5",
      description: "Aromatic naan bread topped with fresh garlic and cilantro.",
      subcategory: "Naan",
      tags: ["Bread", "Garlic", "Popular"]
    },
    {
      name: "Dosa (Plain/Onion/Masala/Cheese Masala/Ghee)",
      price: "12",
      description: "Rice and lentils, soaked and ground, fermented batter, rising unbound, dosa crisps, golden and browned. Served with sambar and chutney, flavor unbound.",
      subcategory: "South Indian",
      tags: ["Crispy", "Choice", "Traditional"]
    },
    {
      name: "Spring Dosa",
      price: "13",
      description: "Spring dosa, crispy and light, stuffed with veggies, a flavorful bite.",
      subcategory: "South Indian",
      tags: ["Crispy", "Vegetarian"]
    }
  ],
  desserts: [
    {
      name: "Gulab Jamun (2pcs)",
      price: "6",
      description: "Soft milk dumplings soaked in fragrant sugar syrup.",
      subcategory: "Traditional",
      tags: ["Sweet", "Popular"]
    },
    {
      name: "Kulfi",
      price: "5",
      description: "Traditional Indian ice cream with cardamom and pistachios.",
      subcategory: "Traditional", 
      tags: ["Cold", "Nuts"]
    },
    {
      name: "Ras Malai (2pcs)",
      price: "7",
      description: "Soft cheese dumplings in sweet, thickened milk with cardamom.",
      subcategory: "Traditional",
      tags: ["Sweet", "Creamy"]
    }
  ],
  veganjain: [
    {
      name: "Vegan Dal Tadka",
      price: "15",
      description: "Yellow lentils tempered with cumin, mustard seeds, and fresh herbs. Completely plant-based.",
      subcategory: "Vegan",
      tags: ["Vegan", "Lentils"]
    },
    {
      name: "Jain Aloo Gobi",
      price: "16",
      description: "Classic potato and cauliflower curry prepared without onion and garlic.",
      subcategory: "Jain",
      tags: ["Jain", "No Onion", "No Garlic"]
    },
    {
      name: "Vegan Biryani",
      price: "17",
      description: "Aromatic basmati rice with mixed vegetables and plant-based ingredients.",
      subcategory: "Vegan",
      tags: ["Vegan", "Rice"]
    }
  ]
};

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("thali");

  return (
    // Reduced vertical padding to tighten spacing with adjacent sections
    // Keep top spacing but reduce bottom spacing to bring Contact section closer
    <section id="menu" className="pt-12 pb-6 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with contact info */}
        <div className="text-center mb-8">
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
          <TabsList className="items-center justify-center rounded-md text-muted-foreground grid grid-cols-4 lg:grid-cols-10 mb-4 h-auto p-1 bg-gray-100">
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

          {/**
           * Small contextual message area. Shows different messages depending on the
           * currently selected tab (activeTab). This sits between the tab list and
           * the tab content so it remains visible while switching categories.
           */}
          {/* Only show contextual messages for tabs other than desserts/thali/chefSpecial */}
          {!["desserts", "thali", "chefSpecial"].includes(activeTab) && (
            <div className="mx-auto max-w-3xl mb-6">
              {activeTab === "soups" ? (
                <div className="rounded-md bg-amber-50 border border-amber-200 p-3 text-amber-800 text-center text-sm">
                  Beer and Wine Selection available.
                </div>
              ) : (
                <div className="rounded-md bg-slate-50 border border-slate-200 p-3 text-slate-700 text-center text-sm">
                  Please specify level of spiciness: Mild🌶️ Medium🌶️🌶️ Hot🌶️🌶️🌶️ Extra Hot🌶️🌶️🌶️🌶️
                  </div>
              )}
            </div>
          )}

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                        <p className="text-sm font-medium text-restaurant-primary">
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