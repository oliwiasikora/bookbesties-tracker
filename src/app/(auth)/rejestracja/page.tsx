import { AuthCard } from "@/components/auth/auth-card";
import { RegisterForm } from "@/components/auth/auth-form";

export default function RegisterPage() {
  return <AuthCard title="Załóż czytelniczy profil" subtitle="Twoja biblioteczka i aktywność będą przypisane tylko do Twojego konta."><RegisterForm /></AuthCard>;
}
