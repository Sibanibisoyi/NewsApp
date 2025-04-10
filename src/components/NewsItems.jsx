import React from "react";
import NewsBox from "./NewsBox";
import { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";
function NewsItems() {
  const [isOpen, setOpen] = useState(false);
  const [response, setResponse] = useState([]);
  const [apidata, setApiData] = useState("us AND general");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${apidata}&apiKey=c841617635e943d4bff6eba7beeaeba3`
        );
        const data = await res.json();
        console.log(data.articles); // Now this will work as expected
        setResponse(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [apidata, query]);

  const handlechange = () => {
    setApiData(query);
    setQuery("");
  };

  let speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = new speechRecognition(0);
  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transscript = e.results[currentIndex][0].transcript;
    console.log(transscript);
    setApiData(transscript);
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full text-white bg-black">
        {/* Desktop Navbar */}
        <div className="items-center justify-center hidden h-20 md:flex">
          <div className="px-4 py-2 font-mono text-2xl text-center transition-all duration-300 bg-red-700 rounded-full shadow-lg hover:bg-red-600 hover:tracking-wider max-lg:text-xl shadow-yellow-500">
            <h1 className="animate-bounce">NewSApp</h1>
          </div>
          <ul className="flex flex-row items-center justify-center px-10 py-4 font-mono text-xl font-bold gap-15 max-lg:gap-2 max-lg:px-1 max-xl:px-5 max-xl:gap-5">
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={(e) => setApiData("business")}
            >
              Business
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={(e) => setApiData("entertainment")}
            >
              Entertainment
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={(e) => setApiData("general")}
            >
              General
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={(e) => setApiData("health")}
            >
              Health
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={(e) => setApiData("science")}
            >
              Science
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={(e) => setApiData("sports")}
            >
              Sports
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400"
              onClick={(e) => setApiData("technology")}
            >
              Technology
            </li>
          </ul>
        </div>

        {/* Mobile Navbar */}
        <div className="flex items-center justify-between h-20 px-4 py-4 md:hidden ">
          <div className="px-4 py-2 font-mono text-2xl text-center transition-all duration-300 bg-red-700 rounded-full shadow-lg hover:bg-red-600 shadow-yellow-500">
            <h1 className="animate-bounce">NewSApp</h1>
          </div>
          <button
            onClick={() => setOpen(!isOpen)}
            className="text-3xl font-bold text-white focus:outline-none"
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
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => setApiData("business")}
          >
            Business
          </a>
          <a
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => setApiData("entertainment")}
          >
            Entertainment
          </a>
          <a
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => setApiData("general")}
          >
            General
          </a>
          <a
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => setApiData("health")}
          >
            Health
          </a>
          <a
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => setApiData("science")}
          >
            Science
          </a>
          <a
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => setApiData("sports")}
          >
            Sports
          </a>
          <a
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => setApiData("technology")}
          >
            Technology
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-auto gap-5 py-20">
        <div
          className="flex items-center justify-center w-full h-auto gap-2 mt-3 text-white "
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your Area"
            className="w-1/2 h-10 font-mono font-bold text-center text-white border border-blue-500 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <FaMicrophone
            className="w-10 h-10 py-2 bg-blue-400 border rounded-full "
            onClick={() => {
              recognition.start();
            }}
          />
          <button
            className="px-5 py-2 font-bold bg-blue-400 border rounded-full shadow-md shadow-amber-100"
            onClick={handlechange}
          >
            Submit
          </button>
        </div>
        <div className="my-1 text-3xl font-bold text-center text-white">
          Latest{" "}
          <span className="px-5 py-1 font-mono bg-red-600 rounded-full shadow-md shadow-yellow-500">
            {" "}
            News
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full max-md:flex-col">
          {response.map((article) => {
            return (
              <NewsBox
                key={article.url}
                description={article.description || "No description available"}
                title={article.title || "No title available"}
                image_url={article.urlToImage || "no image available"}
                read={article.url || "#"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewsItems;
