import { AuthCard } from "@/components/auth/auth-card";
import { ResetPasswordForm } from "@/components/auth/auth-form";

export default function ResetPasswordPage() {
  return <AuthCard title="Reset hasła" subtitle="Podaj e-mail, a wyślemy link do odzyskania dostępu."><ResetPasswordForm /></AuthCard>;
}
