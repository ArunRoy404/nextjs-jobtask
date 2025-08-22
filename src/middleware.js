import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {
    const token = await getToken({ req })
    const isTokenOK = Boolean(token)
    const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard')

    if (isProtectedRoute && !isTokenOK) {
        const callbackUrl = encodeURIComponent(req.nextUrl.href)
        return NextResponse.redirect(new URL(`/login?callbackUrl=${callbackUrl}`, req.url))
    }

    return NextResponse.next()
}