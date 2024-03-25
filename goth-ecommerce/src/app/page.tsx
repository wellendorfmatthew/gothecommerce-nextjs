import Image from "next/image";
import Navbar from "./components/navbar";
import ANIME from '../../public/animegoth.jpg';
import CROPTOP from '../../public/gothcroptop.jpg';
import HOODIE from '../../public/gothhoodie.jpg';
import HOOD_CROPTOP from '../../public/handsonhips.jpg';
import SWEATER from '../../public/malegoth.jpg';
import SHORTS from '../../public/gothshorts.jpg';
import SKIRT from '../../public/gothskirt.jpg';
import TROUSERS from '../../public/womentrousers.jpg';
import PANTS from '../../public/gothpants.jpg';
import SWEATPANTS from '../../public/gothsweatpants.jpg';
import BRACE from '../../public/gothbrace.jpg';
import BEANIE from '../../public/gothbeanie.jpg';
import NECKLACE from '../../public/gothnecklace.jpg';
import COLLAR from '../../public/pinkcollar.jpg';
import SLEEVES from '../../public/gothsleeves.jpg';

export default function Home() {
  return (
    <div className="text-xl overflow-x-hidden">
      <Navbar />
      <div className="w-screen bg-black flex justify-center pb-2 pt-2 h-20">
        <h1 className="text-6xl text-white gravedigger-font cursor-pointer">Tops</h1>
      </div>
      <div className="grid grid-cols-5 w-screen">
          <div className="flex flex-col items-center border-r-4 border-black gap-5">
            <Image src={ANIME} alt="" className="cursor-pointer hover:scale-150 delay-300 w-full" />
            <p>Anime Goth Shirt</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-r-4 border-black gap-5">
            <Image src={CROPTOP} alt="" className="cursor-pointer" />
            <p>Gothic Croptop</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-r-4 border-black gap-5">
            <Image src={HOODIE} alt="" className="cursor-pointer" />
            <p>Gothic Hoodie</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-r-2 border-black gap-5">
            <Image src={HOOD_CROPTOP} alt="" className="cursor-pointer" />
            <p>Gothic Hooded Croptop</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-l-2 border-black gap-5">
            <Image src={SWEATER} alt="" className="cursor-pointer" />
            <p>Gothic Sweater</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
      </div>
      <div className="w-screen bg-black flex justify-center pb-2 pt-2 h-20">
        <h1 className="text-6xl text-white gravedigger-font cursor-pointer">Bottoms</h1>
      </div>
      <div className="grid grid-cols-5 w-screen">
          <div className="flex flex-col items-center border-r-4 border-black gap-5">
            <Image src={SHORTS} alt="" className="cursor-pointer" />
            <p>Gothic Shorts</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-r-4 border-black gap-5">
            <Image src={SKIRT} alt="" className="cursor-pointer" />
            <p>Gothic Skirt</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-r-4 border-black gap-5">
            <Image src={TROUSERS} alt="" className="cursor-pointer" />
            <p>Gothic Trousers</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-r-2 border-black gap-5">
            <Image src={PANTS} alt="" className="cursor-pointer" />
            <p>Gothic Pants</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-l-2 border-black gap-5">
            <Image src={SWEATPANTS} alt="" className="cursor-pointer" />
            <p>Gothic Sweatpants</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
      </div>
      <div className="w-screen bg-black flex justify-center pb-2 pt-2 h-20">
        <h1 className="text-6xl text-white gravedigger-font cursor-pointer">Accessories</h1>
      </div>
      <div className="grid grid-cols-5 w-screen">
          <div className="flex flex-col items-center border-r-4 border-black gap-5">
            <Image src={BRACE} alt="" className="cursor-pointer" />
            <p>Gothic Brace</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-r-4 border-black gap-5">
            <Image src={BEANIE} alt="" className="cursor-pointer" />
            <p>Gothic Beanie</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-r-4 border-black gap-5">
            <Image src={NECKLACE} alt="" className="cursor-pointer" />
            <p>Gothic Necklace</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-r-2 border-black gap-5">
            <Image src={COLLAR} alt="" className="cursor-pointer" />
            <p>Gothic Collar</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
          <div className="flex flex-col items-center border-l-2 border-black gap-5">
            <Image src={SLEEVES} alt="" className="cursor-pointer" />
            <p>Gothic Sleeves</p>
            <p className="font-semibold mb-5">$20.99</p>
          </div>
      </div>
    </div>
  );
}
