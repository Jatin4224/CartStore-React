import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const response = await data.json();
      setPosts(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {posts.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center mt-8">No Data Found</div>
      )}
    </div>
  );
};

export default Home;
