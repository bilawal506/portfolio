import { NextResponse } from "next/server";
import { user } from "../../util/db";

export async function GET(request, { params }) {
  const userData = user.find((item) => item.id == params.id);
  return NextResponse.json(userData || {});
}
