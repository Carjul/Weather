import {NextResponse } from 'next/server'
import {Conectdb} from '@/utils/moongose'
import Datos from '@/model/Datos' 

Conectdb()

export async function PUT(request){
    const {UserId} = await request.json();
    const result = await Datos.find({userId:UserId}); 
    return NextResponse.json(result)
}

export async function POST(request){

        var datos1 =[];
        const {Nombre,_id} = await request.json();
    
      await  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Nombre}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
        .then(response => response.json())
        .then(data => {
      
            datos1.push( JSON.parse(JSON.stringify({...data,userId:_id}))) 
          }
          )
          await Datos.create(datos1)
           
    
     return NextResponse.json({
            message:"Dato creado"
        })
    
}