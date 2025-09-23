import React, { useRef } from "react";
import logo from "@/assets/logo.png";
import heroSectionImg1 from "@/assets/Property 1=Default.png";
import heroSectionImg2 from "@/assets/Property 1=Variant2.png";
import heroSectionImg3 from "@/assets/Property 1=Variant3.png";
import varaliCollectionImg1 from "@/assets/varali-collection-img-1.png";
import varaliCollectionImg2 from "@/assets/varali-collection-img-2.png";
import varaliCollectionImg3 from "@/assets/varali-collection-img-3.png";
import varaliCollectionImg4 from "@/assets/varali-collection-img-4.png";
import bestSellingImg1 from "@/assets/best-selling-img-1.png";
import bestSellingImg2 from "@/assets/best-selling-img-2.png";
import bestSellingImg3 from "@/assets/best-selling-img-3.png";
import bestSellingImg4 from "@/assets/best-selling-img-4.png";
import instagram1 from "@/assets/instagram-1.png";
import instagram2 from "@/assets/instagram-2.png";
import instagram3 from "@/assets/instagram-3.png";
import instagram4 from "@/assets/instagram-4.png";
import crafteBanner from "@/assets/crafterbanner.png";
import footerimg from "@/assets/footerimg.png";
import onamCollection from "@/assets/onam-collection.png";
import { BiCaretDown, BiHeart, BiSearch, BiShoppingBag } from "react-icons/bi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Instagram,
  Menu,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ReviewCard } from "@/components/custom/ReviewCard";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const carouselItems = [
  {
    id: 1,
    image: heroSectionImg1,
    title: "EVERY STITCH TELLS YOUR STORY",
    subtitle: "MAKE IT A VARALI ORIGINAL",
  },
  {
    id: 2,
    image: heroSectionImg2,
    title: "FESTIVE WEARS WITH A TOUCH OF TRADITION",
    subtitle: "CELEBRATE IN STYLE",
  },
  {
    id: 3,
    image: heroSectionImg3,
    title: "CRAFTED WITH LOVE",
    subtitle: "EXPERIENCE AUTHENTIC DESIGNS",
  },
];

const varaliCollections = [
  {
    image: varaliCollectionImg1,
    name: "Men's Collections",
  },

  {
    image: varaliCollectionImg2,
    name: "Women's Collections",
  },
  {
    image: varaliCollectionImg3,
    name: "Ajrakh Handpicked Shirts",
  },
  {
    image: varaliCollectionImg4,
    name: "Saree Collections",
  },
];
const bestSellings = [
  {
    image: bestSellingImg1,
    name: "POOVILI - Printed Dothi and Linen Shi...",
    price: "4,899.0",
  },

  {
    image: bestSellingImg2,
    name: "POOVILI - Printed Dothi and Linen Shi...",
    price: "4,899.0",
  },
  {
    image: bestSellingImg3,
    name: "POOVILI - Printed Dothi and Linen Shi...",
    price: "4,899.0",
  },
  {
    image: bestSellingImg4,
    name: "POOVILI - Printed Dothi and Linen Shi...",
    price: "4,899.0",
  },
];

const images = [instagram1, instagram2, instagram3, instagram4];

const reviews = [
  {
    name: "John Smith",
    title: "CEO",
    company: "Tech Innovations Inc",
    date: "March 1, 2024",
    review:
      "Exceptional service! The team exceeded our expectations and delivered a top-notch product on time.",
    initial: "J",
  },
  {
    name: "Sarah Johnson",
    title: "Marketing Manager",
    company: "Bright Solutions",
    date: "February 15, 2024",
    review:
      "Working with this company was a game-changer. Their attention to detail are unmatched!",
    initial: "S",
  },
  {
    name: "Michael Brown",
    title: "Founder",
    company: "Brown & Co.",
    date: "January 10, 2024",
    review:
      "A fantastic experience from start to finish. Highly recommended for anyone looking for quality work!",
    initial: "M",
  },
  {
    name: "Emily Davis",
    title: "HR Director",
    company: "Global Enterprises",
    date: "December 20, 2023",
    review:
      "Great customer support and seamless service. The team truly cares about their clients.",
    initial: "E",
  },
];

