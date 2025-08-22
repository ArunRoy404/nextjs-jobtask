'use client'
import { signIn } from "next-auth/react"

const LoginButton = () => {
    return (
        <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background  hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base px-4 sm:px-5 sm:w-auto py-1"
            onClick={()=>signIn()}
            rel="noopener noreferrer"
        >
            Log in
        </button>
    );
};

export default LoginButton;