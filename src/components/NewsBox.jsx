import React from "react";

const NewsBox = ({ title, image_url, read, description }) => {
  return (
    <div className="w-fit flex flex-row justify-center items-center p-4">
      <div className="w-[400px] bg-white rounded-lg shadow-lg shadow-yellow-500">
        <div
          className="w-[90%] mx-auto mt-2 aspect-video bg-gray-200 rounded-t-lg bg-cover bg-center"
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        ></div>

        <div className="w-[90%] mx-auto py-4 flex flex-col gap-3 ">
          <h1 className="text-xl md:text-2xl font-mono">{title.slice(0,50)}...</h1>
          <p className="text-base md:text-lg font-mono ">
            {description.slice(0, 100)}...
          </p>
          <div>
            <button
              className="bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all duration-300 shadow-lg shadow-yellow-500
          "
            >
              <a href={read}>Read More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
