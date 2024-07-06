import React from "react";
import { Contact } from "../src/component/contact/Contact";
import { Image } from "antd";

const page = () => {
  return (
    <div className="h-screen flex flex-col gap-12 justify-center items-center duration-300 bg-white dark:bg-black">
      <Image src="/spinner.gif" alt="no-found" className="max-w-[400px]" />
      <h1 className="text-3xl font-bold text-center dark:text-white">
        Page Not Found
      </h1>
    </div>
  );
};

export default page;
