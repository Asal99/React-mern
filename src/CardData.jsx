import { Card } from "./card";

const courses = [
  {
    image:
      "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
    title: "MERN Training in Nepal",
    description:
      "MERN Stack Training in Nepal is carefully crafted to give you the skills and hands-on experience.",
    duration: "12 weeks",
    lessons: 1,
    author: "Suryaraj Timsina",
    rating: 0,
    tag: "Beginner",
  },
  {
    image:
      "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    title: "MERN Course",
    description:
      "TechAxis’s MERN Stack Training in Nepal is carefully crafted to give you the skills and hands-on experience.",
    duration: "12 weeks",
    lessons: 2,
    author: "Mern Stack",
    rating: 0,
    tag: "All",
  },
];

export default function CardData() {
  return (
    <div className="card-container">
      {courses.map((course, i) => (
        <Card key={i} {...course} />
      ))}
    </div>
  );
}
