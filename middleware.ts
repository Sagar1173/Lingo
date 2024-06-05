import { clerkMiddleware } from '@clerk/nextjs/server';
import { LucideSquareArrowOutDownRight } from 'lucide-react';

export default clerkMiddleware({
  
});


export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};