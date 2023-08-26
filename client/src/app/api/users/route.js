import { NextResponse } from 'next/server'
import { getUserModel } from '@/utils/moongose'



export async function GET() {
    const data = await getUserModel()
    const cursor= data.find({})
    const results = await cursor.toArray()
    return NextResponse.json(results)
}

export async function POST(request) {
    const user = await request.json()
    const userCollection = await getUserModel();
     const cursor= userCollection.find({email:user.email}) 
     const results = await cursor.toArray();

    if(results.length>0){
        console.log('el usuario existe')
        return NextResponse.json(results[0])
    }
    else{
        const userCollection = await getUserModel();
        const result = await userCollection.insertOne(user);
        return NextResponse.json(result)
    } 
}