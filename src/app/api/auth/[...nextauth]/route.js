import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"
import dbConnect from "@/lib/dbConnect";

export const authOptions = {
    providers: [CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
            email: { label: 'Email', type: 'email' },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

            const { username, password, email } = credentials
            const user = await dbConnect('users').findOne({ email })
            const isPasswordOK = password == user.password

            if (isPasswordOK) {
                // Any object returned will be saved in `user` property of the JWT
                return user
            } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null

                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
        }
    })
    ],
    callbacks: {
        async session({ session, token, user }) {
            if (token) [
                session.user.username = token.username,
                session.user.imageLink = token.imageLink
            ]
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.username = user.username
                token.imageLink = user.imageLink
            }
            return token
        }
    },
    pages: {
        signIn: '/auth/login'
    }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }