import { NextResponse } from 'next/server';
import { getUserModel } from '@/utils/moongose';

export async function GET() {
  try {
    const data = await getUserModel();
    const cursor = data.find({});
    const results = await cursor.toArray();
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await request.json();
    const userCollection = await getUserModel();
    const cursor = userCollection.find({ email: user.email });
    const results = await cursor.toArray();

    if (results.length > 0) {
      console.log('El usuario existe');
      return NextResponse.json(results[0]);
    } else {
      const result = await userCollection.insertOne(user);
      return NextResponse.json(result.ops[0]); // `ops` contiene los documentos insertados
    }
  } catch (error) {
    console.error('Error processing POST request:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}
