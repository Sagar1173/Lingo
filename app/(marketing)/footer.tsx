import {Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () =>{
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full" >
               
                <Button variant="ghost" size="lg" className="w-full">
                    <Image className="mr-4 rounded-md" src="/img/english.svg" alt="english" height={30} width={30} />English
                </Button>

                <Button variant="ghost" size="lg" className="w-full">
                    <Image className="mr-4 rounded-md" src="/img/german.svg" alt="german" height={30} width={30} />German
                </Button>

                <Button variant="ghost" size="lg" className="w-full">
                    <Image className="mr-4 rounded-md" src="/img/coration.svg" alt="coration" height={30} width={30} />Coration
                </Button>

                <Button variant="ghost" size="lg" className="w-full">
                    <Image className="mr-4 rounded-md" src="/img/spanish.svg" alt="spanish" height={30} width={30} />Spanish
                </Button>

            </div>

        </footer>
    );
};