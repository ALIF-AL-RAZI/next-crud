import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import Topic from "../../../models/topic";

export async function PUT(request, {params}) {
    const {id} = params;
    const {newTitle : title, newDesc: desc} = await request.json()
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {title, desc});
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  }


  export async function GET() {
    const {id} = params;
    await connectMongoDB();
    const topics = await Topic.findone({_id: id});
    return NextResponse.json({topic}, {status: 200});
}