import Button from "@/ui/uiButton";

export default async function admin() {
  return (
    <div className="flex justify-center gap-3 py-20">
      <Button href="/reset" variant="base">
        Reset
      </Button>
      <Button href="/database" variant="base">
        Database
      </Button>
      <Button href="/doodstream" variant="base">
        Doodstream
      </Button>
      <Button href="/streamtape" variant="base">
        Streamtape
      </Button>
    </div>
  );
}
