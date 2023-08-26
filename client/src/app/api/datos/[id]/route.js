import {NextResponse } from 'next/server'
import { getDatosModel } from '@/utils/moongose'
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
    const { id } = params;
    const objectId = new ObjectId(id);
    const datosCollection = await getDatosModel();

    try {
        const results = await datosCollection.findOne({"_id":objectId})

        if (results.hasOwnProperty("_id")) {
            return NextResponse.json(results);
        }else{
            return NextResponse.json({
                message2: "No se encontró ningún dato con ese ID."
            });
        }
    } catch (error) {
        console.error('Error al buscar el dato:', error);
        return NextResponse.error({
            status: 500,
            message2: "Hubo un error al buscar el dato."
        });
    }
}

export async function DELETE(request, { params }) {
    const { id } = params;
    const objectId = new ObjectId(id);
    const datosCollection = await getDatosModel();

    try {
        const result = await datosCollection.deleteOne({"_id":objectId});

        if (result.deletedCount === 1) {
            return NextResponse.json({
                message1: "Documento eliminado correctamente."
            });
        } else {
            return NextResponse.json({
                message2: "No se encontró ningún documento con ese ID."
            });
        }
    } catch (error) {
        console.error('Error al eliminar el documento:', error);
        return NextResponse.error({
            status: 500,
            message2: "Hubo un error al eliminar el documento."
        });
    }
}