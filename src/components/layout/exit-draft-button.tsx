"use client";
import { Button } from "@/components/ui/button";

interface ExitPreviewButtonProps {
  isDraftModeEnabled?: boolean;
}

export default function ExitDraftButton(props: ExitPreviewButtonProps) {
  const exitPreview = async () => {
    try {
      const res = await fetch(`/api/v1/draft/exit`);
      if (!res.ok) {
        console.error("Fel vid avslutning av förhandsgranskning.");
        return;
      }
      window.location.href = `/`;
    } catch {
      console.error("Kunde inte avsluta förhandsgranskning.");
    }
  };
  if (!props.isDraftModeEnabled) {
    return null;
  }
  return (
    <div className="bg-primary fixed bottom-0 left-0 z-50 flex w-screen justify-center py-4 text-center text-black">
      <Button
        variant={"ghost"}
        onClick={() => exitPreview()}
        className="w-fit! max-w-none text-black! hover:text-white!"
      >
        Förhandsgranskning aktivt. Klicka för att avsluta.
      </Button>
    </div>
  );
}
