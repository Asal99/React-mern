import { useEffect, useState } from "react";
import { ProductCard } from "../../ProductCard";

export const NewsLists = () => {
  const [query, setQuery] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchJson = async () => {
    try {
      const categoryParam =
        selectedCategory === "all" ? "" : `&category=${selectedCategory}`;

      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us${categoryParam}&apiKey=07fe6c17b56f4345b1c6003bcae87cae`,
      );

      const finalResult = await response.json();
      setQuery(finalResult.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJson();
  }, [selectedCategory]);

  return (
    <>
      <div className="flex gap-4 items-center mb-6 flex-wrap">
        <button
          onClick={() => setSelectedCategory("all")}
          className="p-4 bg-gray-300"
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("technology")}
          className="p-4 bg-gray-300"
        >
          Technology
        </button>
        <button
          onClick={() => setSelectedCategory("business")}
          className="p-4 bg-gray-300"
        >
          Business
        </button>
        <button
          onClick={() => setSelectedCategory("sports")}
          className="p-4 bg-gray-300"
        >
          Sports
        </button>
        <button
          onClick={() => setSelectedCategory("entertainment")}
          className="p-4 bg-gray-300"
        >
          Entertainment
        </button>
        <button
          onClick={() => setSelectedCategory("science")}
          className="p-4 bg-gray-300"
        >
          Science
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {query.map((item) => (
          <ProductCard key={item.url} item={item} showPrice={false} />
        ))}
      </div>
    </>
  );
};
