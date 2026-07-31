/* =========================================================
   KRISHISETU - Comprehensive Mock Dataset
   Simulates Django REST API data payloads for production UI
   ========================================================= */

export const MOCK_CATEGORIES = [
  {
    id: "cat-1",
    name: "Fresh Vegetables",
    slug: "fresh-vegetables",
    icon: "bi-egg-fried",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    itemCount: 42,
    badge: "Direct Farm Fresh",
    description: "Naturally grown, pesticide-free fresh vegetables harvested daily."
  },
  {
    id: "cat-2",
    name: "Organic Fruits",
    slug: "organic-fruits",
    icon: "bi-apple",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80",
    itemCount: 28,
    badge: "100% Organic",
    description: "Sun-ripened organic fruits packed with natural nutrients."
  },
  {
    id: "cat-3",
    name: "Grains & Pulses",
    slug: "grains-pulses",
    icon: "bi-basket",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    itemCount: 35,
    badge: "Bulk Harvest",
    description: "Premium Sharbati wheat, Basmati rice, pulses, and millets."
  },
  {
    id: "cat-4",
    name: "Dairy & Eggs",
    slug: "dairy-eggs",
    icon: "bi-droplet-half",
    image: "https://images.unsplash.com/photo-1528750997573-59b89d66f4f7?auto=format&fit=crop&w=600&q=80",
    itemCount: 19,
    badge: "Pure A2 Quality",
    description: "Fresh A2 cow milk, Gir cow ghee, and free-range farm eggs."
  },
  {
    id: "cat-5",
    name: "Spices & Herbs",
    slug: "spices-herbs",
    icon: "bi-flower1",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    itemCount: 24,
    badge: "Pure & Aromatic",
    description: "Sun-dried turmeric, Kashmir saffron, coriander, and native spices."
  },
  {
    id: "cat-6",
    name: "Cold-Pressed Oils",
    slug: "cold-pressed-oils",
    icon: "bi-moisture",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    itemCount: 15,
    badge: "Kachi Ghani",
    description: "Traditional wood-pressed mustard, groundnut, and sesame oils."
  }
];

export const MOCK_FARMERS = [
  {
    id: "farmer-101",
    name: "Rameshwar Patel",
    farmName: "Green Harvest Organic Estate",
    location: "Nashik, Maharashtra",
    district: "Nashik",
    state: "Maharashtra",
    rating: 4.9,
    reviewsCount: 148,
    experience: "18+ Years",
    avatar: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80",
    coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    specialties: ["Organic Tomatoes", "Alphonso Mangoes", "Onions"],
    isVerified: true,
    totalSales: "4,500+ Quintals",
    joinedDate: "Jan 2022"
  },
  {
    id: "farmer-102",
    name: "Sardar Gurpreet Singh",
    farmName: "Golden Wheat Granary Farms",
    location: "Ludhiana, Punjab",
    district: "Ludhiana",
    state: "Punjab",
    rating: 4.85,
    reviewsCount: 210,
    experience: "25+ Years",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80",
    coverImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    specialties: ["Sharbati Wheat", "1121 Basmati Rice", "Mustard Seeds"],
    isVerified: true,
    totalSales: "12,000+ Quintals",
    joinedDate: "Mar 2021"
  },
  {
    id: "farmer-103",
    name: "Ananya Gowda",
    farmName: "Western Ghats Spice Sanctuary",
    location: "Chikkamagaluru, Karnataka",
    district: "Chikkamagaluru",
    state: "Karnataka",
    rating: 4.95,
    reviewsCount: 96,
    experience: "12+ Years",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    coverImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
    specialties: ["Black Pepper", "Raw Organic Honey", "Cardamom"],
    isVerified: true,
    totalSales: "1,800+ Kg",
    joinedDate: "Aug 2022"
  },
  {
    id: "farmer-104",
    name: "Vikram Chaudhary",
    farmName: "Vedic Dairy & Cattle Ranch",
    location: "Karnal, Haryana",
    district: "Karnal",
    state: "Haryana",
    rating: 4.8,
    reviewsCount: 175,
    experience: "15+ Years",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    coverImage: "https://images.unsplash.com/photo-1528750997573-59b89d66f4f7?auto=format&fit=crop&w=1200&q=80",
    specialties: ["Gir Cow A2 Ghee", "Raw Whole Milk", "Butter"],
    isVerified: true,
    totalSales: "8,900+ Liters",
    joinedDate: "Feb 2023"
  }
];

