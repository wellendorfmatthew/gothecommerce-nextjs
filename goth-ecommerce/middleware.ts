import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    let verify = req.cookies.get("session");
    console.log(verify);
    let url = req.url;

    console.log("here")

    if (!verify && url.includes("/signin")) {
        console.log("it worked")
        return NextResponse.redirect("http://localhost:3000/")
    }

    if (!verify && url.includes("/signup")) {
        console.log("it worked")
        return NextResponse.redirect("http://localhost:3000/")
    }
}
