import { AuthCard } from "@/components/auth/auth-card";
import { LoginForm } from "@/components/auth/auth-form";

export default function LoginPage() {
  return <AuthCard title="Wróć do swojej półki" subtitle="Zaloguj się, żeby zobaczyć swoje książki, cele i ranking Besties."><LoginForm /></AuthCard>;
}
