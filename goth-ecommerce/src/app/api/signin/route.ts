import { NextResponse, NextRequest } from "next/server";
import connectToMongo from "../../../../db";
import NextLogin from "../../../../models/Login";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import { encrypt } from "../../../../lib";

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const { email, password } = body;

    try {
        await connectToMongo();
        const accountExists = await NextLogin.findOne({ email });
        if (accountExists) {
            if (password !== accountExists.password) {
                return NextResponse.json({error: "Credentials do not match"}, { status: 406});
            }
            console.log(accountExists);

            const newAccount = await NextLogin.create({ email: email, password: password });
            console.log(newAccount);
    
            const dataToEncrypt = {email: email, password: password};
            console.log(dataToEncrypt);
            const expires  = 60 * 60 * 24 * 7; // When the session will expire
            const session = await encrypt({dataToEncrypt, expires})
    
            cookies().set('session', session, {expires, httpOnly: true, path: "/"})
    
            console.log(session);

            return NextResponse.json({message: "Success"}, { status: 200});
      } else {
            return NextResponse.json({error: "Couldn't find an account associated with that email"}, { status: 404});
      }
    } catch (error: any) {
        return NextResponse.json({error: error.message}, { status: 400});
    }
}
