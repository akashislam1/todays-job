import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-24 rounded-md">
      <div className="grid lg:grid-cols-5  p-14 gap-5">
        <div className="flex flex-col gap-5">
          <Link to="/" className="inline-flex items-center">
            <span className=" text-xl font-bold tracking-wide ">
              Today'S <span className="text-gradiant">JOB</span>
            </span>
          </Link>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div>
            <img src="../../../src/assets/Icons/Group_9969.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Company</h4>
          <p>
            <a href="/">About Us</a>
          </p>
          <p>
            <a href="/">Work</a>
          </p>
          <p>
            <a href="/">Latest News</a>
          </p>
          <p>
            <a href="/">Careers</a>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Product</h4>
          <p>
            <a href="/">Prototype</a>
          </p>
          <p>
            <a href="/"> Plans & Pricing</a>
          </p>
          <p>
            <a href="/">Customers</a>
          </p>
          <p>
            <a href="/">Integrations</a>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Support</h4>
          <p>
            <a href="/">Help Desk</a>
          </p>
          <p>
            <a href="/">Sales</a>
          </p>
          <p>
            <a href="/">Become a Partner</a>
          </p>
          <p>
            <a href="/">Developers</a>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold">Contact</h4>
          <p>524 Broadway , NYC </p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </div>
      <div className="border border-white mx-4"></div>
      <div className="flex justify-between px-14 py-6">
        <p>@2023 Today's Job. All Rights Reserved</p>
        <p>Powered by Today's Job</p>
      </div>
    </div>
  );
};

export default Footer;
