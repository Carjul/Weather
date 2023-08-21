import {NextResponse } from 'next/server'
import {Conectdb} from '@/utils/moongose'
import Datos from '@/model/Datos' 


Conectdb()

export async function GET(request,{params}){
    const {id} =params
    const dato = await Datos.findById(id);
    return NextResponse.json(dato)
}

export async function DELETE(request,{params}){
    const {id} = params
    await Datos.findByIdAndDelete(id);
    return NextResponse.json({
        message:"eliminado."
    })
}