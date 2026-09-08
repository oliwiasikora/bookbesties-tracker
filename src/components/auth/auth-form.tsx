"use client";

import Link from "next/link";
import { useActionState } from "react";
import { type AuthState, resetPasswordAction, signInAction, signUpAction } from "@/app/auth-actions";
import { PrimaryButton } from "@/components/ui/primary-button";

const initialState: AuthState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(signInAction, initialState);
  return <form action={formAction} className="space-y-4"><Field label="E-mail" name="email" type="email" /><Field label="Hasło" name="password" type="password" /><Message message={state.message} /><PrimaryButton className="w-full" disabled={pending}>{pending ? "Logowanie..." : "Zaloguj się"}</PrimaryButton><div className="flex items-center justify-between text-sm"><Link className="font-semibold text-burgundy" href="/rejestracja">Utwórz konto</Link><Link className="text-muted" href="/reset-hasla">Reset hasła</Link></div></form>;
}

export function RegisterForm() {
  const [state, formAction, pending] = useActionState(signUpAction, initialState);
  return <form action={formAction} className="space-y-4"><Field label="Nazwa widoczna" name="display_name" /><Field label="E-mail" name="email" type="email" /><Field label="Hasło" name="password" type="password" /><Message message={state.message} /><PrimaryButton className="w-full" disabled={pending}>{pending ? "Tworzenie..." : "Dołącz do BookBesties"}</PrimaryButton><Link className="block text-center text-sm text-muted" href="/login">Mam już konto</Link></form>;
}

export function ResetPasswordForm() {
  const [state, formAction, pending] = useActionState(resetPasswordAction, initialState);
  return <form action={formAction} className="space-y-4"><Field label="E-mail" name="email" type="email" /><Message message={state.message} /><PrimaryButton className="w-full" disabled={pending}>{pending ? "Wysyłanie..." : "Wyślij link"}</PrimaryButton><Link className="block text-center text-sm text-muted" href="/login">Wróć do logowania</Link></form>;
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return <label className="block text-sm font-semibold text-ink">{label}<input className="mt-2 min-h-12 w-full rounded-2xl border border-line bg-cream px-4 text-base outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/15" name={name} required type={type} /></label>;
}

function Message({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="rounded-2xl bg-cream px-4 py-3 text-sm font-medium text-burgundy">{message}</p>;
}
