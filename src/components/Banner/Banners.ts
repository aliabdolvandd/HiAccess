interface IBanner {
  id: number;
  image: string;
  title: string;
  description?: string;
  buttonText: string;
}

const banners: IBanner[] = [
  {
    id: 1,
    image: "/images/banner1.jpg",
    title: "بروزترین ها را از ما بخواهید",
    description: "همین حالا خرید کن",
    buttonText: "خرید کنید",
  },
  {
    id: 2,
    image: "/images/banner2.jpg",
    title: "فقط تصویرونیم کین",
    description: "لوائح جانبی",
    buttonText: "خرید کنید",
  },
  {
    id: 3,
    image: "/images/banner3.jpg",
    title: "مجهل و شنت",
    description: "HiAccess",
    buttonText: "خرید کنید",
  },
];

export default banners;
