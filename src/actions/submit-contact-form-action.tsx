"use server";
import { env } from "@/env";
import { contactFormSchema, type TContactFormSchema } from "@/types/forms";
import sgMail, { type MailDataRequired } from "@sendgrid/mail";

sgMail.setApiKey(env.SENDGRID_API_KEY);

export default async function submitContactFormAction(
  formData: TContactFormSchema,
): Promise<{ success: boolean; message: string }> {
  const parsedFormData = contactFormSchema.parse(formData);

  if (!parsedFormData || parsedFormData.website) {
    return { success: false, message: "Ogiltig data" };
  }

  const email: MailDataRequired = {
    to: env.EMAIL as string,
    from: env.EMAIL as string,
    replyTo: parsedFormData.email as string,
    subject: "E-post från kontakt-formulär",
    text: `Namn: ${parsedFormData.name}
    Telefon: ${parsedFormData.telephone} Mejladress: ${parsedFormData.email}
    Meddelande: ${parsedFormData.message}
    `,
    html: `<p><strong>Namn: </strong>${parsedFormData.name}</p>
    <p><strong>Telefon: </strong> ${parsedFormData.telephone}</p>
    <p><strong>Email: </strong>${parsedFormData.email}</p>
    <p><strong>Tjänst: </strong>${parsedFormData.service}</p>
    <p><strong>Meddelande: </strong>${parsedFormData.message}</p>`,
  };

  const thanksForYourMessageEmail: MailDataRequired = {
    to: `${parsedFormData.email}`,
    from: env.EMAIL as string,
    replyTo: parsedFormData.email as string,
    subject: "Tack för ditt meddelande",
    text: `Vi har mottagit ditt meddelande
    `,
    html: `<h1>Tack för ditt meddelande</h1>
    <p>Vi har tagit emot ditt meddelande och kommer återkomma till dig inom kort!</p>`,
  };

  try {
    await Promise.all([
      sgMail.send(email),
      sgMail.send(thanksForYourMessageEmail),
    ]);
    return { success: true, message: "Tack för ditt meddelande" };
  } catch (error: any) {
    console.log("Error sending email", error);
    const errorMessage =
      error instanceof Error ? error.message : "Kunde inte skicka meddelande";
    return { success: false, message: errorMessage };
  }
}
