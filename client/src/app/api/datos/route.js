import {NextResponse } from 'next/server'
import {connectToDb} from '../../../utils/moongose'
import Datos from '../../../model/datos' 



export async function GET(){
    connectToDb()
    const result = await Datos.find();
    return NextResponse.json({
        message:result
    })
}

export async function POST(request){
    const data = await request.json()
    console.log(data)
    return NextResponse.json({
        message:"Dato creado"
    })
}