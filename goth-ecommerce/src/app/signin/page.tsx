import Image from "next/image";
import Link from "next/link";
import LOGO from '../../../public/updatedgglogo.png';
export default function Signin() {
    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col">
            {/*<Image src={LOGO} alt="" className="w-[250px] h-[250px]" />*/}
            <div className="flex items-center flex-col border-black border-2 p-10 px-20">
                <p className="gravedigger-font text-5xl font-semibold mb-20">Login</p>
                <div className="flex items-center flex-col w-80">
                    <input type="text" className="border-black border-2 w-full h-12 pl-1" placeholder="Email" />
                    <div className="w-full h-12 flex items-center justify-center"></div>
                    <input type="password" className="border-black border-2 w-full h-12 pl-1" placeholder="Password" />
                    <div className="w-full h-12 flex items-center justify-center"></div>
                    <button className="w-full h-12 font-semibold bg-black text-white border-2 border-black hover:text-black hover:bg-white transition-all delay-75">Login</button>
                    <div className="w-full h-12 flex items-center justify-center"></div>
                </div>
                <p>Don't have an account? <Link href={"/signup"} className="font-semibold hover:underline">Sign up here</Link></p>
            </div>
        </div>
    )
}
