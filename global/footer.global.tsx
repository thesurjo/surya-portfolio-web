"use client";
import { copyright } from "@/data/home.data";
import { ScrollToTop } from "@/widgets/global/page";

export default function Footer() {
    return <>
        <footer className="rounded-lg w-full mt-16">
            <div className="w-full mx-auto py-4 px-12 md:px-40  md:flex md:items-center md:justify-between">
                <p className="font-jetbrains text-center md:text-start text-[14px] md:text-[16px]">{copyright}</p>
                <ul className="flex flex-wrap items-center justify-center md:justify-end mt-3 font-medium text-gray-500 dark:text-gray-400 md:mt-0">
                    <li>
                        <a href="/#about" className="hover:underline text-[14px] md:text-[16px]"><p className="font-jetbrains mr-7">About</p></a>
                    </li>
                    <li>
                        <a href="/privacy-policy" className="hover:underline text-[14px] md:text-[16px]"><p className="font-jetbrains mr-7">Privacy Policy</p></a>
                    </li>
                    <li>
                        <a href="/#contact" className="hover:underline text-[14px] md:text-[16px]"><p className="font-jetbrains">Contact</p></a>
                    </li>
                </ul>
            </div>
        </footer>
        <ScrollToTop/>
    </>
}