"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto."),
  email: z.string().email("El correo electrónico no es válido."),
  phone: z.string().optional(),
  message: z.string().min(10, "El mensaje es demasiado corto."),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Por favor, corrige los errores en el formulario.",
      success: false,
    };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this demo, we'll just log the data and simulate a success response.
  console.log("Form data received:", validatedFields.data);

  return {
    message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
    success: true,
  };
}
