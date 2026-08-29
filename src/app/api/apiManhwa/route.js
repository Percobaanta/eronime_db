export async function GET() {
  const response = await fetch(
    "https://raw.githubusercontent.com/Percobaanta/eroapi/refs/heads/main/manhwa.json",
    {
      next: {
        revalidate: 600,
        tags: ["lela"],
      },
    }
  );

  const data = await response.json();

  return Response.json(data);
}
