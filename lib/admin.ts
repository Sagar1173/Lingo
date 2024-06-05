import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2g5OPwSLLLcVtB09aIDgU5Ausd0"];

export const isAdmin = async () => {
    const {userId} = await auth();
    
    if(!userId){
        return false;
    }
    return adminIds.indexOf(userId) !== -1;
};