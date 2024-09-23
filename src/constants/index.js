import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
];

export const shoes = [
    { thumbnail: thumbnailShoe1, bigShoe: bigShoe1 },
    { thumbnail: thumbnailShoe2, bigShoe: bigShoe2 },
    { thumbnail: thumbnailShoe3, bigShoe: bigShoe3 },
];

export const statistics = [
    { value: "10K+", label: "Customers" },
    { value: "2K+", label: "Reviews" },
    { value: "50+", label: "Products" },
];

export const products = [
    { imgURL: shoe4, name: "Shoe 4", price: "$100" },
    { imgURL: shoe5, name: "Shoe 5", price: "$120" },
    { imgURL: shoe6, name: "Shoe 6", price: "$140" },
    { imgURL: shoe7, name: "Shoe 7", price: "$160" },
];

export const services = [
    { imgURL: truckFast, label: "Fast Delivery", subtext: "Get your shoes fast" },
    { imgURL: shieldTick, label: "Secure Payment", subtext: "100% secure payment" },
    { imgURL: support, label: "24/7 Support", subtext: "We are here to help" },
];

export const reviews = [
    { imgURL: customer1, customerName: "John Doe", rating: 5, feedback: "Great shoes!" },
    { imgURL: customer2, customerName: "Jane Smith", rating: 4, feedback: "Very comfortable." },
];

export const footerLinks = [
    { title: "Company", links: [{ name: "About Us", link: "/about" }, { name: "Contact", link: "/contact" }] },
    { title: "Support", links: [{ name: "FAQ", link: "/faq" }, { name: "Help Center", link: "/help" }] },
];

export const socialMedia = [
    { src: facebook, alt: "Facebook" },
    { src: twitter, alt: "Twitter" },
    { src: instagram, alt: "Instagram" },
];
