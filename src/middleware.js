import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {
    const token = await getToken({ req })
    const isTokenOK = Boolean(token)
    const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard')

    if (isProtectedRoute && !isTokenOK) {

        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next()
}