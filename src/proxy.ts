import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const appRoutes = ["/home", "/moje-ksiazki", "/dodaj", "/ranking", "/profil"];
const authRoutes = ["/login", "/rejestracja", "/reset-hasla"];

export async function proxy(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return NextResponse.next();
  let response = NextResponse.next({ request });
  const supabase = createServerClient(url, anonKey, { cookies: { getAll() { return request.cookies.getAll(); }, setAll(cookiesToSet) { cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value)); response = NextResponse.next({ request }); cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options)); } } });
  const { data: { user } } = await supabase.auth.getUser();
  const path = request.nextUrl.pathname;
  const isAppRoute = appRoutes.some((route) => path.startsWith(route));
  const isAuthRoute = authRoutes.some((route) => path.startsWith(route));
  if (isAppRoute && !user) return NextResponse.redirect(new URL("/login", request.url));
  if (isAuthRoute && user) return NextResponse.redirect(new URL("/home", request.url));
  return response;
}

export const config = { matcher: ["/home/:path*", "/moje-ksiazki/:path*", "/dodaj/:path*", "/ranking/:path*", "/profil/:path*", "/login", "/rejestracja", "/reset-hasla"] };
