"use client";
import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { user } = useUser();

  const [dropDownMenu, setDropDownMenu] = useState(false);
  return (
    <div className="sticky top-0 z-10 px-10 flex justify-between items-center bg-white">
      <Link href="/">
        <Image alt="logo" src="/logo.png" width={130} height={100} />
      </Link>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
        >
          <ShoppingCart className="" />
          <p className="text-base-bold">Cart (0)</p>
        </Link>
        {user && (
          <Menu
            onClick={() => setDropDownMenu(!dropDownMenu)}
            className="cursor-pointer"
          />
        )}
        {user && dropDownMenu && (
          <div className="absolute flex flex-col gap-2 p-3 rounded-lg border bg-white ext-base-bold top-10 right-5">
            <Link className="hover:text-red-1" href="/wishlist">
              Wishlist
            </Link>
            <Link className="hover:text-red-1" href="/Orders">
              Orders
            </Link>
          </div>
        )}
        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
