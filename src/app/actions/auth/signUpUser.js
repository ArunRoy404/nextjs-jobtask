'use server'

import dbConnect from "@/lib/dbConnect"

export const SignUpUser = async (playLoad) => {
    try {
        const isExist = await dbConnect('users').findOne({ email: playLoad.email })
        if (isExist) {
            return {
                success: false,
                message: 'User already exists'
            }
        }

        const result = await dbConnect('users').insertOne(playLoad)
        return {
            success: true,
            insertedId: result.insertedId.toString() 
        }
    } catch (error) {
        return {
            success: false,
            message: 'Something went wrong'
        }
    }
}
