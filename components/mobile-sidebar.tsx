import {Menu} from "lucide-react";
import{ Sheet, SheetContent,SheetTrigger} from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";


export const MobileSidebar = () => {
    return(
        //  to display content that complements the main content of the screen.
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white " />
            </SheetTrigger>
            
            <SheetContent className="p-0 z-[100]" side="left">
                <Sidebar />
            </SheetContent>

        </Sheet>

    );
};