import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { serialize } from "cookie";
import { SignJWT } from "jose";
import { redirect } from "next/navigation";
import { encrypt } from "../../../../lib";
import { sign } from "jsonwebtoken";
import { verify } from "jsonwebtoken";

export const GET = async (req: NextRequest) => {
    const cookieStore = cookies();

    const token = cookieStore.get("session");

    if (!token) {
        return NextResponse.json({error: "Unauthorized access"}, {status: 403});
    }

    const { value } = token;
    const secret = process.env.JWT_SECRET || "";

    try {
        const result = verify(value, secret);
        console.log("this is the result ", result);
        return NextResponse.json({token: result}, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}
