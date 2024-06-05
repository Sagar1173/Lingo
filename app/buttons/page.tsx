// to view the buttons from ui
import {Button} from "@/components/ui/button";
export default function Home() {
  return (
     <>
     <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
        <Button>default</Button>
        <Button variant={"primary"}>default button</Button>
        <Button variant={"primaryOutline"}>default button</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"secondaryOutline"}> Secondary Outline</Button>
        <Button variant={"danger"}>danger</Button>
        <Button variant={"dangerOutline"}>dangeroutline</Button>
        <Button variant={"super"}>super</Button>
        <Button variant={"superOutline"}>super outline</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"sidebar"}>sidebar</Button>
        <Button variant={"sidebarOutline"}>sidebarOutline</Button>

     </div>
     
     
     </>
  );
}


