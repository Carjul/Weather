import {NextResponse } from 'next/server'
import {Conectdb} from '@/utils/moongose'
import Users from '@/model/Users' 

Conectdb() 

export async function GET(request,{params}){
    const {id} =params
    const dato = await Users.findById(id);
    return NextResponse.json(dato)
}

export async function DELETE(request,{params}){
    const {id} =params
    await Users.findByIdAndDelete(id);
    return NextResponse.json({
        message:"eliminando user."
    })
}