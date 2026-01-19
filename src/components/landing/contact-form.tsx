"use client";

import { useFormStatus } from "react-dom";
import { useEffect, useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
      {pending ? "Enviando..." : "Enviar Mensaje"}
    </Button>
  );
}

export default function ContactForm() {
  const initialState: FormState = { message: "", errors: {}, success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "¡Éxito!",
        description: state.message,
      });
    } else if (state.message && state.errors) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre Completo</Label>
        <Input id="name" name="name" placeholder="Tu nombre" required />
        {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(", ")}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
          {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(", ")}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono (Opcional)</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+56 9 1234 5678" />
          {state.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone.join(", ")}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Cuéntanos sobre tu evento</Label>
        <Textarea id="message" name="message" placeholder="Describe tu idea, número de invitados, fecha estimada, etc." rows={6} required />
        {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(", ")}</p>}
      </div>
       <div className="text-center text-xs text-muted-foreground">
        Este sitio está protegido por reCAPTCHA y se aplican la Política de Privacidad y los Términos de Servicio de Google.
      </div>
      <SubmitButton />
    </form>
  );
}
