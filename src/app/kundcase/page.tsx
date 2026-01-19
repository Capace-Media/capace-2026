import HeadingWithAccent from "@/components/shared/heading-with-accent";

export default function Page() {
  return (
    <section className="section flex w-full justify-center">
      <HeadingWithAccent
        accentedHeading={"ett urval av våra"}
        mainHeading={"kundprojekt"}
      />
    </section>
  );
}
