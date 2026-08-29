export async function GET() {
  const params = new URLSearchParams({
    login: process.env.STREAMTAPE_LOGIN,
    key: process.env.STREAMTAPE_KEY,
  });

  const response = await fetch(
    `https://api.streamtape.com/file/listfolder?${params.toString()}`,
    {
      next: {
        revalidate: 600,
        tags: ["lela"],
      },
    }
  );

  const data = await response.json();
  const getApiStreamtape = data?.result?.files || [];

  return Response.json(getApiStreamtape);
}
