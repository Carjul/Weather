import {NextResponse } from 'next/server'

export function GET(resquest,{params}){
    const {id} =params
    console.log(id)
    return NextResponse.json({
        message:"obteniendo una tarea."
    })
}

export function DELETE(resquest,{params}){
    const {id} = params
    console.log(id)
    return NextResponse.json({
        message:"eliminando tarea."
    })
}