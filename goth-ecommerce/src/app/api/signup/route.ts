import { NextResponse, NextRequest } from "next/server";
import connectToMongo from "../../../../db";
import NextLogin from "../../../../models/Login";
import { cookies } from "next/headers";
import { serialize } from "cookie";
import { SignJWT } from "jose";
import { redirect } from "next/navigation";
import { encrypt } from "../../../../lib";
import { sign } from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const { email, password } = body;

    try {
        await connectToMongo();
        const accountExists = await NextLogin.findOne({ email });
        console.log(accountExists);
      
        if (accountExists) {
            console.log("boo boo")
            return NextResponse.json({error: "An account with that email already exists"}, {status: 412});
        }

        const secret = process.env.JWT_SECRET || "";

        const token = sign(
          {
            email,
          },
          secret, {
            expiresIn: 60 * 60 * 24 * 30
          }
        );

        const serialized = serialize("session", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 30,
          path: '/'
        })

        // const dataToEncrypt = {email: email, password: password};
        // console.log(dataToEncrypt);
        // const expires  = 60 * 60 * 24 * 7; // When the session will expire
        // const session = await encrypt({dataToEncrypt, expires})

        // cookies().set('session', session, {expires, httpOnly: true, path: "/"})

        // console.log(session);
      
        const newAccount = await NextLogin.create({ email: email, password: password });
        console.log(newAccount);

        return NextResponse.json({message: "Success"}, {status: 200, headers: { "Set-Cookie": serialized }});
      } catch (error : any) {
        return NextResponse.json({error: error.message}, {status: 400});
      }
}
