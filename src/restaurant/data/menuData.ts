// Menu data restored to match legacy site exactly
export interface MenuItem {
  name: string;
  price: string;
  description: string;
  subcategory: string;
  tags: string[];
}

export interface MenuCategory {
  id: string;
  label: string;
  icon: string;
}

export const menuCategories: MenuCategory[] = [
  { id: "thali", label: "Thali", icon: "🍽️" },
  { id: "soups", label: "Soups & Drinks", icon: "🥤" },
  { id: "appetizers", label: "Appetizers", icon: "🥗" },
  { id: "entrees", label: "Entrées", icon: "🍛" },
  { id: "ricenoodles", label: "Rice & Noodles", icon: "🍚" },
  { id: "naan", label: "Naans & Dosa", icon: "🫓" },
  { id: "desserts", label: "Desserts", icon: "🍰" },
  { id: "veganjain", label: "Vegan/Jain", icon: "🌱" }
];

export const menuItems: Record<string, MenuItem[]> = {
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
      tags: ["Vegetarian", "Traditional"]
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
      tags: ["Cold", "Choice"]
    },
    {
      name: "Fresh Lime Soda (Sweet/Salt)",
      price: "6",
      description: "A refreshing blend of fresh lime juice, sparkling water, and a touch of sweetness or salt.",
      subcategory: "Beverages",
      tags: ["Refreshing", "Choice"]
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
      tags: ["Fresh", "Choice"]
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