"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AuthState = { message?: string };

export async function signInAction(_previousState: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { message: "Nie udało się zalogować. Sprawdź dane." };
  redirect("/home");
}

export async function signUpAction(_previousState: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const displayName = String(formData.get("display_name") ?? "");
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signUp({ email, password, options: { data: { display_name: displayName } } });
  if (error) return { message: "Nie udało się utworzyć konta." };
  return { message: "Konto utworzone. Sprawdź skrzynkę e-mail." };
}

export async function resetPasswordAction(_previousState: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "");
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) return { message: "Nie udało się wysłać linku resetującego." };
  return { message: "Wysłałyśmy link do resetu hasła." };
}

export async function signOutAction() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/login");
}
