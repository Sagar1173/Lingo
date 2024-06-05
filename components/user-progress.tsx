import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import { Ghost } from "lucide-react";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
    activeCourse : {imageSrc:string,title:string};
    hearts :number;
    points:number;
    hasActiveSubscription : boolean; 
}

export const UserProgress = ({activeCourse,points,hearts,hasActiveSubscription}:Props) => {
    return(
        <div className="flex items-center justify-between gap-x-2 w-full">
            
            <Link href="/courses">
                <Button variant="ghost">
                    <Image src={activeCourse.imageSrc}  alt={activeCourse.title} className="rounded-md border" width={32} height={32}/>
                </Button>
            </Link>

            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/img/points.png" alt="mypoints" height={32} width={32}/>{points}
                </Button>
            </Link>

            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image src="/img/hearts.png" alt="heart" height={32} width={32}/>
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]"/> : hearts}
                </Button>
            </Link>

        </div>
    )
}