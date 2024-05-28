import Image from "next/image";
import{Button } from "@/components/ui/button";
import { ClerkLoading, ClerkLoaded,SignedIn, SignedOut,SignUpButton,SignInButton } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[998px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[420px] lg:h-[420px] mb-8 lg:mb-0 ">
          <Image src="/img/hero.png" fill alt="hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
          
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">learn practice whatever with lingo1</h1>
          
          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">

            <ClerkLoading>
              <LoaderCircle className="h-5 w-5 animate-spin text-muted-foreground"/>
            </ClerkLoading>

            <ClerkLoaded>
              <SignedOut>   
                <SignUpButton signInForceRedirectUrl="/learn" forceRedirectUrl="/learn">
                  <Button size="lg" variant="secondary" className="w-full">
                    Get Started
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal" signUpForceRedirectUrl="/learn" forceRedirectUrl="/learn">
                    <Button variant="ghost" size="lg">
                       I already have an account.
                    </Button>
                </SignInButton>
              </SignedOut>
              
              <SignedIn>
                  <Button size="lg" variant="secondary" className="w-full" asChild>
                     <Link  href="/courses" >Continue Learning </Link>
                  </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
      </div>
    </div>
  );
}
