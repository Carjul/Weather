import { NextResponse } from 'next/server';
import { getUserModel } from '@/utils/moongose';
import { ObjectId } from 'mongodb';


export async function GET(request, { params }) {
  try {
    const { id } = params;
    const objectId = new ObjectId(id);
    const userCollection = await getUserModel();
    const result = await userCollection.findOne({ _id: objectId });

    if (!result) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Error fetching user' }, { status: 500 });
  }
}


export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const objectId = new ObjectId(id);
    const userCollection = await getUserModel();
    const result = await userCollection.deleteOne({ _id: objectId });

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: 'User deleted.' });
    } else {
      return NextResponse.json({ error: 'User ID not found.' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
  }
}
