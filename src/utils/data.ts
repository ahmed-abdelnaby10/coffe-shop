import { Blog } from "@/types/blogs";
import blog1 from "/public/images/blog-1.jpg"
import blog2 from "/public/images/blog-2.jpg"
import { mainLinks } from "./constants";
import { RiDrinks2Line } from "react-icons/ri";
import { GiCoffeeCup } from "react-icons/gi";

export const blogs: Blog[] = [
    {
        id: 1,
        title: "Discover Your Perfect Cup at HiRisk Café",
        subtitle: "Welcome to HiRisk Café, where every cup of coffee tells a story. Whether you're a casual sipper or a coffee connoisseur, we have the perfect brew to match your mood. But with so many options on our menu, it's easy to get overwhelmed. So, let's break down some of our favorite choices to help you make an informed decision the next time you visit HiRisk.",
        description: "At HiRisk, coffee isn't just a drink—it's an experience. So, whether you're looking for something bold, creamy, or sweet, we have the perfect brew waiting for you. Stop by, explore our menu, and find your new favorite cup today!",
        content: [
            {
                id: 1001,
                title: "Espresso",
                subtitle: "A Bold Start to Your Day",
                blog: "If you're a coffee purist, the Espresso is for you. It's bold, robust, and straight to the point. This classic shot of coffee is rich in flavor and perfect when you need a quick energy boost to jumpstart your day. At HiRisk, we serve our espresso with the finest beans, delivering a satisfying punch with every sip."
            },
            {
                id: 1002,
                title: "Latte ",
                subtitle: "Creamy Comfort in Every Cup",
                blog: "Looking for something smoother? A Latte might be your perfect match. This delicious drink starts with a shot of espresso, layered with velvety steamed milk, and topped with just a touch of milk foam. Whether you're on the go or here to relax, a latte offers that creamy, comforting experience you need. Add a flavor shot like vanilla or caramel to sweeten your day!"
            },
            {
                id: 1003,
                title: "Americano",
                subtitle: "Espresso with a Twist",
                blog: "For those who love the boldness of espresso but want a little more to savor, try the Americano. Made by adding hot water to a shot of espresso, it's less intense but still rich in flavor. It's the perfect drink when you're craving a longer coffee experience. Add a splash of milk or cream to lighten things up if you prefer."
            },
            {
                id: 1004,
                title: "Mocha",
                subtitle: "For Your Sweet Tooth",
                blog: "In the mood for something indulgent? The Mocha combines the rich flavors of espresso with the sweetness of chocolate, steamed milk, and milk foam. Whether you're treating yourself after a long day or just want a delicious pick-me-up, a mocha from HiRisk is sure to satisfy your chocolate cravings."
            },
        ],
        image: blog1,
        createdAt: "Jul 30, 2024"
    },
    {
        id: 2,
        title: "Mastering the Art of Coffee",
        subtitle: "At HiRisk Café, we believe in the art of coffee. Every cup is crafted with care, using high-quality beans and expert techniques to bring out the best flavors. But with so many options on our menu, it's worth taking a moment to explore the differences between each drink. Here's a quick guide to help you navigate the wonderful world of HiRisk coffee.",
        description: "So, next time you're in the neighborhood, stop by HiRisk and let us brew your perfect cup. Coffee is more than a drink—it's a ritual. And at HiRisk, we take that ritual seriously.",
        content: [
            {
                id: 2001,
                title: "Macchiato",
                subtitle: "A Touch of Milk, A World of Flavor",
                blog: "A Macchiato is perfect for those who enjoy the strength of an espresso but want a hint of milk to smooth out the flavor. It's made with a shot of espresso topped with just a dash of milk foam, offering a rich and slightly creamy experience. It's a great way to ease into the world of espresso if you're not quite ready for a full shot!"
            },
            {
                id: 2002,
                title: "Cappuccino ",
                subtitle: "The Classic Coffee Indulgence",
                blog: "One of our most popular drinks, the Cappuccino, is a creamy delight. Starting with a shot of espresso, we add equal parts of steamed milk and foamed milk to create a balanced and luxurious drink. The cappuccino is the ideal choice when you're in the mood for something frothy and satisfying. Want to spice things up? Add a hint of cinnamon or a dash of chocolate syrup for an extra special treat."
            },
            {
                id: 2003,
                title: "Espresso Con Panna",
                subtitle: "The Perfect Blend of Bitter and Sweet",
                blog: "For those who enjoy a little sweetness with their espresso, the Espresso Con Panna is the way to go. This drink features a classic espresso shot topped with a dollop of whipped cream. The contrast of the bold espresso and the creamy sweetness creates a unique, indulgent experience in every sip."
            },
            {
                id: 2004,
                title: "Why HiRisk?",
                subtitle: "",
                blog: "At HiRisk, we go beyond just serving coffee. We create experiences. Our baristas are passionate about their craft, and every cup is made with love and attention to detail. Whether you're in the mood for a quick espresso or a luxurious latte, our diverse menu ensures there's something for everyone."
            },
        ],
        image: blog2,
        createdAt: "Sep 25, 2024"
    },
]

