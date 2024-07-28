import { NextResponse } from 'next/server';
import { getDatosModel } from '@/utils/moongose';
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
    const { id } = params;
    const objectId = new ObjectId(id);
    const datosCollection = await getDatosModel();

    try {
        const result = await datosCollection.findOne({ "_id": objectId });

        if (result) {
            return NextResponse.json(result);
        } else {
            return NextResponse.json({
                message: "No se encontró ningún dato con ese ID."
            }, { status: 404 });
        }
    } catch (error) {
        console.error('Error al buscar el dato:', error);
        return NextResponse.json({
            message: "Hubo un error al buscar el dato."
        }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const { id } = params;
    const objectId = new ObjectId(id);
    const datosCollection = await getDatosModel();

    try {
        const result = await datosCollection.deleteOne({ "_id": objectId });

        if (result.deletedCount === 1) {
            return NextResponse.json({
                message: "Documento eliminado correctamente."
            });
        } else {
            return NextResponse.json({
                message: "No se encontró ningún documento con ese ID."
            }, { status: 404 });
        }
    } catch (error) {
        console.error('Error al eliminar el documento:', error);
        return NextResponse.json({
            message: "Hubo un error al eliminar el documento."
        }, { status: 500 });
    }
}
