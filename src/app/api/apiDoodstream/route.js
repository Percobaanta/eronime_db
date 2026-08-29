export async function GET() {
  const params = new URLSearchParams({
    key: process.env.DOODSTREAM_API_KEY,
  });

  const response = await fetch(
    `https://doodapi.com/api/file/list?${params.toString()}`,
    {
      next: {
        revalidate: 600,
        tags: ["lela"],
      },
    }
  );

  const data = await response.json();
  const getApiDoodstream = data?.result?.files || [];

  return Response.json(getApiDoodstream);
}
