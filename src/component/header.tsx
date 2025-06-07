import { AlignJustify } from "lucide-react";
import {  links } from "./mobile-nav";


export default function Header(){
    

   // This is a simple header component for a job portal website. 

    return (
        <header className="flex justify-between items-center">
            <div className="image-holder">
                <img src={"/logo.png"} alt="our logo"/>
            </div>
            <nav className="hidden lg:flex">
               { links.map((link, index) => (
                    <a key={index} href={link.href} className="mx-2 hover:text-link-green text-gray-700 transition hover:underline border-link-green pb-1">
                        {link.name}
                    </a>
               ))}   
                
            </nav>

            <div className="hidden lg:flex items-center space-x-4 gap-2">
                    <a href="#" className="bg-link-green/10 hover:bg-link-green/20  transition p-2 rounded-3xl w-24 text-center text-gray-700">Sign up</a>
                    <a href="#" className="bg-link-green/10 hover:bg-link-green/20 transition p-2 rounded-3xl w-24 text-center text-gray-700">Log in</a>
                </div>

             <AlignJustify className="block lg:hidden"/>
                

        </header>
    )
}