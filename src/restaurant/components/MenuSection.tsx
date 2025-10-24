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
  { id: "naan", label: "Naans", icon: EggFried },
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
      tags: ["Street Food", "Popular", "Vegetarian", "Tiffin"]
    },
    {
      name: "Idli (3Pcs) (Plain/Ghee)",
      price: "9",
      description: "Rice and black lentils, soaked just right, ground to a paste, smooth and light, fermented to fluff, soft and warm, steamed to perfection, has a delicious charm.",
      subcategory: "South Indian",
      tags: ["Popular", "Vegan"]
    },
    {
      name: "Utthapam/ Onion Utthapam",
      price: "12",
      description: "Rice and lentils, ground to a paste, onions, cumin, with spices to taste, uttapam cooks, a breakfast so great.",
      subcategory: "South Indian",
      tags: ["Street Food", "Vegetarian", "Tiffin"]
    },
    {
      name: "Dosa (Plain / Onion / Masala / Cheese Masala / Ghee )",
      price: "12",
      description: "Rice and lentils, soaked and ground, fermented batter, rising unbound, dosa crisps, golden and browned, Served with sambar and chutney, flavor unbound.",
      subcategory: "South Indian",
      tags: ["Street Food", "Popular", "Vegetarian", "Tiffin"]
    },
    {
      name: "Spring Dosa",
      price: "13",
      description: "Spring dosa, crispy and light, stuffed with veggies, a flavorful bite.",
      subcategory: "South Indian",
      tags: ["Street Food", "Vegetarian", "Tiffin"]
    },
    {
      name: "500 MM Dosa",
      price: "16",
      description: "A 500mm giant dosa, crispy and wide, with potatoes, spices, and chutney inside.",
      subcategory: "South Indian",
      tags: ["Street Food", "Popular", "Vegetarian", "Tiffin"]
    },
    {
      name: "Volcano Dosa",
      price: "15",
      description: "Spicy volcano paneer, fiery and bold, hidden in a cone, with flavors untold.",
      subcategory: "South Indian",
      tags: ["Street Food", "Popular", "Vegetarian", "Tiffin"]
    },
    {
      name: "Kal Dosa",
      price: "17",
      description: "Mini thick crepe made with fermented rice and lentil batter served with a curry of your choice.",
      subcategory: "South Indian",
      tags: ["Street Food", "Tiffin"]
    },
    {
      name: "Egg Dosa",
      price: "15",
      description: "Rice and dal, blended with care, Eggs, and spices, sizzling in the air. Egg dosa cooks, a treat so rare. Served with sambar, and chutney, beyond compare.",
      subcategory: "South Indian",
      tags: ["Street Food", "Popular", "Tiffin"]
    }
  ],
  appetizers: [    
    {
      name: "Vegetable Samosa (2pcs)",
      price: "7",
      description: "Golden samosa, filled with warmth and spice. A delicious treat in every bite.",
      subcategory: "Appetizers",
      tags: ["Fried", "Popular", "Vegetarian"]
    },
    {
      name: "Lucknow ke Pakode",
      price: "10",
      description: "Delicate fritters, fried golden brown, Chickpea batter, roasted spices from Lucknow’s town.",
      subcategory: "Appetizers",
      tags: ["Fried", "Popular", "Vegetarian"]
    },
    {
      name: "Imperial Chicken / Paneer",
      price: "15",
      description: "Golden fried Chicken or Paneer, spiced and crisp, Tossed in minty sauce—flavors that lift.",
      subcategory: "Appetizers",
      tags: ["Popular"]
    },
    {
      name: "Southern Chicken Vepudu",
      price: "15",
      description: "Tender chicken, marinated in spices’ embrace, A blend of red chilies, curry leaves, and flavor to trace.",
      subcategory: "Appetizers",
      tags: ["Chicken"]
    },
    {
      name: "Southern Vepudu (Lamb / Goat / Shrimp)",
      price: "18",
      description: "Choice of Lamb, Goat, or Shrimp, simmered with onion, garlic and spice, Red chilies, curry leaves—aromatic and nice.",
      subcategory: "Appetizers",
      tags: ["Popular"]
    },
    {
      name: "Tawa Macchi",
      price: "18",
      description: "Marinated fish, grilled with ginger, garlic, turmeric’s spice, Perfection on the grill—tender and nice.",
      subcategory: "Appetizers",
      tags: ["Popular", "Sea food"]
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
    },
    {
      name: "Paneer tikka / Coriander pesto Paneer Tikka",
      price: "18",
      description: "Indian cottage cheese, grilled with spices’ embrace, Tender, flavorful in every taste.",
      subcategory: "Tandoori Appetizers",
      tags: ["Vegetarian", "Grilled"]
    },
    {
      name: "Malai Cheesy Broccoli",
      price: "18",
      description: "Tender broccoli florets cooked in Tandoor, bathed in a creamy, cheesy sauce to allure.",
      subcategory: "Tandoori Appetizers",
      tags: ["Vegetarian", "Grilled"]
    },
    {
      name: "Lamb Chops",
      price: "25",
      description: "Lamb chops, marinated and seared just right, Tender, juicy, and full of spice.",
      subcategory: "Tandoori Appetizers",
      tags: ["Lamb", "Grilled", "Popular"]
    },
    {
      name: "Chicken Tikka",
      price: "15",
      description: "Juicy chicken tikka, grilled just right, Spiced to perfection in every bite.",
      subcategory: "Tandoori Appetizers",
      tags: ["Chicken", "Grilled", "Popular"]
    },
    {
      name: "Daaru Tandoori Chicken",
      price: "15",
      description: "Tandoor chicken, spiced and grilled just right, Pair it with your favorite alcohol for a perfect bite.",
      subcategory: "Tandoori Appetizers",
      tags: ["Chicken", "Grilled", "Premium"]
    },
    {
      name: "Tandoori Shrimp",
      price: "20",
      description: "Tender shrimp, spiced and char-grilled with care. In a clay oven's embrace, a taste beyond compare.",
      subcategory: "Tandoori Appetizers",
      tags: ["Shrimp", "Grilled", "Premium"]
    },
    {
      name: "Kasuri Methi Jhinga",
      price: "20",
      description: "Fenugreek Shrimp, spiced and bold, Herbs’ embrace, a dish to behold.",
      subcategory: "Tandoori Appetizers",
      tags: ["Sea Food", "Grilled"]
    },
    {
      name: "Tandoori Subzi",
      price: "19",
      description: "Tandoori sabzi, vibrant and charred, Yogurt-spiced, a flavorful art.",
      subcategory: "Tandoori Appetizers",
      tags: ["Vegetarian", "Grilled"]
    }
  ],
  entrees: [
    {
      name: "Panchmel Dal",
      price: "16",
      description: "A classic Rajasthani dish of five lentils, slow-cooked with aromatic spices like cumin, turmeric, and garam masala.",
      subcategory: "Vegetarian",
      tags: ["Lentils", "Traditional", "Vegan"]
    },
    {
      name: "Dal Bukhara",
      price: "16",
      description: "A creamy, smoky Punjabi lentil dish made with slow-cooked black lentils, butter, cream, and aromatic spices for a rich, flavorful experience.",
      subcategory: "Vegetarian",
      tags: ["Creamy", "Punjabi", "Rich"]
    },
    {
      name: "Kaju Malai Methi",
      price: "17",
      description: "A rich, creamy curry blending the nutty sweetness of cashews, the earthy hint of fenugreek, and the smooth richness of cream.",
      subcategory: "Vegetarian",
      tags: ["Cashews", "Nuts", "Popular"]
    },
    {
      name: "Shahi Kofta Masala",
      price: "17",
      description: "Flavorful potato and vegetable dumplings, enveloped in a creamy, velvety tomato-onion gravy. A royal treat infused with warm spices.",
      subcategory: "Vegetarian",
      tags: ["Creamy", "Popular"]
    },
    {
      name: "Buddha’s Delight Handi",
      price: "17",
      description: "A vibrant and flavorful stir-fry of mixed vegetables simmered in a rich and creamy aromatic sauce.",
      subcategory: "Vegetarian",
      tags: ["Creamy", "Popular"]
    },
    {
      name: "Gobi Musallam",
      price: "16",
      description: "A North Indian dish featuring whole cauliflower marinated in spiced yogurt and roasted. Served with a creamy tomato-cashew sauce, enriched with aromatic masalas.",
      subcategory: "Vegetarian",
      tags: ["Cauliflower", "Creamy", "Nuts", "Popular"]
    },
    {
      name: "Bharwa Mirchi ka salan / Bade Mirchi ka Salan",
      price: "16",
      description: "A spicy Hyderabadi dish of stuffed green chilies in a tangy, nutty gravy made with roasted peanuts, sesame seeds, tamarind, and aromatic spices.",
      subcategory: "Vegetarian",
      tags: ["Paneer", "Creamy", "Popular"]
    },
    {
      name: "Garam Dhuni Chana Masala",
      price: "16",
      description: "Chickpeas cooked in a rich and aromatic tomato and spice-based gravy featuring cumin, coriander, turmeric, and garam masala. Vegan-friendly option.",
      subcategory: "Vegetarian",
      tags: ["Chickpeas", "Vegan", "Popular"]
    },
    {
      name: "Paneer Makhani",
      price: "17",
      description: "Cubes of paneer cooked in a luscious Onion tomato-based gravy with a blend of aromatic spices flavored with aromatic spices.",
      subcategory: "Vegetarian",
      tags: ["Paneer", "Creamy", "Popular"]
    },
    {
      name: "Paneer Tikka Masala",
      price: "17",
      description: "Chunks of marinated paneer grilled with Onions and Bell peppers, then simmered in a rich, creamy tomato-based sauce.",
      subcategory: "Vegetarian",
      tags: ["Paneer", "Creamy", "Popular"]
    },
    {
      name: "Palak Paneer",
      price: "17",
      description: "Indian cottage cheese cooked in a creamy spinach sauce, seasoned with spices, resulting in a rich and satisfying flavor.",
      subcategory: "Vegetarian",
      tags: ["Paneer", "Spinach", "Popular"]
    },
    {
      name: "Chicken Kolhapuri",
      price: "20",
      description: "A flavorful Maharashtrian dish with rich, aromatic gravy, Made with bone-in chicken, roasted onions, and tomatoes, Flavored with a spicy blend of unique Kolhapuri masala.",
      subcategory: "Chicken",
      tags: ["Chicken", "Spicy", "Dairy Free", "Popular"]
    },
    {
      name: "Chicken Xacuti",
      price: "20",
      description: "Goan curry made with tender chicken cooked in a rich, spicy blend of roasted coconut, aromatic spices, and tangy tamarind.",
      subcategory: "Chicken",
      tags: ["Chicken", "Dairy Free", "Popular"]
    },
    {
      name: "The Buttery Chicken",
      price: "21",
      description: "Tender chicken cooked in a rich tomato-based sauce, enriched with butter and cream, flavored with garam masala, turmeric, and cumin.",
      subcategory: "Chicken",
      tags: ["Chicken", "Creamy", "Popular"]
    }, 
    {
      name: "Paradise Rogan Josh (Goat/Lamb)",
      price: "21",
      description: "Originating from Kashmir, rich spices unfold with tender lamb or goat slow-cooked in yogurt, ginger, and bold Kashmiri spices.",
      subcategory: "Goat-Lamb",
      tags: ["Goat", "Dairy Free", "Popular"]
    },
    {
      name: "Marwar Laal Maas",
      price: "21",
      description: "Traditional Rajasthani dish known for its bold flavors and rich history, succulent pieces of lamb meat, slow-cooked in a blend of spicy red chili paste, garlic, and aromatic spices.",
      subcategory: "Lamb",
      tags: ["Lamb", "Spicy", "Dairy Free", "Popular"]
    },       
    {
      name: "Lasooni Hara Shrimp", 
      price: "22",
      description: "Soft, tender shrimp expertly flash-fried and coated in a bold, flavorful garlic chili sauce that delivers the perfect balance of heat and savory goodness.",
      subcategory: "Sea Food",
      tags: ["Shrimp", "Popular"]
    },       
    {
      name: "Cheepala Pulusu", 
      price: "22",
      description: "A flavorful Andhra dish with fish marinated in aromatic spices, Simmered in tangy tamarind sauce for a perfect blend of heat and zest.",
      subcategory: "Sea Food",
      tags: ["Fish","Popular"]
    },       
    {
      name: "Laziz Curry", 
      price: "19+",
      description: "Choice of Tender Chicken/Lamb/Goat/Shrimp/Fish simmered. Features a rich, thick sauce made with a blend of spices, herbs, and often tomatoes",
      subcategory: "Non-Vegetarian",
      tags: ["Chicken", "Lamb", "Goat", "Shrimp", "Fish", "Popular"]
    },       
    {
      name: "Angrezi Tikka Masala", 
      price: "20+",
      description: "A classic Indo-British dish with a choice of marinated Chicken/Lamb/Shrimp/Fish in a velvety tomato sauce, infused with warm spices.",
      subcategory: "Non-Vegetarian",
      tags: ["Chicken", "Lamb", "Shrimp", "Fish", "Popular"]
    },       
    {
      name: "Saag Masala", 
      price: "19+",
      description: "A creamy nutritious Indian dish of spinach puree and aromatic spices with a choice of chicken, lamb, goat or shrimp.",
      subcategory: "Non-Vegetarian",
      tags: ["Chicken", "Lamb", "Goat", "Shrimp", "Popular"]
    },       
    {
      name: "The Buttery Masala", 
      price: "19+",
      description: "Choice of Lamb / Shrimp / Fish cooked in a rich tomato-based, enriched with butter and cream, flavored with garam masala, turmeric, and cumin for a luscious, aromatic taste.",
      subcategory: "Non-Vegetarian",
      tags: ["Lamb", "Shrimp","Fish", "Popular"]
    },       
    {
      name: "Chettinad Experience", 
      price: "19+",
      description: "A flavorful dish from Chettinad, renowned for its bold, aromatic spices.Made with fennel, star anise, black pepper, curry leaves and your choice of Chicken/Lamb/Goat/Shrimp.",
      subcategory: "Non-Vegetarian",
      tags: ["Chicken", "Lamb", "Goat", "Shrimp", "Popular"]
    },       
    {
      name: "Mughlai Korma", 
      price: "19+",
      description: "A luxurious Mughal-era dish, slow-cooked with your choice of Chicken/Lamb/Goat/Shrimp. Rich with yogurt, cream, nuts, and fragrant spices give its aromatic and creamy.",
      subcategory: "Non-Vegetarian",
      tags: ["Chicken", "Lamb", "Goat", "Shrimp", "Popular"]
    },       
    {
      name: "Kadai Masala", 
      price: "19+",
      description: "A flavorful Indian dish cooked in a wok-style pan, combining fresh spices, tomatoes, onions, and bell peppers with a choice of tender Chicken/Lamb/Goat/Shrimp. Bold flavors of roasted coriander, red chilies, and tangy gravy create a rich and aromatic experience.",
      subcategory: "Non-Vegetarian",
      tags: ["Chicken", "Lamb", "Goat", "Shrimp", "Popular"]
    },       
    {
      name: "Tangy Vindaloo", 
      price: "19+",
      description: "A robust, flavorful dish with a choice of Tender Chicken/Lamb/Goat/Shrimp, marinated and slow-cooked in a fiery blend of tomatoes, chilies, Potatoes, spices, and a touch of vinegar for tanginess, cooked in Goan Style.",
      subcategory: "Non-Vegetarian",
      tags: ["Chicken", "Lamb", "Goat", "Shrimp", "Popular"]
    }
  ],
  ricenoodles: [
    {
      name: "Steamed Basmati Rice",
      price: "5",
      description: "Fragrant basmati rice, steamed to perfection, with a light and fluffy texture.",
      subcategory: "Rice Items",
      tags: ["Rice"]
    },
    {
      name: "Jeera Rice",
      price: "9",
      description: "Fragrant basmati rice delicately infused with the earthy warmth of cumin seeds, offering a harmonious blend of aroma and flavor.",
      subcategory: "Rice Items",
      tags: ["Rice", "Cumin", "Aromatic"]
    },
    {
      name: "Sambar Rice",
      price: "16",
      description: "Experience the comforting blend of fragrant basmati rice and a robust sambar, flavorful lentil stew bursting with tangy and spicy notes.",
      subcategory: "Rice Items",
      tags: ["Rice", "Lentils", "Popular"]
    },
    {
      name: "Avakaya Annam Pappu",
      price: "16",
      description: "A timeless trio of fragrant rice, tempered dal, and tangy mango pickle, a classic Andhra Pradesh comfort food that has been savored for generations.",
      subcategory: "Rice Items",
      tags: ["Rice", "Lentils", "Popular"]
    },
    {
      name: "Paneer Mirchi Pulao",
      price: "18",
      description: "Aromatic basmati rice paired with spicy green chilies and tender paneer, Cooked to perfection for a harmonious blend of flavors and textures.",
      subcategory: "Rice Items",
      tags: ["Rice", "Paneer", "Spicy"]
    },
    {
      name: "Vegetable / Kaju-Paneer Biryani",
      price: "18",
      description: "A regal dish that combines a vibrant mix of colorful vegetables, creamy yogurt masala, aromatic spices, and fluffy basmati rice, creating a harmonious blend of flavors and textures.",
      subcategory: "Rice Items",
      tags: ["Rice", "Biryani", "Popular"]
    },
    {
      name: "Hyderabadi Chicken dum Biryani",
      price: "19",
      description: "A regal feast of aromatic basmati rice, tender chicken, and exotic spices, slow-cooked with dum setup to perfection.",
      subcategory: "Rice Items",
      tags: ["Rice", "Biryani", "Popular"]
    },
    {
      name: "Chicken 65 / Boneless Biryani",
      price: "20",
      description: "Aromatic basmati rice, perfectly layered with your choice of tender Chicken 65 or boneless chicken and infused with exotic spices, slow-cooked to create the perfect comfort food.",
      subcategory: "Rice Items",
      tags: ["Non-Vegetarian", "Biryani", "Popular"]
    },
    {
      name: "Lamb / Goat Double Masala Biryani",
      price: "19", 
      description: "Aromatic basmati rice, perfectly layered with tender lamb or goat, infused with a complex blend of rich spices, creating a harmonious and fragrant dish.",
      subcategory: "Rice Items",
      tags: ["Biryani", "Aromatic"]
    },
    {
      name: "Prawn Biryani",
      price: "22", 
      description: "Aromatic basmati rice delicately layered with tender shrimp, infused with a flavorful blend of spices that enhances each bite with its rich, aromatic essence.",
      subcategory: "Rice Items",
      tags: ["Biryani", "Sea Food"]
    },
    {
      name: "Tossed Fried Rice",
      price: "15+",
      description: "A classic dish featuring fragrant rice stir-fried with a medley of vegetables, Choice of vegetables, chicken, shrimp or egg as the protein creating a delicious and aromatic combination.",
      subcategory: "Rice Items",
      tags: ["Vegetarian", "Chicken", "Egg", "Shrimp", "Indo-Chinese"]
    },
    {
      name: "Shezwan Fried Rice",
      price: "15+",
      description: "A fiery combination of aromatic rice, fresh vegetables, and your preferred protein, all generously coated in a spicy and bold Sichuan sauce. Choice of vegetables, chicken, shrimp or egg as the protein.",
      subcategory: "Rice Items",
      tags: ["Vegetarian", "Chicken", "Egg", "Shrimp", "Indo-Chinese"]
    },
    {
      name: "Hakka Soft Noodles",
      price: "15+",
      description: "A classic stir-fry featuring noodles tossed with crisp, colorful vegetables, savory sauce, and choice of vegetables, chicken, shrimp or egg as the protein.",
      subcategory: "Noodle Items",
      tags: ["Vegetarian", "Chicken", "Egg", "Shrimp", "Indo-Chinese"]
    },
    {
      name: "Shezwan Noodles ",
      price: "15+",
      description: "A delicious combination of silky noodles, crisp vegetables, spicy Szechuan peppers, and your choice of vegetables, chicken, shrimp or egg as protein, creating a flavorful and satisfying dish.",
      subcategory: "Noodle Items",
      tags: ["Vegetarian", "Chicken", "Egg", "Shrimp", "Indo-Chinese"]
    }
  ],
  naan: [
    {
      name: "Naan (Plain / Butter)",
      price: "3",
      description: "Freshly baked, soft and fluffy naan bread, cooked to perfection in a traditional tandoor oven, with a perfect balance of texture and flavor.",
      subcategory: "Naan",
      tags: ["Bread"]
    },
    {
      name: "Garlic Naan",
      price: "4",
      description: "Aromatic, soft, and golden naan bread, freshly baked in a traditional tandoor oven, infused with rich garlic flavors and a delightfully fluffy texture.",
      subcategory: "Naan",
      tags: ["Bread", "Garlic", "Popular"]
    },
    {
      name: "Bullet Naan",
      price: "5",
      description: "Freshly baked, soft and airy naan bread, delicately seasoned with sliced green chilies, perfectly cooked in a traditional tandoor oven for a unique blend of texture and flavor.",
      subcategory: "Naan",
      tags: ["Bread", "Garlic", "Spicy"]
    },
    {
      name: "Tandoori Roti (Plain / Butter)",
      price: "4",
      description: "Whole wheat flatbread, expertly baked in a traditional tandoor oven, resulting in a perfectly crisp exterior and soft, fluffy interior.",
      subcategory: "Naan",
      tags: ["Whole Wheat", "Vegetarian"]
    },
    {
      name: "Paratha (Plain/Aloo)",
      price: "4",
      description: "Whole wheat flatbread stuffed with spiced potatoes (Aloo) or served plain, expertly baked in a traditional tandoor oven.",
      subcategory: "Naan",
      tags: ["Whole Wheat", "Vegetarian"]
    },
    {
      name: "Onion Kulcha",
      price: "5",
      description: "A golden, flaky pastry bursting with rich, buttery layers and an irresistible blend of sweet and savory caramelized onions.",
      subcategory: "Naan",
      tags: ["Whole Wheat", "Vegetarian"]
    },
    {
      name: "Cheese Naan",
      price: "5",
      description: "A warm, soft, and fluffy naan bread filled with cheese, baked to perfection in a traditional tandoor oven for an irresistible blend of smoky flavor and creamy richness.",
      subcategory: "Naan",
      tags: ["Bread", "Vegetarian"]
    },
    {
      name: "Peshwari Naan",
      price: "6",
      description: "A heavenly blend of dry fruits and nuts stuffed in buttery naan for a perfect balance of flavor and texture.",
      subcategory: "Naan",
      tags: ["Bread", "Nuts", "Sweet"]
    },
    {
      name: "Bread Basket",
      price: "16",
      description: "Choice of any four Breads.",
      subcategory: "Naan",
      tags: ["Choice", "Vegetarian"]
    }
  ],
  desserts: [
    {
      name: "Shrikhand",
      price: "6",
      description: "A luxurious yogurt-based dessert, sweetened and infused with the warm, aromatic flavor of cardamom, creating a velvety smooth treat that melts with the first scoop.",
      subcategory: "Desserts",
      tags: ["Dairy", "Popular"]
    },
    {
      name: "Apricot Delight",
      price: "6",
      description: "A delectable dessert blending juicy apricots' natural sweetness with almonds' creamy, nutty depth. A perfect balance of flavors and textures for a truly indulgent treat.",
      subcategory: "Desserts", 
      tags: ["Cold", "Nuts"]
    },
    {
      name: "Ras Malai",
      price: "6",
      description: "Soft, melt-in-your-mouth cheese dumplings immersed in a luscious, aromatic milk infused with cardamom, saffron, and a hint of rose, create the classic, indulgent dessert.",
      subcategory: "Desserts",
      tags: ["Sweet", "Creamy"]
    },
    {
      name: "Gajar ka halwa",
      price: "6",
      description: "A rich dessert of grated carrots simmered in milk and sugar, Infused with spices and topped with roasted dry fruits for perfect flavor.",
      subcategory: "Desserts",
      tags: ["Sweet", "Popular"]
    },
    {
      name: "Rabri Gulab jamun",
      price: "6",
      description: "A delightful harmony of creamy, velvety milk and soft, aromatic dumplings offers an indulgently divine taste experience.",
      subcategory: "Desserts", 
      tags: ["Cold", "Nuts"]
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
                  Please specify level of spiciness: Mild-🌶️ | Medium-🌶️🌶️ | Hot-🌶️🌶️🌶️ | Extra Hot-🌶️🌶️🌶️🌶️
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