export const MOCK_PRODUCTS = [
  {
    id: "prod-1",
    name: "Farm Fresh Organic Tomatoes",
    category: "Fresh Vegetables",
    categoryId: "cat-1",
    price: 38,
    originalPrice: 50,
    discountPercentage: 24,
    unit: "kg",
    unitOptions: ["1 kg", "2.5 kg", "5 kg crate"],
    stock: 450,
    rating: 4.9,
    ratingCount: 124,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=600&q=80"
    ],
    farmer: MOCK_FARMERS[0],
    harvestDate: "Today (Morning 5:30 AM)",
    isOrganic: true,
    isDirectFromFarmer: true,
    isFeatured: true,
    isTodayDeal: true,
    dealTimerHours: 14,
    description: "Vine-ripened red organic tomatoes grown naturally in Nashik red soil. Rich in lycopene, vitamin C, and fresh natural flavor.",
    specifications: {
      "Farming Method": "100% Organic Zero-Chemical",
      "Origin State": "Maharashtra",
      "Shelf Life": "6-8 Days at room temp",
      "Pesticide Free": "Certified Organic"
    }
  },
  {
    id: "prod-2",
    name: "Premium Sharbati Wheat (Golden Grain)",
    category: "Grains & Pulses",
    categoryId: "cat-3",
    price: 48,
    originalPrice: 62,
    discountPercentage: 22,
    unit: "kg",
    unitOptions: ["5 kg", "10 kg", "26 kg bag"],
    stock: 1200,
    rating: 4.85,
    ratingCount: 189,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"
    ],
    farmer: MOCK_FARMERS[1],
    harvestDate: "Harvested Last Week",
    isOrganic: false,
    isDirectFromFarmer: true,
    isFeatured: true,
    isTodayDeal: false,
    description: "Hand-picked MP Sharbati wheat grains from Punjab fertile farms. Produces soft, fluffy, and nutritious rotis.",
    specifications: {
      "Variety": "Sharbati Gold MP",
      "Gluten Content": "Natural Medium",
      "Cleaning": "Machine Machine Cleaned & Sun Dried",
      "Moisture": "< 10%"
    }
  },
  {
    id: "prod-3",
    name: "Ratnagiri Alphonso Mangoes (Devgad Hapus)",
    category: "Organic Fruits",
    categoryId: "cat-2",
    price: 850,
    originalPrice: 1200,
    discountPercentage: 29,
    unit: "dozen",
    unitOptions: ["1 dozen box", "2 dozen crate"],
    stock: 80,
    rating: 4.98,
    ratingCount: 312,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=600&q=80"
    ],
    farmer: MOCK_FARMERS[0],
    harvestDate: "Tree-Ripened Yesterday",
    isOrganic: true,
    isDirectFromFarmer: true,
    isFeatured: true,
    isTodayDeal: true,
    dealTimerHours: 8,
    description: "GI-Tagged Authentic Ratnagiri Alphonso Mangoes. Naturally ripened in grass, rich aroma, deep saffron sweetness.",
    specifications: {
      "GI Tag": "Authentic Ratnagiri Hapus",
      "Ripening": "Grass Ripened (No Carbide)",
      "Average Weight": "220g - 260g per piece",
      "Grade": "Export Grade A+"
    }
  },
  {
    id: "prod-4",
    name: "Pure Wild Forest Raw Honey",
    category: "Spices & Herbs",
    categoryId: "cat-5",
    price: 490,
    originalPrice: 650,
    discountPercentage: 24,
    unit: "bottle (500g)",
    unitOptions: ["250g jar", "500g jar", "1kg glass jar"],
    stock: 140,
    rating: 4.95,
    ratingCount: 88,
    image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=600&q=80"
    ],
    farmer: MOCK_FARMERS[2],
    harvestDate: "Filtered 3 Days Ago",
    isOrganic: true,
    isDirectFromFarmer: true,
    isFeatured: true,
    isTodayDeal: false,
    description: "100% Unpasteurized raw honey extracted directly from Western Ghats wild bee colonies. Zero added sugar or syrup.",
    specifications: {
      "Purity": "100% Raw Unfiltered",
      "Pollen Count": "High Natural Pollen",
      "Processing": "Zero Heat Applied",
      "Origin": "Chikkamagaluru Western Ghats"
    }
  },
  {
    id: "prod-5",
    name: "A2 Gir Cow Vedic Bilona Ghee",
    category: "Dairy & Eggs",
    categoryId: "cat-4",
    price: 1450,
    originalPrice: 1800,
    discountPercentage: 19,
    unit: "jar (500ml)",
    unitOptions: ["500ml Glass Jar", "1000ml Glass Jar"],
    stock: 65,
    rating: 4.92,
    ratingCount: 142,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
    ],
    farmer: MOCK_FARMERS[3],
    harvestDate: "Handmade This Week",
    isOrganic: true,
    isDirectFromFarmer: true,
    isFeatured: true,
    isTodayDeal: true,
    dealTimerHours: 19,
    description: "Handcrafted using traditional Bilona churning method from free-grazing pure Gir cow curd. Granular golden texture.",
    specifications: {
      "Milk Type": "Pure Indian Gir Cow A2 Milk",
      "Method": "Traditional Wooden Bilona",
      "Additives": "Zero Preservatives",
      "Aroma": "Rich Ayurvedic Granular Ghee"
    }
  },
  {
    id: "prod-6",
    name: "Cold-Pressed Wood Pressed Mustard Oil",
    category: "Cold-Pressed Oils",
    categoryId: "cat-6",
    price: 210,
    originalPrice: 260,
    discountPercentage: 19,
    unit: "bottle (1 Liter)",
    unitOptions: ["1 Liter Bottle", "5 Liter Can"],
    stock: 220,
    rating: 4.84,
    ratingCount: 95,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80"
    ],
    farmer: MOCK_FARMERS[1],
    harvestDate: "Pressed 2 Days Ago",
    isOrganic: true,
    isDirectFromFarmer: true,
    isFeatured: false,
    isTodayDeal: false,
    description: "Kachi Ghani cold-pressed mustard oil extracted at low temperature to retain essential omega-3 & pungent natural aroma.",
    specifications: {
      "Extraction": "Wooden Kachi Ghani Cold Press",
      "Chemicals": "Hexane-Free",
      "Filtration": "Natural Cloth Filtered"
    }
  }
];

