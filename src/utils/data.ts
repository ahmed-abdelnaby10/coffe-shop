import { Category } from "@/types/categories";
import imag from "/public/images/main-menu.jpg"
import { Blog } from "@/types/blogs";
import blog1 from "/public/images/blog-1.jpg"
import blog2 from "/public/images/blog-2.jpg"

export const categories: Category[] = [
    {
        id: 1,
        title: "drinks",
        image: imag
    },
    {
        id: 2,
        title: "bakery",
        image: imag
    },
    {
        id: 3,
        title: "breakfast",
        image: imag
    },
    {
        id: 4,
        title: "sandwiches",
        image: imag
    },
    {
        id: 5,
        title: "salads",
        image: imag
    },
    {
        id: 6,
        title: "pizza",
        image: imag
    },
    {
        id: 7,
        title: "hot meals",
        image: imag
    },
]

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