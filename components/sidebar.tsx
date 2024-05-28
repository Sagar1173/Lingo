import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
// lets you read the current URL's pathname.
import { usePathname } from "next/navigation";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader} from "lucide-react";

type Props = {
    className? : string
}
export const Sidebar = ({className}:Props) => {
  
    return(
        <div className= {cn (" flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className) }>
            
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/img/croc.jpg" height={40} width={40} alt="crocodile"/>
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Lingo</h1>
                </div>
            </Link>

            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem  label="Learn" href="/learn" iconSrc="/img/learny.png"/>
                <SidebarItem  label="Leaderboard" href="/leaderboard" iconSrc="/img/leaderboard.png"/>
                <SidebarItem  label="Quests" href="/quests" iconSrc="/img/quest.png"/>
                <SidebarItem  label="Shop" href="/shop" iconSrc="/img/shop.png"/>
            </div>

            <div className="p-4">

                <ClerkLoading>
                    <Loader  className="h-5 w-5 animate-spin text-muted-foreground" />
                </ClerkLoading>

                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/"/>
                </ClerkLoaded>
            
            </div>


        </div>
    );
};