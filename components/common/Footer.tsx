"use client";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaRegStar } from "react-icons/fa";
import { BsGlobe, BsShieldCheck } from "react-icons/bs";

import logo from "../../public/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-bgwhite-40 text-textblack-100 w-full py-6 mt-12 shadow-md">
      <div className="">
        {/* ===== Top Grid ===== */}
        <div
          className="
            grid grid-cols-1 
            md:grid-cols-2
            lg:grid-cols-4 
            gap-8 md:gap-6 lg:gap-8
            px-4 sm:px-6 md:px-8
            lg:pl-30 lg:pr-30 
            pb-8 md:pb-10
          "
        >
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            <Link href="/">
              <div className="flex justify-start">
                <Image
                  src={logo}
                  alt="BROOKS MM INTERNATIONAL"
                  width={166}
                  height={80}
                  className="w-40 md:w-44 lg:w-48"
                />
              </div>
            </Link>
            <p className="text-left text-sm leading-relaxed">
              For you, we will do it
            </p>
            <div className="flex justify-start gap-3 md:gap-4 text-2xl text-text-light-60">
              <FaXTwitter className="cursor-pointer border p-2 text-3xl md:text-4xl border-accent-100 fill-primary-100 rounded-md hover:border-secondary-80 transition" />
              <FaInstagram className="cursor-pointer border p-2 text-3xl md:text-4xl border-accent-100 fill-primary-100 rounded-md hover:border-secondary-80 transition" />
              <FaFacebook className="cursor-pointer border p-2 text-3xl md:text-4xl border-accent-100 fill-primary-100 rounded-md hover:border-secondary-80 transition" />
            </div>
            <p className="text-left text-sm leading-relaxed">
              info@brooksmm.com{" "}
            </p>
            <p className="text-left text-sm leading-relaxed">Lagos, Nigeria</p>
          </div>

          {/* Shop & Learn */}
          <div className="text-left">
            <h2 className="mb-4 text-lg md:text-xl font-bold text-primary-100">
              Shop & Learn
            </h2>
            <ul className="flex flex-col gap-3 md:gap-4 text-sm">
              <Link href="" className="hover:text-primary-100 transition-colors">Join Waitlist</Link>
              <Link href="" className="hover:text-primary-100 transition-colors">About Us</Link>
              <Link href="" className="hover:text-primary-100 transition-colors">Contact</Link>
            </ul>
          </div>

          {/* Support & Policies*/}
          <div className="text-left">
            <h2 className="mb-4 text-lg md:text-xl font-bold text-primary-100">
              Support & Policies
            </h2>
            <ul className="flex flex-col gap-3 md:gap-4 text-sm">
              <Link href="" className="hover:text-primary-100 transition-colors">Shipping & Delivery</Link>
              <Link href="" className="hover:text-primary-100 transition-colors">Unsubscribe</Link>
              <Link href="" className="hover:text-primary-100 transition-colors">Delete my data</Link>
            </ul>
          </div>

          {/* Why choose BROOKS MM */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="mb-4 text-lg md:text-xl font-bold text-primary-100 text-left">
              Why choose BROOKS MM
            </h2>
            <ul className="flex flex-col gap-4 md:gap-5 text-sm">
              <Link href="" className="hover:text-primary-100 transition-colors">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="text-primary-100 text-xl md:text-2xl border-accent-100 border p-2 rounded-md flex items-center justify-center shrink-0">
                    <BsGlobe />
                  </div>
                  <div className="flex flex-col text-left">
                    <p className="font-medium">Global delivery</p>
                    <p className="text-xs text-textblack-80">EU/US shipping options</p>
                  </div>
                </div>
              </Link>
              <Link href="" className="hover:text-primary-100 transition-colors">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="text-primary-100 text-xl md:text-2xl border-accent-100 border p-2 rounded-md flex items-center justify-center shrink-0">
                    <BsShieldCheck />
                  </div>
                  <div className="flex flex-col text-left">
                    <p className="font-medium">Secure signup</p>
                    <p className="text-xs text-textblack-80">Secure verification</p>
                  </div>
                </div>
              </Link>
              <Link href="" className="hover:text-primary-100 transition-colors">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="text-primary-100 text-xl md:text-2xl border-accent-100 border p-2 rounded-md flex items-center justify-center shrink-0">
                    <FaRegStar />
                  </div>
                  <div className="flex flex-col text-left">
                    <p className="font-medium">Affordable luxury</p>
                    <p className="text-xs text-textblack-80">Premium, accessible pricing</p>
                  </div>
                </div>
              </Link>
            </ul>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="px-4 sm:px-6 md:px-8 lg:pl-30 lg:pr-30">
          <div className="flex p-4 md:p-6 flex-col md:flex-row md:justify-between justify-center items-center gap-4 border-t border-primary-20 md:border-primary-100">
            <p className="text-xs md:text-sm text-left">
              &copy;{new Date().getFullYear()} BROOKS MM INTERNATIONAL
            </p>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm">
              <Link href="" className="text-left hover:text-primary-100 transition-colors">
                Authentic African fabrics • Delivered worldwide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}