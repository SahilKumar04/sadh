"use client";
import { HomeImage } from "@/assets/home";
import Image from "next/image";
import Link from "next/link";
import { Navigation, preorder } from "../const";
import { useRouter } from "next/navigation";
interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const router = useRouter();
  return (
    <div id="header" className="hidden bg-primary-500 opacity-90 md:flex items-center  lg:px-[130px] md:px-[20px] justify-between pt-[11px] pb-[2px] font-open-sans fixed top-0 w-full z-50">
      <div onClick={() => router.push("/")}>
        <Image src="sadhana_logo.svg" alt="Sadhana" width={165} height={50} />
      </div>
      <div className="flex justify-center items-center md:gap-[52px] lg:gap-[72px]">
        <ul style={{
          textShadow: "0px 4.482px 4.482px rgba(0, 0, 0, 0.25)"
        }} className="flex justify-center items-center text-[#024365] text-[13.447px] gap-[63px] font-[600]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
          <button className="bg-btn h-[30px] w-[100px] md:w-[100px] md:h-[40px] bg-cover bg-no-repeat bg-center glow text-[13.44px] md:text-[16px] text-white flex justify-center items-center font-[600]" onClick={() => router.push("/")}>
            Preorder
          </button>
          <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>

      </div>
    </div>
  );
};

export default Index;
