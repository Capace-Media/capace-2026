import Image from "next/image";
import ContactForm from "@/forms/contact-form";

export default function ContactFormWrapper() {
  return (
    <section className="section pb-40">
      <div className="flex flex-col gap-2">
        <h2 className="text-primary text-4xl font-bold">Vill du veta mer?</h2>
        <p>Fyll i formuläret så kontaktar vi dig.</p>
      </div>
      <div className="flex w-full">
        <ContactForm />
        <div
          className="relative right-0 hidden aspect-auto h-auto w-full flex-1 translate-x-[25%] lg:block"
          aria-hidden
        >
          <Image
            src={"/stickers/sticker-group-2.webp"}
            fill
            className="object-contain"
            alt={""}
            sizes="40vw"
          />
        </div>
      </div>
    </section>
  );
}
