import { NextResponse } from 'next/server'
import { Conectdb } from '@/utils/moongose'
import Users from '@/model/Users'

Conectdb()

export async function GET() {
    const data = await Users.find()
    return NextResponse.json(data)
}

export async function POST(request) {
    const user = await request.json()
    await Users.create(user)
    return NextResponse.json({
        message: "user creado"
    })
}