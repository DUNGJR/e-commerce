import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {
    try {

    } catch (error) {
        console.log('[STORES_PORT]',error);
        return new NextResponse("Interal error", { status: 500 });
    }
} 