export const menuData: Menu[] = [
    {
        category: "Italian Coffee",
        items: [
            { name: { en: "Espresso Single", ar: "إسبرسو سنجل" }, price: 33 },
            { name: { en: "Espresso Double", ar: "إسبرسو دوبل" }, price: 44 },
            { name: { en: "Ristretto", ar: "ريستريتو" }, price: 37 },
            { name: { en: "Double Macchiato", ar: "دوبل ماكياتو" }, price: 44 },
            { name: { en: "Cortado Classic", ar: "كوراتو كلاسيك" }, price: 47 },
            { name: { en: "Cappuccino", ar: "كابتشينو" }, price: 53 },
            { name: { en: "Cafe Latte", ar: "لاتيه" }, price: 48 },
            { name: { en: "Matcha Latte", ar: "ماتشا لاتيه" }, price: 55 },
            { name: { en: "Pistachio Latte", ar: "لاتيه فستق" }, price: 57 },
            { name: { en: "Spanish Latte", ar: "لاتيه اسباني" }, price: 60 },
            { name: { en: "Flat White", ar: "فلات وايت" }, price: 66 },
            { name: { en: "Caramel Maccato", ar: "كراميل ماكاتو" }, price: 58 },
            { name: { en: "Original Mocha", ar: "موكا" }, price: 59 },
            { name: { en: "Americano", ar: "امريكانو" }, price: 44 },
            { name: { en: "Nescafe", ar: "نسكافيه" }, price: 45 },
            { name: { en: "Mocha Lotus", ar: "موكا لوتس" }, price: 60 },
            { name: { en: "Corto cookies", ar: "كورتو كوكيز" }, price: 57 }
        ],
        image: `${mainLinks.previewURL}/categories/italianCoffee.png`,
        icon: GiCoffeeCup
    },
    {
        category: "Coffee",
        items: [
            { name: { en: "Turkish Coffee Single", ar: "قهوة تركي سنجل" }, price: 33 },
            { name: { en: "Turkish Coffee Double", ar: "قهوة تركي دوبل" }, price: 44 },
            { name: { en: "Double French", ar: "دوبل فرنش" }, price: 47 },
            { name: { en: "Double Hazelnut", ar: "دوبل هازلنوت" }, price: 52 },
            { name: { en: "Double Nutella", ar: "دوبل نوتيلا" }, price: 58 },
            { name: { en: "Double Lotus", ar: "دوبل لوتس" }, price: 58 }
        ],
        image: `${mainLinks.previewURL}/categories/hotDrinks.png`
    },
    {
        category: "Hot Chocolate",
        items: [
            { name: { en: "Classic", ar: "كلاسيك" }, price: 52 },
            { name: { en: "Mint", ar: "نعناع" }, price: 63 },
            { name: { en: "White Chocolate", ar: "وايت شوكولاتة" }, price: 52 },
            { name: { en: "Marshmallow", ar: "مارشميلو" }, price: 68 },
            { name: { en: "Black Forest", ar: "بلاك فورست" }, price: 57 },
            { name: { en: "Raspberry", ar: "رازبيري" }, price: 57 },
            { name: { en: "Cream Brulee", ar: "كريم بروليه" }, price: 65 },
            { name: { en: "Hot Chocolate Nutella", ar: "هوت شوكولاتة نوتيلا" }, price: 65 },
            { name: { en: "Hot Chocolate Kinder", ar: "هوت شوكولاتة كندر" }, price: 65 },
            { name: { en: "Lotus", ar: "لوتس" }, price: 63 }
        ],
        image: `${mainLinks.previewURL}/categories/hotDrinks.png`
    },
    {
        category: "Hot Drinks",
        items: [
            { name: { en: "Black Tea", ar: "شاي" }, price: 25 },
            { name: { en: "Herbs", ar: "اعشاب" }, price: 27 },
            { name: { en: "Green Tea", ar: "شاي اخضر" }, price: 27 },
            { name: { en: "Hot Sedar", ar: "سدر حار" }, price: 35 },
            { name: { en: "Felever Tea", ar: "شاي فليفر" }, price: 30 }
        ],
        image: `${mainLinks.previewURL}/categories/hotDrinks.png`
    },
    {
        category: "Ice Drinks",
        items: [
            { name: { en: "Ice Cappuccino", ar: "ايس كابتشينو" }, price: 55 },
            { name: { en: "Ice Latte", ar: "ايس لاتيه" }, price: 52 },
            { name: { en: "Ice Cinnamon Latte", ar: "ايس سينامون لاتيه" }, price: 60 },
            { name: { en: "Ice Spanish Latte", ar: "ايس سبانيش لاتيه" }, price: 75 },
            { name: { en: "Ice Americano", ar: "ايس امريكانو" }, price: 60 },
            { name: { en: "Ice White Mocha", ar: "ايس وايت موكا" }, price: 65 },
            { name: { en: "Ice Orange Americano", ar: "ايس اورانج امريكانو" }, price: 60 },
            { name: { en: "Ice Caramel Maccato", ar: "ايس كراميل ماكاتو" }, price: 70 },
            { name: { en: "Ice Mocha", ar: "ايس موكا" }, price: 60 },
            { name: { en: "Ice Chocolate", ar: "ايس شوكولاتة" }, price: 60 },
            { name: { en: "Ice Matcha Latte", ar: "ايس ماتشا لاتيه" }, price: 60 },
            { name: { en: "Ice Pistachio Latte", ar: "ايس فستق لاتيه" }, price: 80 }
        ],
        image: `${mainLinks.previewURL}/categories/iceDrinks.png`
    },
    {
        category: "Boba",
        items: [
            { name: { en: "Boba Matcha Latte", ar: "بوبا ماتشا لاتيه" }, price: 75 },
            { name: { en: "Boba Matcha Blueberry", ar: "بوبا ماتشا بلو بيري" }, price: 82 },
            { name: { en: "Boba Matcha Strawberry", ar: "بوبا ماتشا ستروبري" }, price: 82 },
            { name: { en: "Boba Matcha Chocolate", ar: "بوبا ماتشا شوكليت" }, price: 75 }
        ],
        image: `${mainLinks.previewURL}/categories/boba.png`
    },
    {
        category: "Frappuccino",
        items: [
            { name: { en: "Latte Frappe", ar: "فرابيه لاتيه" }, price: 70 },
            { name: { en: "Caramel Mocha Frappe", ar: "فرابيه موكا كراميل" }, price: 80 },
            { name: { en: "Chocolate Mocha Frappe", ar: "فرابيه موكا شوكليت" }, price: 80 },
            { name: { en: "White Mocha Frappe", ar: "فرابيه موكا وايت" }, price: 80 }
        ],
        image: `${mainLinks.previewURL}/categories/frappe.png`
    },
    {
        category: "Frappe Cream",
        items: [
            { name: { en: "Vanilla Frappe", ar: "فرابيه فانيلا" }, price: 70 },
            { name: { en: "Matcha Frappe", ar: "فرابيه ماتشا" }, price: 72 },
            { name: { en: "Caramel Frappe", ar: "فرابيه كراميل" }, price: 85 },
            { name: { en: "Strawberry Frappe", ar: "فرابيه ستروبري" }, price: 85 },
            { name: { en: "Chocolate Frappe", ar: "فرابيه شوكليت" }, price: 90 },
            { name: { en: "Lotus Frappe", ar: "فرابيه لوتس" }, price: 72 }
        ],
        image: `${mainLinks.previewURL}/categories/frappe.png`
    },
    {
        category: "Smoothies",
        items: [
            { name: { en: "Mango", ar: "مانجو" }, price: 52 },
            { name: { en: "Peach", ar: "خوخ" }, price: 52 },
            { name: { en: "Strawberry", ar: "ستروبري" }, price: 52 },
            { name: { en: "Kiwi", ar: "كيوي" }, price: 52 },
            { name: { en: "Blueberry", ar: "بلو بيري" }, price: 52 },
            { name: { en: "Lemon Mint", ar: "ليمون بالنعناع" }, price: 52 },
            { name: { en: "Raspberry", ar: "رازبيري" }, price: 52 },
            { name: { en: "Green Apple", ar: "تفاح اخضر" }, price: 52 },
            { name: { en: "Bena Colada", ar: "بينا كولادا" }, price: 52 },
            { name: { en: "Watermelon", ar: "بطيخ" }, price: 52 },
            { name: { en: "Mango Passion Fruit", ar: "مانجو باشن فروت" }, price: 55 },
            { name: { en: "Blue Lemon Frosty", ar: "بلو ليمون فروستي" }, price: 55 },
            { name: { en: "Tropical Frosty", ar: "تروبيكال فروستي" }, price: 55 },
            { name: { en: "Green Addition Frosty", ar: "جرين ادشن فروستي" }, price: 55 },
            { name: { en: "Blueberry Cookies", ar: "بلو بيري كوكيز" }, price: 55 },
            { name: { en: "Energy Frosty", ar: "اينرجي فروستي" }, price: 55 }
        ],
        image: `${mainLinks.previewURL}/categories/smoothies.png`
    },
    {
        category: "Milk Shake",
        items: [
            { name: { en: "Vanilla", ar: "فانيلا" }, price: 63 },
            { name: { en: "Chocolate", ar: "شوكليت" }, price: 63 },
            { name: { en: "Mango", ar: "مانجو" }, price: 63 },
            { name: { en: "Strawberry", ar: "ستروبري" }, price: 63 },
            { name: { en: "Caramel", ar: "كراميل" }, price: 70 },
            { name: { en: "Raspberry", ar: "رازبيري" }, price: 74 },
            { name: { en: "Oreo", ar: "اوريو" }, price: 74 },
            { name: { en: "Blueberry", ar: "بلو بيري" }, price: 74 },
            { name: { en: "Nutella", ar: "نوتيلا" }, price: 90 },
            { name: { en: "Pistachio", ar: "بيستاشيو" }, price: 90 },
            { name: { en: "Lotus", ar: "لوتس" }, price: 78 }
        ],
        image: `${mainLinks.previewURL}/categories/milkShake.png`
    },
    {
        category: "Fresh Juice",
        items: [
            { name: { en: "Mango", ar: "مانجو" }, price: 50 },
            { name: { en: "Strawberry", ar: "ستروبري" }, price: 50 },
            { name: { en: "Guava", ar: "جوافة" }, price: 50 },
            { name: { en: "Lemon Mint", ar: "ليمون بالنعناع" }, price: 46 },
            { name: { en: "Orange", ar: "اورانج" }, price: 50 },
            { name: { en: "Watermelon", ar: "بطيخ" }, price: 50 },
            { name: { en: "Banana", ar: "موز" }, price: 47 },
            { name: { en: "Pineapple", ar: "اناناس" }, price: 50 },
            { name: { en: "Kiwi", ar: "كيوي" }, price: 62 },
            { name: { en: "Date", ar: "تمر" }, price: 62 }
        ],
        image: `${mainLinks.previewURL}/categories/freshJuice.png`
    },    
    {
        category: "Avocado Selections",
        items: [
            { name: { en: "Honey", ar: "عسل" }, price: 85 },
            { name: { en: "Multi Vitamines", ar: "فيتامين" }, price: 87 },
            { name: { en: "Mango", ar: "مانجة" }, price: 85 },
            { name: { en: "Banana", ar: "موز" }, price: 85 },
            { name: { en: "Date", ar: "تمر" }, price: 87 }
        ],
        image: `${mainLinks.previewURL}/categories/avocados.png`
    },
    {
        category: "Mocktails",
        items: [
            { name: { en: "Mojito Classic", ar: "موهيتو كلاسيك" }, price: 52 },
            { name: { en: "Mojito Kiwi", ar: "موهيتو كيوي" }, price: 57 },
            { name: { en: "Mojito Strawberry", ar: "موهيتو فراولة" }, price: 57 },
            { name: { en: "Mojito Peach", ar: "موهيتو خوخ" }, price: 57 },
            { name: { en: "Mojito Blueberry", ar: "موهيتو توت" }, price: 57 },
            { name: { en: "Mojito Blue Passion", ar: "موهيتو بلو باشن" }, price: 57 },
            { name: { en: "Mojito Watermelon", ar: "موهيتو بطيخ" }, price: 57 },
            { name: { en: "Mojito Island", ar: "موهيتو آيلاند" }, price: 57 },
            { name: { en: "Mojito Redbull", ar: "موهيتو ريدبول" }, price: 80 }
        ],
        image: `${mainLinks.previewURL}/categories/mocktails.png`
    },
    {
        category: "Soft Drinks",
        items: [
            { name: { en: "Pepsi/Seven/Miranda", ar: "بيبسي / سفن / ميرندا" }, price: 30 },
            { name: { en: "Fayrouz", ar: "فيروز" }, price: 30 },
            { name: { en: "Schweppes Gold", ar: "شويبس جولد" }, price: 30 },
            { name: { en: "Birell", ar: "بيريل" }, price: 35 },
            { name: { en: "Green Cola", ar: "جرين كولا" }, price: 30 },
            { name: { en: "Moussy", ar: "موسى" }, price: 35 },
            { name: { en: "Red Bull", ar: "ريد بول" }, price: 45 },
            { name: { en: "Twist", ar: "توست" }, price: 30 },
            { name: { en: "Sperto Spats", ar: "سبرتو سباتس" }, price: 30 },
            { name: { en: "Mineral Water", ar: "مياه معدنية" }, price: 10 }
        ],
        image: `${mainLinks.previewURL}/categories/softDrinks.png`,
        icon: RiDrinks2Line
    },
    {
        category: "Brioche Ice Cream",
        items: [
            { name: { en: "Chocolate", ar: "شوكولاته" }, price: 55 },
            { name: { en: "Caramel Ice", ar: "كريم كراميل" }, price: 60 },
            { name: { en: "Nutella", ar: "نوتيلا" }, price: 65 },
            { name: { en: "Lotus", ar: "لوتس" }, price: 65 },
            { name: { en: "Pistachio", ar: "فستق" }, price: 68 },
            { name: { en: "Kinder", ar: "كيندر" }, price: 68 },
            { name: { en: "Oreo", ar: "أوريو" }, price: 65 }
        ],
        image: `${mainLinks.previewURL}/categories/brioche.png`
    },
    {
        category: "Waffle",
        items: [
            { name: { en: "Nutella Oreo", ar: "نوتيلا اوريو" }, price: 85 },
            { name: { en: "Lotus", ar: "لوتس" }, price: 80 },
            { name: { en: "Kinder", ar: "كيندر" }, price: 85 },
            { name: { en: "Nutella", ar: "نوتيلا" }, price: 80 },
            { name: { en: "Pistachio", ar: "فستق" }, price: 95 },
            { name: { en: "Chocolate - Caramel", ar: "شوكولاتة - كراميل" }, price: 67 },
            { name: { en: "Waffle Mix", ar: "وافل ميكس" }, price: 80 }
        ],
        image: `${mainLinks.previewURL}/categories/waffle.png`
    },
    {
        category: "Croffel",
        items: [
            { name: { en: "Classic", ar: "كلاسيك" }, price: 75 },
            { name: { en: "Chocolate/Caramel", ar: "شوكولاتة / كراميل" }, price: 82 },
            { name: { en: "Nutella", ar: "نوتيلا" }, price: 82 },
            { name: { en: "Lotus", ar: "لوتس" }, price: 85 },
            { name: { en: "Pistachio", ar: "فستق" }, price: 90 },
            { name: { en: "Kinder", ar: "كيندر" }, price: 100 }
    
        ],
        image: `${mainLinks.previewURL}/categories/croffle.png`
    },
    {
        category: "Mini Pancakes",
        items: [
            { name: { en: "Chocolate/Caramel", ar: "شوكولاتة / كراميل" }, price: 68 },
            { name: { en: "Oreo Chocolate", ar: "أوريو شوكولاتة" }, price: 75 },
            { name: { en: "Nutella", ar: "نوتيلا" }, price: 75 },
            { name: { en: "Lotus", ar: "لوتس" }, price: 75 },
            { name: { en: "Kinder", ar: "كيندر" }, price: 82 },
            { name: { en: "Pistachio", ar: "فستق" }, price: 95 },
            { name: { en: "Mix Sauce", ar: "ميكس صوص" }, price: 82 }
        ],
        image: `${mainLinks.previewURL}/categories/miniPancakes.png`
    },
    {
        category: "Cheese Cake",
        items: [
            { name: { en: "Chocolate/Caramel", ar: "شوكولاتة / كراميل" }, price: 72 },
            { name: { en: "Blueberry", ar: "بلو بيري" }, price: 80 },
            { name: { en: "Strawberry", ar: "فراولة" }, price: 80 },
            { name: { en: "Nutella", ar: "نوتيلا" }, price: 80 },
            { name: { en: "Roche", ar: "روش" }, price: 72 },
            { name: { en: "Kinder", ar: "كيندر" }, price: 80 },
            { name: { en: "Pistachio", ar: "فستق" }, price: 85 }
        ],
        image: `${mainLinks.previewURL}/categories/spastians.png`
    },
    {
        category: "San Sebastian",
        items: [
            { name: { en: "Blueberry", ar: "بلو بيري" }, price: 72 },
            { name: { en: "Strawberry", ar: "فراولة" }, price: 72 },
            { name: { en: "Nutella", ar: "نوتيلا" }, price: 80 },
            { name: { en: "Roche", ar: "روش" }, price: 85 },
            { name: { en: "Kinder", ar: "كيندر" }, price: 80 },
            { name: { en: "Pistachio", ar: "فستق" }, price: 85 }
        ],
        image: `${mainLinks.previewURL}/categories/spastians.png`
    },
    {
        category: "Dessert Choices",
        items: [
            { name: { en: "Chocolate Fudge", ar: "شوكولاتة فدج" }, price: 70 },
            { name: { en: "Kinder Cake", ar: "كيك كيندر" }, price: 70 },
            { name: { en: "Lotus Cake", ar: "كيك لوتس" }, price: 70 },
            { name: { en: "Roche Cake", ar: "كيك روش" }, price: 75 },
            { name: { en: "Red Velvet", ar: "رد فيلفت" }, price: 75 },
            { name: { en: "Tiramisu", ar: "تيراميسو" }, price: 75 },
            { name: { en: "Original Molten", ar: "مولتن اوريجنال" }, price: 75 },
            { name: { en: "Brownies", ar: "براونيز" }, price: 75 },
            { name: { en: "Cookie Double Chocolate", ar: "كوكي دوبل شوكولاتة" }, price: 75 },
            { name: { en: "Molten Nutella", ar: "مولتن نوتيلا" }, price: 80 },
            { name: { en: "Molten Lotus", ar: "مولتن لوتس" }, price: 80 },
            { name: { en: "Galaxy Cake", ar: "كيك جالاكسي" }, price: 70 },
            { name: { en: "Snickers Cake", ar: "كيك سنيكرز" }, price: 70 },
            { name: { en: "Honey Cake", ar: "كيك عسل" }, price: 70 },
            { name: { en: "Pistachio Eclair", ar: "إكلير فستق" }, price: 80 },
            { name: { en: "Roche Eclair", ar: "إكلير روش" }, price: 80 },
            { name: { en: "White Chocolate Eclair", ar: "إكلير شوكولاتة بيضاء" }, price: 80 },
            { name: { en: "Chocolate Eclair", ar: "إكلير شوكولاتة" }, price: 80 }
        ],
        image: `${mainLinks.previewURL}/categories/dessert.png`
    },
    {
        category: "Cinnabon",
        items: [
            { name: { en: "Classic", ar: "كلاسيك" }, price: 55 },
            { name: { en: "Chocolate", ar: "شوكليت" }, price: 65 },
            { name: { en: "Carmel", ar: "كراميل" }, price: 65 },
            { name: { en: "Nutella", ar: "نوتيلا" }, price: 70 },
            { name: { en: "Lotus", ar: "لوتس" }, price: 70 }
        ],
        image: `${mainLinks.previewURL}/categories/cinabon.png`
    },
    {
        category: "Donut",
        items: [
            { name: { en: "Chocolate", ar: "شوكليت" }, price: 55 },
            { name: { en: "Carmel", ar: "كراميل" }, price: 55 },
            { name: { en: "Nutella", ar: "نوتيلا" }, price: 60 },
            { name: { en: "Lotus", ar: "لوتس" }, price: 60 },
            { name: { en: "Pistachio Donuts", ar: "فستق" }, price: 65 },
            { name: { en: "Kinder", ar: "كيندر" }, price: 65 },
            { name: { en: "Oreo", ar: "اوريو" }, price: 60 },
            { name: { en: "Chocolate Chips Donuts", ar: "دونات شوكليت شيبس" }, price: 55 },
        ],
        image: `${mainLinks.previewURL}/categories/donuts.png`
    },
    {
        category: "Extra",
        items: [
            { name: { en: "Cream", ar: "كريم" }, price: 10 },
            { name: { en: "Milk", ar: "حليب" }, price: 15 },
            { name: { en: "Espresso", ar: "اسبريسو" }, price: 15 },
            { name: { en: "Nutella", ar: "نوتيلا" }, price: 15 },
            { name: { en: "Lotus sauce", ar: "صوص لوتس" }, price: 15 },
            { name: { en: "Kinder sauce", ar: "صوص كيندر" }, price: 22 },
            { name: { en: "Pistachio sauce", ar: "صوص فستق" }, price: 28 },
            { name: { en: "Roche sauce", ar: "صوص روشيه" }, price: 20 },
            { name: { en: "Flavor", ar: "فلافور" }, price: 15 },
            { name: { en: "Chocolate sauce", ar: "صوص شوكليت" }, price: 15 },
            { name: { en: "Caramel sauce", ar: "صوص كراميل" }, price: 12 },
            { name: { en: "Topping", ar: "توبينج" }, price: 15 },
            { name: { en: "Oreo", ar: "اوريو" }, price: 12 },
            { name: { en: "Ice cream", ar: "ايس كريم" }, price: 12 },
            { name: { en: "Boba", ar: "بوبا" }, price: 20 },
            { name: { en: "Nuts", ar: "مكسرات" }, price: 15 },
        ],
        image: `${mainLinks.previewURL}/categories/extras.png`
    },
    {
        category: "Breakfast",
        items: [
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 }
        ],
        image: `${mainLinks.previewURL}/categories/breakfast.png`
    },
    {
        category: "Appetizers",
        items: [
            { name: { en: "French Fries", ar: "بطاطس" }, price: 40 },
            { name: { en: "Cheesy Fries", ar: "بطاطس بالجبنة" }, price: 75 },
            { name: { en: "Cheesy Fries chicken", ar: "بطاطس بالجبنة و الفراخ" }, price: 140 },
            { name: { en: "Chicken Strips", ar: "تشيكن استربس" }, price: 120 },
            { name: { en: "Mozzarella Sticks", ar: "اصابع الموتزاريلا" }, price: 75 },
            { name: { en: "Onion Rings", ar: "حلقات البصل" }, price: 73 },
            { name: { en: "Sweet chili shrimp", ar: "جمبرى سويت تشيلي" }, price: 150 },
        ],
        image: `${mainLinks.previewURL}/categories/appetizers.png`
    },
    {
        category: "Pans",
        items: [
            { name: { en: "Sausage Pan", ar: "طاسة سجق" }, price: 132 },
            { name: { en: "HiRisk Pan", ar: "طاسة هاي ريسك" }, price: 138 },
            { name: { en: "Crispy Chicken Pan", ar: "طاسة فراخ كريسبي" }, price: 133 },
            { name: { en: "Hot Dog Pan", ar: "طاسة هوت دوج" }, price: 110 },
            { name: { en: "Pastarmi Pan", ar: "طاسة بسطرمة" }, price: 110 },
            { name: { en: "Meat & Potato Pan grip", ar: "طاسة لحم مع البطاطس" }, price: 150 }
        ],
        image: `${mainLinks.previewURL}/categories/pans.png`
    },
    {
        category: "Pasta",
        items: [
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 }
        ],
        image: `${mainLinks.previewURL}/categories/pasta.png`
    },
    {
        category: "Sandwich",
        items: [
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 }
        ],
        image: `${mainLinks.previewURL}/categories/sandwich.png`
    },
    {
        category: "Burger",
        items: [
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 }
        ],
        image: `${mainLinks.previewURL}/categories/burger.png`
    },
    {
        category: "Salad",
        items: [
            { name: { en: "Chicken caesar salad", ar: "سلطة سيزر بالدجاج" }, price: 125 },
            { name: { en: "Grilled halloumi chicken salad", ar: "سلطة دجاج حلومي مشوي" }, price: 135 },
            { name: { en: "Shrimp avocado salad", ar: "سلطة الجمبرى و الافوكادو" }, price: 145 },
        ],
        image: `${mainLinks.previewURL}/categories/salad.png`
    },
    {
        category: "Addition",
        items: [
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 },
            { name: { en: "", ar: "" }, price: 0 }
        ],
        image: `${mainLinks.previewURL}/categories/additions.png`
    },
]

export const categories: Category[] = menuData.map((item, index) => {
    return {
        id: index + 1,
        title: item.category,
        image: item.image
    }
})