"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { refillHearts } from "@/actions/user-progress";
import { toast } from "sonner";
import { createStripeUrl } from "@/actions/user-subscription";
import { POINTS_TO_REFILL } from "@/constants";

type Props = {
    hearts:number;
    points:number;
    hasActiveSubscription:boolean;
};



 
export const Items = ({hearts,points,hasActiveSubscription}:Props) =>{
    const[pending, startTransition] = useTransition();
    const onRefillHearts = () => {
        if(pending || hearts === 5 ||points<POINTS_TO_REFILL){
            return;
        }
        startTransition(()=>{
            refillHearts()
            .catch(()=> toast.error("something went wrong"))
        });
    }
    const onUpgrade = () => {
        startTransition (() => {
            createStripeUrl()
            .then((response)=>{
                if(response.data){
                    window.location.href =response.data;
                }
            })
            .catch(()=> toast.error("Something went wrong"));
        })
    }
    return(
        <ul className="w-full">
            <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                <Image 
                    src = "/img/heart.svg"
                    alt="Heart"
                    height={60}
                    width={60}
                />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Refill hearts
                    </p>
                </div>
            
            <Button onClick={onRefillHearts} disabled={hearts === 5 || points < POINTS_TO_REFILL || pending}>
                {hearts === 5 ?"full" : (
                    <div className="flex items-center">
                        <Image 
                            src="/img/points.svg"
                            alt="points"
                            height={20}
                            width={20}
                        />
                        <p>{POINTS_TO_REFILL}</p>
                    </div>
                )}
            </Button>
            </div>
            <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2 ">
                <Image
                    src="/img/unlimited.svg"
                    alt="proheart"
                    height={60}
                    width={60}
                />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Unlimited hearts
                    </p>
                </div>
                <Button
                    onClick={onUpgrade}
                    disabled={pending || hasActiveSubscription}
                >
                    {hasActiveSubscription ? "settings" : "upgrade"}
                </Button> 
            </div>
        </ul>
    )
}