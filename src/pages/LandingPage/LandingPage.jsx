import React from "react";
import logo from "@/assets/logo.png";
import heroSectionImg1 from "@/assets/Property 1=Default.png";
import heroSectionImg2 from "@/assets/Property 1=Variant2.png";
import heroSectionImg3 from "@/assets/Property 1=Variant2.png";
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
import { ChevronLeft, ChevronRight, Instagram, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ReviewCard } from "@/components/custom/ReviewCard";

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

const images=[instagram1,instagram2,instagram3,instagram4]

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
  return (
    <div>
      {/* Header */}
      <header className="bg-[#472478] py-3 flex justify-between items-center px-5">
        <div>
          <img className="h-10" src={logo} />
        </div>
        <nav className="flex gap-5 text-white">
          <div className="text-sm font-medium">HOME</div>
          <div className="text-sm font-medium">ONAM COLLECTIONS</div>
          <div className="text-sm font-medium">MENS COLLECTIONS</div>
          <div className="text-sm font-medium">WOMENS COLLECTIONS</div>
          <div className="text-sm font-medium">SHOP ALL</div>
        </nav>
        <div className="bg-white p-1 rounded-lg flex gap-2 items-center text-[#472478]">
          <BiHeart size={20} />
          <BiShoppingBag />
          <div className="flex items-center">
            <h2>IN</h2>
            <BiCaretDown />
          </div>
        </div>
      </header>

      {/* Carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full h-[90vh]"
      >
        {/* Carousel */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full h-[100vh] relative"
        >
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem key={item.id}>
                <div className="relative w-full h-[91vh]  flex justify-center">
                  {/* Hero Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full object-contain"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Text Content */}
                  <div className="absolute bottom-20  z-10 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">
                      {item.title}
                    </h1>
                    <p className="text-lg md:text-2xl mb-6">{item.subtitle}</p>
                    <div className="flex justify-center items-center bg-white rounded-4xl px-4">
                      <input
                        type="text"
                        placeholder="discover your varali vibe..."
                        className="rounded-full px-6 py-3 w-[300px] md:w-[400px] text-black"
                      />
                      <BiSearch size={25} className="text-black" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Carousel>

      <div
        style={{
          backgroundImage: `url(${onamCollection})`,
          backgroundSize: "cover", // show entire image without cropping
          backgroundRepeat: "no-repeat", // prevent tiling
          backgroundPosition: "", // center the image
        }}
        className="relative w-full mt-1 text-white flex justify-between items-center py-5"
      >
        <div className="flex-1 px-10">
          <h1 className="text-xl">Onam Collection</h1>
          <p>
            Explore our exclusive Onam Collections, thoughtfully curated to
            bring elegance and tradition together for this festive season
          </p>
        </div>

        <div className="text-center flex-1 flex items-center justify-around">
          <div>
            <h4 className="text-2xl font-medium">28</h4>
            <p>Days</p>
          </div>
          <div>
            <h4 className="text-2xl font-medium">21</h4>
            <p>Hours</p>
          </div>
          <div>
            <h4 className="text-2xl font-medium">14</h4>
            <p>Minutes</p>
          </div>
          <div>
            <h4 className="text-2xl font-medium">50</h4>
            <p>Seconds</p>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Button className="bg-white hover:bg-white text-black">
            Shop Onam Collection
          </Button>
        </div>
      </div>

      {/* third section */}
      <div className="py-15 flex flex-col gap-5">
        <div>
          <h1 className="text-center text-[#472478] text-xl font-semibold">
            Varali Collection
          </h1>
        </div>
        <div className="relative w-full max-w-7xl mx-auto">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="gap-4">
              {varaliCollections.map((content, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/4 flex-shrink-0"
                >
                  <Card className="p-0 bg-transparent shadow-none rounded-none border-none">
                    <CardContent className="  flex flex-col justify-center  p-0 bg-transparent shadow-none rounded-none border-none">
                      {/* Replace with product image */}
                      <div className="w-full overflow-hidden">
                        <img
                          src={content.image}
                          alt={content.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h3 className="font-semibold">{content.name}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Previous button */}
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <ChevronLeft className="w-6 h-6" />
              </button>
            </CarouselPrevious>

            {/* Next button */}
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <ChevronRight className="w-6 h-6" />
              </button>
            </CarouselNext>
          </Carousel>
        </div>
      </div>

      {/* fourth section */}
      <div className="py-15 flex flex-col gap-5">
        <div>
          <h1 className="text-center text-[#472478] text-xl font-semibold">
            Varali Collection
          </h1>
        </div>
        <div className="relative w-full max-w-7xl mx-auto">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="gap-4">
              {bestSellings.map((content, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/4 flex-shrink-0"
                >
                  <Card className="p-0 bg-transparent shadow-none rounded-none border-none">
                    <CardContent className="  flex flex-col justify-center  p-0 bg-transparent shadow-none rounded-none border-none">
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

            {/* Previous button */}
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <ChevronLeft className="w-6 h-6" />
              </button>
            </CarouselPrevious>

            {/* Next button */}
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <ChevronRight className="w-6 h-6" />
              </button>
            </CarouselNext>
          </Carousel>
        </div>
      </div>

      {/* fifth section */}
      <div className="">
        <img src={crafteBanner} alt="" />
      </div>

      {/* sixth section */}
      <section className="py-10 px-4 md:px-10 ">
        <div className="bg-gray-100 rounded-xl shadow p-6 mb-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
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
          <Button className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-500">Write A Review</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </section>


      <section className="py-12 px-4 md:px-8 text-center bg-white">
      <h2 className="text-2xl font-semibold text-gray-900">Follow us on Instagram</h2>
      <p className="text-sm text-gray-600 mt-2">
        Join our community for daily inspiration and a closer look at our creations
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

    <footer>
      
    </footer>
    </div>
  );
};

export default LandingPage;
