import React from "react";

const Contact = () => {
  return (
    <div
      className=" max-w-[1140px] w-full h-full mx-auto flex flex-col items-center p-4"
      id="contact"
    >
      <h1 className=" text-lg font-semibold">Send us a message</h1>
      <p>we're stand by!</p>
      <div className=" flex items-center justify-center my-4">
        <img
          className="w-full h-full object-cover p-2"
          src="https://www.hdwallpapers.in/download/silhouette_island_beach_aerial_view_4k-3840x2160.jpg"
          alt=""
          sizes=""
          srcset=""
        />
      </div>
      <div className="grid grid-cols-2">
        <input
          className="border border-gray-400 p-2 m-2 outline-none"
          type="text"
          placeholder="Enter Your First Name"
        />
        <input
          className="border border-gray-400 p-2 m-2 outline-none"
          type="text"
          placeholder="Enter Your Last Name"
        />

        <input
          className="border border-gray-400 p-2 m-2 outline-none"
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          className="border border-gray-400 p-2 m-2 outline-none"
          type="text"
          placeholder="Enter Your Phone"
        />

        <input
          className="border border-gray-400 col-span-2 p-2 m-2 outline-none"
          type="text"
          placeholder="Enter Your Address"
        />
        <textarea
          className="border border-gray-400 p-2 m-2 col-span-2 outline-none"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter Your message here"
        ></textarea>
        <button className=" col-span-2 m-2">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
