import {NextResponse } from 'next/server'
import { getUserModel } from '@/utils/moongose'
import { ObjectId } from 'mongodb';
export async function GET(request,{params}){
    const {id} =params
    const objectId = new ObjectId(id);
    const userCollection = await getUserModel();
    const results = await userCollection.findOne({"_id":objectId})
    return NextResponse.json(results)
}

export async function DELETE(request,{params}){
    const {id} =params
    const objectId = new ObjectId(id);
    const userCollection = await getUserModel()
   const result= await userCollection.deleteOne({"_id":objectId});
   if(result.deletedCount === 1) {
    return NextResponse.json({
        message1:"User eliminado."
    })
   }else{
    return NextResponse.json({
        message2:"User id no encontrado."
    })
   }
   
}