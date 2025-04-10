import React from "react";
import NewsBox from "./NewsBox";
import { useState, useEffect } from "react";
function NewsItems() {
  const [isOpen, setOpen] = useState(false);
  const [response, setResponse] = useState([]);
  const [apidata, setApiData] = useState("us AND general");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/latest?apikey=pub_7947310a754800ac4a6a275c685fd0bbe0492&q=${apidata}`
        );
        const data = await res.json();
        console.log(data.results); // Now this will work as expected
        setResponse(data.results);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [apidata,query]);

  const handlechange = () => {
    setApiData(query);
    setQuery("");
  }

  return (
    <>
      <div className="w-full bg-black fixed top-0 left-0 z-50 text-white">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-center items-center h-20">
          <div className="text-2xl font-mono text-center bg-red-700 rounded-full px-4 py-2 hover:bg-red-600 hover:tracking-wider max-lg:text-xl transition-all duration-300 shadow-lg shadow-yellow-500">
            <h1 className="animate-bounce">NewSApp</h1>
          </div>
          <ul className="flex flex-row justify-center items-center px-10 py-4 gap-15 text-xl font-mono font-bold max-lg:gap-2 max-lg:px-1 max-xl:px-5 max-xl:gap-5">
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={(e) => setApiData("business")}
            >
              Business
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={(e) => setApiData("entertainment")}
            >
              Entertainment
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={(e) => setApiData("general")}
            >
              General
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={(e) => setApiData("health")}
            >
              Health
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={(e) => setApiData("science")}
            >
              Science
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={(e) => setApiData("sports")}
            >
              Sports
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={(e) => setApiData("technology")}
            >
              Technology
            </li>
          </ul>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center px-4 py-4 h-20 ">
          <div className="text-2xl font-mono text-center bg-red-700 rounded-full px-4 py-2 hover:bg-red-600 transition-all duration-300 shadow-lg shadow-yellow-500">
            <h1 className="animate-bounce">NewSApp</h1>
          </div>
          <button
            onClick={() => setOpen(!isOpen)}
            className="text-white text-3xl font-bold focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden text-white flex flex-col items-center gap-4 text-2xl font-mono font-bold  bg-gray-800 w-full absolute top-20 left-0 py-6 transition-all duration-600 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <a
            className="hover:text-yellow-400 cursor-pointer"
            onClick={() => setApiData("business")}
          >
            Business
          </a>
          <a
            className="hover:text-yellow-400 cursor-pointer"
            onClick={() => setApiData("entertainment")}
          >
            Entertainment
          </a>
          <a
            className="hover:text-yellow-400 cursor-pointer"
            onClick={() => setApiData("general")}
          >
            General
          </a>
          <a
            className="hover:text-yellow-400 cursor-pointer"
            onClick={() => setApiData("health")}
          >
            Health
          </a>
          <a
            className="hover:text-yellow-400 cursor-pointer"
            onClick={() => setApiData("science")}
          >
            Science
          </a>
          <a
            className="hover:text-yellow-400 cursor-pointer"
            onClick={() => setApiData("sports")}
          >
            Sports
          </a>
          <a
            className="hover:text-yellow-400 cursor-pointer"
            onClick={() => setApiData("technology")}
          >
            Technology
          </a>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col justify-center items-center py-20 gap-5">
        <div className="w-full text-white flex justify-center items-center gap-2  mt-3 h-auto
        ">
          <input type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your Area" 
          className="border w-1/2 h-10 rounded-full text-center text-white font-mono font-bold  border-blue-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <button className="border py-2 px-5 rounded-full bg-blue-400 shadow-md shadow-amber-100 font-bold" onClick={handlechange} >Submit</button>
        </div>
        <div className="text-3xl text-white font-bold text-center my-1">
          Latest{" "}
          <span className="bg-red-600 px-5 py-1 rounded-full font-mono animate-bounce">
            {" "}
            News
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full max-md:flex-col">
          {response.map((article) => {
            return (
              <NewsBox
                key={article.article_id}
                description={article.description || "No description available"}
                title={article.title}
                image_url={article.image_url}
                read={article.link}
              />
            )
          })}
        </div>
      </div>
    </>
  );
}

export default NewsItems;
