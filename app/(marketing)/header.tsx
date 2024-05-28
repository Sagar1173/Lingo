import Image from "next/image";
import { ClerkLoading,ClerkLoaded,SignedIn,SignedOut,SignInButton,UserButton } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import {Loader} from "lucide-react";
import {Button} from "@/components/ui/button";


export const Header = () =>{
    return(
      <header className="h-20 w-full border-b-2 border-slate-200 px-4">
          <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
            <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
              <Image src="/img/croc.jpg" height={40} width={35} alt="crocodile"/>
              <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Lingo</h1>
            </div>
      {/* renders its children while Clerk is loading, and is helpful for showing a custom loading state. */}
            <ClerkLoading>
                <LoaderCircle className="h-5 w-5 animate-spin text-muted-foreground"/>
            </ClerkLoading>
      
      {/* This allows you to wrap child components to access the Clerk object without the need to check it exists */}
            <ClerkLoaded>

              {/* Any children components wrapped by a <SignedIn> component will be rendered only if there's a User with an active Session signed in your application. */}
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              {/* Any child nodes wrapped by a <SignedOut> component will be rendered only if there's no User signed in to your application. */}
              <SignedOut>
                <SignInButton mode="modal" signUpForceRedirectUrl="/learn" forceRedirectUrl="/learn">
                    <Button variant="ghost" size="lg">
                        Login
                    </Button>
                </SignInButton>
              </SignedOut>

            </ClerkLoaded>

          </div> 

      </header>

    );
};