import { NextResponse } from 'next/server'
import { getDatosModel } from '@/utils/moongose'

export async function PUT(request) {
  const { UserId } = await request.json();
  const datosCollection = await getDatosModel();
  const cursor = datosCollection.find({ userId: UserId })
  const results = await cursor.toArray();
  return NextResponse.json(results)
}

export async function POST(request) {
  var datos1 = [];
  const { Nombre, _id } = await request.json();
  const datosCollection = await getDatosModel();
  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Nombre}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
    .then(response => response.json())
    .then(data => {

      datos1.push(JSON.parse(JSON.stringify({ ...data, userId: _id })))
    }
    )
    if(datos1[0].message==="city not found"){
      return NextResponse.json({
        message2: "Ciudad no encontrada"
      })
    }else{
      await datosCollection.insertMany(datos1);
      return NextResponse.json({
        message1: "Dato creado"
      })
    }

  

}