const LandingPage = () => {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }))
  return (
    <div>
      {/* Header */}
      <header className="bg-[#472478] text-white">
        <div className="mx-auto flex items-center justify-between px-4 py-3 md:px-6">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Varali" className="h-8 w-auto" />
          </div>

          {/* Center: Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium">
              HOME
            </a>
            <a href="#" className="text-sm font-medium">
              ONAM COLLECTIONS
            </a>
            <a href="#" className="text-sm font-medium">
              MENS COLLECTIONS
            </a>
            <a href="#" className="text-sm font-medium">
              WOMENS COLLECTIONS
            </a>
            <a href="#" className="text-sm font-medium">
              SHOP ALL
            </a>
          </nav>

          {/* Right: Icons / Region */}
          <div className="hidden md:flex bg-white text-[#472478] p-1 rounded-lg items-center gap-2">
            <BiHeart size={20} aria-hidden="true" />
            <BiShoppingBag size={22} aria-hidden="true" />
            <div className="flex items-center">
              <span className="text-xs font-semibold">IN</span>
              <BiCaretDown aria-hidden="true" />
            </div>
          </div>

          {/* Mobile: Sheet menu trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md text-white hover:bg-white/10">
                  {/* You can replace this with an icon like BiMenu */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-72 bg-gradient-to-b from-[#472478] to-[#2d174e] text-white shadow-lg"
              >
                <SheetHeader>
                  <SheetTitle className="text-white text-lg font-bold tracking-wide">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 flex flex-col gap-2">
                  {[
                    "HOME",
                    "ONAM COLLECTIONS",
                    "MENS COLLECTIONS",
                    "WOMENS COLLECTIONS",
                    "SHOP ALL",
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="relative text-sm font-medium px-3 py-2 rounded-md 
                   hover:bg-white/10 hover:pl-4 transition-all duration-200"
                    >
                      {item}
                      <span className="absolute bottom-0 left-3 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-[60%]" />
                    </a>
                  ))}
                </nav>

                <div className="mt-8 border-t px-2 border-white/20 pt-4 flex items-center justify-between">
                  {/* Left Side */}
                  <div className="flex gap-2 text-sm font-medium">
                    <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer hover:bg-white/20 transition">
                      <Heart /> Wishlist
                    </span>
                    <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer hover:bg-white/20 transition">
                      <ShoppingCart /> Cart
                    </span>
                  </div>

                  {/* Right Side */}
                  <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer hover:bg-white/20 transition">
                    IN <span className="text-[10px]">▼</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section aria-label="Hero carousel" className="relative">
        <Carousel plugins={[autoplay.current]} className="w-full">
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="min-h-[30vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh]"
              >
                <div className="relative h-[30vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] w-full">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="absolute inset-0 h- w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-black/30"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-4 bottom-10 z-10 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-2 text-balance">
                      {item.title}
                    </h1>
                    <p className="text-md sm:text-lg md:text-2xl mb-6">{item.subtitle}</p>
                    <div className="flex items-center bg-white/95  rounded-full pl-4  pr-5 py-2">
                      <input
                        type="text"
                        placeholder="discover your varali vibe..."
                        className="rounded-full px-3 py-2 w-[260px] md:w-[600px] text-black focus:outline-none bg-transparent"
                        aria-label="Search Varali"
                        onFocus={() => autoplay.current.stop()} // stop on focus
                        onBlur={() => autoplay.current.reset()} // resume on blur
                      />
                      <BiSearch
                        size={22}
                        className="text-black"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Optional controls */}
          <CarouselPrevious className="left-2 md:left-4" />
          <CarouselNext className="right-2 md:right-4" />
        </Carousel>
      </section>

      <div
        style={{
          backgroundImage: `url(${onamCollection})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="relative w-full text-white py-8 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Onam Collection
          </h1>
          <p className="text-sm md:text-base">
            Explore our exclusive Onam Collections, thoughtfully curated to
            bring elegance and tradition together for this festive season.
          </p>
        </div>

        {/* Countdown Section */}
        <div className="flex-1 flex justify-center md:justify-around text-center gap-4">
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold">28</h4>
            <p className="text-sm md:text-base">Days</p>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold">21</h4>
            <p className="text-sm md:text-base">Hours</p>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold">14</h4>
            <p className="text-sm md:text-base">Minutes</p>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold">50</h4>
            <p className="text-sm md:text-base">Seconds</p>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex-1 flex justify-center mt-4 md:mt-0">
          <Button className="bg-white hover:bg-gray-200 text-black px-6 py-2">
            Shop Onam Collection
          </Button>
        </div>
      </div>

      {/* third section */}
      <section className="py-10 md:py-14 flex flex-col gap-6">
        <div className="mb-5">
          <h1 className="text-[#472478] font-posterama text-center text-xl md:text-2xl font-semibold">
            Varali Collections
          </h1>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="gap-4">
              {varaliCollections.map((content, index) => (
                <CarouselItem
                  key={index}
                  // - mobile shows ~85% to hint next slide
                  // - sm: 2 per view, md: 3, lg: 4, xl: 5
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4  flex-shrink-0"
                >
                  <Card className="p-0 bg-transparent shadow-none rounded-none border-none">
                    <CardContent className="p-0 bg-transparent shadow-none rounded-none border-none">
                      <div className="w-full overflow-hidden rounded-md">
                        <div className="relative w-full aspect-[3/4]">
                          <img
                            src={content.image || "/placeholder.svg"}
                            alt={content.name}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="mt-2">
                        <h3 className="font-semibold text-sm md:text-base">
                          {content.name}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className=" sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-background/90 border shadow hover:bg-background focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Previous products"
            />
            <CarouselNext
              className="= sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-background/90 border shadow hover:bg-background focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Next products"
            />
          </Carousel>
        </div>
      </section>

      {/* fourth section */}
      <section className="py-10 md:py-14 flex flex-col gap-6">
        <div className="mb-5">
          <h1 className="text-[#472478] font-posterama text-center text-xl md:text-2xl font-semibold">
            Best Selling
          </h1>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="gap-4">
              {bestSellings.map((content, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4  flex-shrink-0"
                >
                  <Card className="p-0 bg-transparent shadow-none rounded-none border-none">
                    <CardContent className=" flex flex-col justify-center  p-0 bg-transparent shadow-none rounded-none border-none">
                      {/* Replace with product image */}
                      <div className="w-full overflow-hidden relative">
                        <img
                          src={content.image}
                          alt={content.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="border-2 rounded-full p-1 absolute top-2 right-2 z-10 text-white">
                          <BiHeart />
                        </div>
                      </div>
                      <div className="">
                        <h3 className="text-sm">{content.name}</h3>
                        <h3 className="font-semibold">Rs. {content.price}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className=" sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-background/90 border shadow hover:bg-background focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Previous products"
            />
            <CarouselNext
              className="= sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-background/90 border shadow hover:bg-background focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Next products"
            />
          </Carousel>
        </div>
      </section>

      {/* fifth section */}
      <div className="w-full">
        <img src={crafteBanner} className="w-full" alt="" />
      </div>

      {/* sixth section */}
      <section className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="bg-gray-100 rounded-xl shadow p-6 mb-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4  flex-col sm:flex-row ">
            <h2 className="text-xl font-semibold flex items-center">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.SqEICC59PL1VrdefhGEqqgHaCg?pid=Api&P=0&h=180"
                alt="Google"
                className=" h-6 mr-2"
              />
              Rating
            </h2>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">(420 reviews)</span>
          </div>
          <Button className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-500">
            Write A Review
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 text-center  bg-white">
        <h2 className="text-2xl font-semibold text-gray-900">
          Follow us on Instagram
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Join our community for daily inspiration and a closer look at our
          creations
        </p>
        <Button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white">
          Visit Instagram
        </Button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-6xl mx-auto">
          {images.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Instagram post ${index + 1}`}
                className="w-full aspect-square object-cover rounded-md"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                <Instagram className="w-4 h-4 text-black" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer
        className="text-white py-10 px-4 md:px-20"
        style={{
          backgroundImage: `url(${footerimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="grid md:grid-cols-4 gap-8">
          {/* Links Section */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">All Collections</a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 text-xl">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Policy Section */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Policies</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Terms of Services</a>
              </li>
            </ul>
          </div>

          {/* Spacer for layout */}
          <div className="hidden md:block"></div>

          {/* Contact Section */}
          <div className="space-y-2 text-sm">
            <div className="text-2xl font-bold relative -left-5">
              <img src={logo} alt="" className="h-14" />
            </div>
            <div className="flex items-start space-x-2">
              <i className="fas fa-map-marker-alt mt-1" />
              <span>
                VARNA GS, VARALI CLOTHING Co,
                <br />
                Near Tali Temple, Calicut
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-envelope" />
              <span>varaliclothing06@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone" />
              <span>+91 8891 273 712</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-clock" />
              <span>7 AM to 11 PM</span>
            </div>
          </div>
        </div>

        {/* Divider and Bottom Copyright */}
        <hr className="my-6 border-gray-400" />
        <div className="text-center text-sm">© 2025 - Varali Clothing</div>
      </footer>
    </div>
  );
};

export default LandingPage;
