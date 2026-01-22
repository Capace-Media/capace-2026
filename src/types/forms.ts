import { formOptions } from "@tanstack/react-form";
import z from "zod";

const phoneSchema = z
  .string()
  .nonempty({ message: "Telefonnummer får inte vara tomt" })
  .transform((input) => {
    // Säkert: transform körs bara när input är string (nonempty garanterar det)
    const onlyDigits = input.replace(/\D/g, ""); // ta bort allt som inte är siffra

    // Om användaren skrev 00 som internationell prefix, ta bort första 00 (blir landskod kvar)
    const digits = onlyDigits.startsWith("00")
      ? onlyDigits.slice(2)
      : onlyDigits;

    // Gör en enkel normalisering: bestäm det nationella delen utan ledande 0 eller 46
    let national = digits;
    if (digits.startsWith("46")) {
      national = digits.slice(2); // ta bort landskoden
    } else if (digits.startsWith("0")) {
      national = digits.slice(1); // ta bort inhemsk 0
    }

    return { raw: input, digits, national }; // returnera objekt vidare för nästa steg i refinements
  })
  .refine(
    (obj) => {
      // obj.national ska vara 7..9 siffror (tillräckligt för svenska fasta/mobila nummer)
      return /^[0-9]{7,9}$/.test(obj.national);
    },
    {
      message: "Ogiltigt svenskt telefonnummer",
    },
  )
  .transform((obj) => {
    // Slutlig transform till E.164-sträng: +46 + national
    const e164 = `+46${obj.national}`;
    return e164;
  });

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Ditt namn måste vara minst två tecken långt.")
    .max(50, "Ditt namn kan vara högst 50 tecken långt."),
  telephone: phoneSchema,
  email: z.string().email({ message: "Ogiltig e-postadress." }),
  message: z
    .string()
    .min(10, "Meddelandet måste vara minst 10 tecken långt.")
    .max(300, "Meddelandet kan vara högst 300 tecken långt."),
  service: z.string(),
  website: z.string().optional(),
});

export type TContactFormSchema = z.infer<typeof contactFormSchema>;

export const ContactFormOptions = formOptions({
  defaultValues: {
    name: "",
    telephone: "",
    email: "",
    service: "",
    message: "",
  } as TContactFormSchema,
  validators: {
    onSubmit: contactFormSchema,
  },
});
