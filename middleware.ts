import { NextRequest, NextResponse } from "next/server";

// Password gates for client demo routes.
// The expected password for each route lives in a Vercel environment
// variable (never in source): any username is accepted, the password
// must match. Visitors get the browser's native sign-in prompt.
const GATES: { prefix: string; envVar: string; realm: string }[] = [
  { prefix: "/friendly-care", envVar: "FRIENDLY_CARE_DEMO_PASSWORD", realm: "Friendly Care Demo" },
  { prefix: "/jewelry", envVar: "JEWELRY_DEMO_PASSWORD", realm: "Jewelry Demo" },
  { prefix: "/ems-kusina", envVar: "EMS_KUSINA_DEMO_PASSWORD", realm: "Ems Kusina Demo" },
];

function passwordMatches(req: NextRequest, expected: string): boolean {
  const auth = req.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) return false;
  try {
    const decoded = atob(auth.slice("Basic ".length));
    const sep = decoded.indexOf(":");
    if (sep < 0) return false;
    return decoded.slice(sep + 1) === expected;
  } catch {
    return false;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const gate = GATES.find(
    (g) => pathname === g.prefix || pathname.startsWith(g.prefix + "/")
  );
  if (!gate) return NextResponse.next();

  const expected = process.env[gate.envVar];
  if (expected && passwordMatches(req, expected)) {
    return NextResponse.next();
  }
  return new NextResponse("A password is required to view this demo.", {
    status: 401,
    headers: { "WWW-Authenticate": `Basic realm="${gate.realm}"` },
  });
}

export const config = {
  matcher: ["/friendly-care", "/friendly-care/:path*", "/jewelry", "/jewelry/:path*", "/ems-kusina", "/ems-kusina/:path*"],
};
