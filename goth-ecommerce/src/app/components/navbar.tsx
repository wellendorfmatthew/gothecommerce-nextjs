'use client'
import Image from "next/image";
import Link from "next/link";
import HAMBURGER from '../../../public/more.png';
import LOGO from '../../../public/updatedgglogo.png';
import SEARCH from '../../../public/searchbar-icon.png';
import ANIME from '../../../public/animegoth.jpg';
import BEANIE from '../../../public/gothbeanie.jpg';
import BRACE from '../../../public/gothbrace.jpg';
import CROP from '../../../public/gothcroptop.jpg';
import HOODIE from '../../../public/gothhoodie.jpg';
import CART from '../../../public/cart.png';
import AVATAR from '../../../public/avatar.png';
import { useState } from "react";

export default function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [list, setList] = useState([
        {name: "Anime Goth Shirt", image: ANIME},
        {name: "Gothic Beanie", image: BEANIE}, 
        {name: "Gothic Brace", image: BRACE},
        {name: "Gothic Croptop", image: CROP},
        {name: "Gothic Hoodie", image: HOODIE}
    ])

    // const handleHamburgerMenu() => {
    //     setClicked(!clicked);

    //     if (clicked)
    // }
  return (
    <div className="overflow-hidden">
        <div className="w-screen flex items-center justify-between">
            <Link href={"/"}><Image src={LOGO} alt="menu" className="w-[100px] h-[100px]  cursor-pointer" /></Link>
            <div className="flex items-center gap-1 w-[400px] h-[50px] border-2 border-black">
                <Image src={SEARCH} alt="search" className="ml-2" />
                <input type="text" className="text-md bg-transparent outline-none w-full ml-2 pr-5" />
            </div>
            <div className="flex items-center gap-10">
                <Image src={HAMBURGER} alt="menu" className="w-[32px] h-[32px] cursor-pointer mr-16" onClick={() => setClicked(!clicked)} />
            </div>
        </div>
        {
            clicked && (
                <div className="absolute right-0 top-[72px] h-screen w-[350px] bg-white border-black border-2">
                    <p className="text-3xl gravedigger-font font-semibold mt-5 text-center cursor-pointer hover:opacity-70">Products</p>
                    <hr className="border-black border-1 w-full mt-5" />
                    <p className="text-3xl gravedigger-font font-semibold mt-5 text-center cursor-pointer hover:opacity-70">About Us</p>
                    <hr className="border-black border-1 w-full mt-5" />
                    <p className="text-3xl gravedigger-font font-semibold mt-5 text-center cursor-pointer hover:opacity-70">Contact</p>
                    <hr className="border-black border-1 w-full mt-5" />
                    <p className="text-3xl gravedigger-font font-semibold mt-5 text-center cursor-pointer hover:opacity-70">Cart</p>
                    <hr className="border-black border-1 w-full mt-5" />
                    <p className="text-3xl gravedigger-font font-semibold mt-5 text-center cursor-pointer hover:opacity-70">Sign In</p> 
                </div>
            )
        }
        <hr className="border-black border-1 w-screen" />
        {/*
            clicked && (
                <div className="w-screen h-[400px] bg-black flex items-center gap-8 justify-center z-50 absolute">
                    {
                        list.map((item, index) => {
                            return (
                                <div className="flex flex-col items-center justify-center cursor-pointer gap-4" key={index}>
                                    <Image src={item.image} className="w-[200px] h-[250px]" alt="" />
                                    <p className="text-md text-center text-white">{item.name}</p>
                                    <p className="text-md text-center font-semibold text-white">$20.99</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
                */}
    </div>
  );
}
