import React from "react";

const NewsBox = ({ key,title, image_url, read, description }) => {
  return (
    <div key={key} className="flex flex-row items-center justify-center p-4 w-fit">
      <div className="w-[400px] bg-white rounded-lg shadow-lg shadow-yellow-500">
        <div
          className="w-[90%] mx-auto mt-2 aspect-video bg-gray-200 rounded-t-lg bg-cover bg-center"
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        ></div>

        <div className="w-[90%] mx-auto py-4 flex flex-col gap-3 ">
          <h1 className="font-mono text-xl md:text-2xl">{title.slice(0,50)}...</h1>
          <p className="font-mono text-base md:text-lg ">
            {description.slice(0, 100)}...
          </p>
          <div>
            <button
              className="px-4 py-2 text-white transition-all duration-300 bg-red-700 rounded-full shadow-lg hover:bg-red-600 shadow-yellow-500 "
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
