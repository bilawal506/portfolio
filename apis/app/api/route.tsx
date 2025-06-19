import { NextResponse } from "next/server";
import {user} from "../util/db"
export async function GET() {
    return NextResponse.json(user);
}