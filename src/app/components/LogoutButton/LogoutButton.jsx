'use client'
import { signOut } from "next-auth/react"

const LogoutButton = () => {
    return (
        <button
            className="rounded-full cursor-pointer border-white border-2 font-medium text-sm sm:text-base px-4 sm:px-5 sm:w-auto py-1"
            onClick={() => signOut()}
            rel="noopener noreferrer"
        >
            Log Out
        </button>
    );
};

export default LogoutButton;