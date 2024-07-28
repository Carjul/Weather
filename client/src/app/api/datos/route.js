import { NextResponse } from 'next/server';
import { getDatosModel } from '@/utils/moongose';

export async function PUT(request) {
  try {
    const { UserId } = await request.json();
    const datosCollection = await getDatosModel();
    const results = await datosCollection.find({ userId: UserId }).toArray();
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: 'Error procesando la solicitud' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { Nombre, _id } = await request.json();
    const datosCollection = await getDatosModel();
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Nombre}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`);
    
    if (!response.ok) {
      return NextResponse.json({ message: 'Error fetching weather data' }, { status: response.status });
    }

    const data = await response.json();
    const datos1 = [ { ...data, userId: _id } ];

    if (datos1[0].message === "city not found") {
      return NextResponse.json({ message: "Ciudad no encontrada" }, { status: 404 });
    } else {
      await datosCollection.insertMany(datos1);
      return NextResponse.json({ message: "Dato creado" });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error procesando la solicitud' }, { status: 500 });
  }
}
