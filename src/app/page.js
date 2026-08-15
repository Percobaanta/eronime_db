import Button from "@/ui/uiButton";

export default async function admin() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="text-zinc-400">Page not found.</p>
      <Button href={"https://eronime.vercel.app"}></Button>
    </div>
  );
}
