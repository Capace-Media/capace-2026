import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
    return <>
        <main className="section h-[calc(100vh+120px)] items-center justify-center">
            <Spinner className="size-20 text-primary" />
        </main>
    </>;
}