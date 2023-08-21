import {NextResponse } from 'next/server'

export function GET(resquest,{params}){
    const {id} =params
    return NextResponse.json({
        message:"obteniendo un user."
    })
}

export function DELETE(resquest,{params}){
    const {id} =params
    return NextResponse.json({
        message:"eliminando user."
    })
}