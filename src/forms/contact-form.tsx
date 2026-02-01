"use client";
import { FieldGroup } from "@/components/ui/field";
import { useRouter } from "next/navigation";
import { useAppForm } from "./create-form-hook";
import { ContactFormOptions, contactFormSchema } from "@/types/forms";
import submitContactFormAction from "@/actions/submit-contact-form-action";
import { useState } from "react";

export default function ContactForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const form = useAppForm({
    ...ContactFormOptions,
    validators: {
      onSubmit: contactFormSchema,
      onSubmitAsync: async ({ value }) => {
        try {
          setErrorMessage(null);
          const result = await submitContactFormAction(value);
          if (!result.success) {
            setErrorMessage("Kunde inte skicka meddelande. Försök igen senare");
            return;
          }
          router.push("/tack-for-ditt-meddelande");
        } catch (error: any) {
          setErrorMessage("Kunde inte skicka meddelande. Försök igen senare");
        }
      },
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="mr-auto flex max-w-220 flex-2 flex-col"
    >
      <FieldGroup>
        <div className="flex flex-col gap-3 md:flex-row">
          <form.AppField
            name="name"
            children={(field) => (
              <field.TextField
                label="Namn"
                labelClassname="text-white"
                placeholder="Ange namn"
                required
              />
            )}
          />
          <form.AppField
            name="telephone"
            children={(field) => (
              <field.TextField
                label="Telefon"
                labelClassname="text-white"
                placeholder="Ange telefonnummer"
                required
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <form.AppField
            name="email"
            children={(field) => (
              <field.TextField
                label="Email"
                labelClassname="text-white"
                placeholder="Ange emailadress"
                required
              />
            )}
          />
          <form.AppField
            name="service"
            children={(field) => (
              <field.SelectInput
                label="Vilken tjänst är du intresserad av?"
                placeholder="Välj tjänst"
                options={["Design", "Marknadsföring", "Webb", "Content"]}
              />
            )}
          />
        </div>

        <form.AppField
          name="message"
          children={(field) => (
            <field.TextArea
              label="Meddelande"
              placeholder="Skriv ett meddelande"
              required
            />
          )}
        />
        <form.AppField
          name="website"
          children={(field) => (
            <field.TextField
              placeholder="Website"
              classname="absolute left-[-9999px] w-px h-px overflow-hidden"
            />
          )}
        />
      </FieldGroup>
      <p className="text-muted-foreground text-center text-sm">
        Genom att skicka förfrågan godkänner jag att Capace Media Group AB
        hanterar mina personuppgifter
      </p>
      {errorMessage && (
        <p className="text-primary mt-2 text-center text-sm">{errorMessage}</p>
      )}
      <form.AppForm>
        <div className="flex justify-center py-8">
          <form.SubmitButton label="Skicka förfrågan" />
        </div>
      </form.AppForm>
    </form>
  );
}