export const MOCK_REVIEWS = [
  {
    id: "rev-1",
    userName: "Priya Sharma",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "2 days ago",
    comment: "The Alphonso mangoes delivered directly from Rameshwarji's farm were so fresh! You can literally smell the authentic grass-ripened aroma as soon as you open the box. KrishiSetu is a blessing for urban households.",
    productName: "Ratnagiri Alphonso Mangoes",
    location: "Mumbai, MH"
  },
  {
    id: "rev-2",
    userName: "Amitav Roy",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 week ago",
    comment: "Bought 25kg Sharbati wheat from Sardar Gurpreet Singh. The grain quality is immaculate, zero dust or impurities. Plus, knowing 100% of my payment reached the farmer directly feels so satisfying.",
    productName: "Premium Sharbati Wheat",
    location: "Delhi NCR"
  },
  {
    id: "rev-3",
    userName: "Kavita Reddy",
    userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "3 days ago",
    comment: "The Gir Cow A2 Ghee has that authentic granular homemade texture we missed for years in city supermarkets. Exceptional packaging and super fast 24-hour delivery!",
    productName: "A2 Gir Cow Vedic Bilona Ghee",
    location: "Bengaluru, KA"
  }
];

export const MOCK_STATS = [
  { label: "Active Verified Farmers", value: 12400, prefix: "", suffix: "+", icon: "bi-person-arms-up" },
  { label: "Satisfied Urban Families", value: 85000, prefix: "", suffix: "+", icon: "bi-heart-fill" },
  { label: "Fresh Crops Delivered", value: 450000, prefix: "", suffix: " Quintals", icon: "bi-truck" },
  { label: "Direct Farmer Income Increase", value: 38, prefix: "", suffix: "%", icon: "bi-graph-up-arrow" }
];

export const MOCK_ORDERS = [
  {
    id: "ORD-98241",
    date: "31 Jul 2026",
    customerName: "Ankit Verma",
    customerPhone: "+91 98765 43210",
    deliveryAddress: "Flat 402, Green Acres Apt, Bandra West, Mumbai - 400050",
    items: [
      { id: "prod-1", name: "Farm Fresh Organic Tomatoes", price: 38, quantity: 3, unit: "kg" },
      { id: "prod-5", name: "A2 Gir Cow Vedic Bilona Ghee", price: 1450, quantity: 1, unit: "jar (500ml)" }
    ],
    subtotal: 1564,
    discount: 100,
    deliveryFee: 0,
    totalAmount: 1464,
    paymentMethod: "UPI (Google Pay)",
    paymentStatus: "Paid",
    orderStatus: "In Transit",
    farmerName: "Rameshwar Patel",
    trackingSteps: [
      { status: "Order Placed", date: "31 Jul 08:30 AM", completed: true },
      { status: "Harvested & Packed", date: "31 Jul 11:15 AM", completed: true },
      { status: "Dispatched from Farm", date: "31 Jul 02:00 PM", completed: true },
      { status: "Out for Delivery", date: "Estimated 05:30 PM", completed: false },
      { status: "Delivered", date: "Pending", completed: false }
    ]
  },
  {
    id: "ORD-98240",
    date: "29 Jul 2026",
    customerName: "Priya Sharma",
    customerPhone: "+91 91234 56789",
    deliveryAddress: "Villa 12, Palm Meadows, Whitefield, Bengaluru - 560066",
    items: [
      { id: "prod-3", name: "Ratnagiri Alphonso Mangoes", price: 850, quantity: 2, unit: "dozen" }
    ],
    subtotal: 1700,
    discount: 150,
    deliveryFee: 50,
    totalAmount: 1600,
    paymentMethod: "Credit Card (HDFC)",
    paymentStatus: "Paid",
    orderStatus: "Delivered",
    farmerName: "Rameshwar Patel",
    trackingSteps: [
      { status: "Order Placed", date: "29 Jul 09:00 AM", completed: true },
      { status: "Harvested & Packed", date: "29 Jul 01:00 PM", completed: true },
      { status: "Dispatched from Farm", date: "29 Jul 05:00 PM", completed: true },
      { status: "Out for Delivery", date: "30 Jul 09:30 AM", completed: true },
      { status: "Delivered", date: "30 Jul 11:45 AM", completed: true }
    ]
  }
];

export const MOCK_ANALYTICS = {
  revenueMetrics: {
    totalRevenue: "₹ 48,92,400",
    monthlyGrowth: "+24.5%",
    totalOrders: "3,840",
    activeFarmersCount: 1240,
    activeBuyersCount: 24800
  },
  salesChartData: [
    { month: "Jan", revenue: 240000, orders: 320 },
    { month: "Feb", revenue: 310000, orders: 410 },
    { month: "Mar", revenue: 450000, orders: 580 },
    { month: "Apr", revenue: 520000, orders: 690 },
    { month: "May", revenue: 680000, orders: 840 },
    { month: "Jun", revenue: 890000, orders: 1120 },
    { month: "Jul", revenue: 1180000, orders: 1480 }
  ]
};
