import { apiAnimated } from "@/api/apiAnimated";
import { apiDoodstream } from "@/api/apiDoodstream";
import { apiHentai } from "@/api/apiHentai";
import { apiPorn } from "@/api/apiPorn";
import { apiStreamtape } from "@/api/apiStreamtape";
import Button from "@/ui/uiButton";

export default async function Admin() {
  const { getApiDoodstream } = await apiDoodstream();
  const { getApiStreamtape } = await apiStreamtape();
  const { getApiPorn } = await apiPorn();
  const { getApiAnimated } = await apiAnimated();
  const { getApiHentai } = await apiHentai();

  const apiAll = [...getApiPorn, ...getApiAnimated, ...getApiHentai];

  const doodMap = new Map(getApiDoodstream.map((d) => [d.title, d]));

  const streamMap = new Map(
    getApiStreamtape.map((d) => [d.name.replace(".mp4", ""), d])
  );
  const pachMap = new Map(apiAll.map((d) => [d.id, d]));

  const keys = [
    ...new Set([...doodMap.keys(), ...streamMap.keys(), ...pachMap.keys()]),
  ];

  const result = keys.filter(
    (key) => !(doodMap.has(key) && streamMap.has(key) && pachMap.has(key))
  );

  const allData = keys.filter(
    (key) => doodMap.has(key) || streamMap.has(key) || pachMap.has(key)
  );

  return (
    <main className="my-10">
      <p className="text-center font-bold mb-2">
        <i className="bi bi-exclamation-triangle-fill mr-2" />
        Warning
      </p>

      <table className="text-xs mx-auto">
        <thead>
          <tr>
            <th className="border px-2 py-1">No</th>
            <th className="border px-2 py-1">Doodstream</th>
            <th className="border px-2 py-1">Streamtape</th>
            <th className="border px-2 py-1">PACH</th>
          </tr>
        </thead>

        <tbody>
          {result.map((key, index) => {
            const dood = doodMap.get(key);
            const stream = streamMap.get(key);
            const pach = pachMap.get(key);

            return (
              <tr key={key}>
                <td className="border px-2 py-1">{index + 1}</td>

                {/* Doodstream */}
                <td className="border px-2 py-1">
                  <input
                    className="bg-zinc-800 rounded-full px-2 py-1 text-center"
                    readOnly
                    value={dood?.title ?? "x"}
                  />
                </td>

                {/* Streamtape */}
                <td className="border px-2 py-1">
                  <div className="flex justify-between gap-3">
                    <input
                      className="bg-zinc-800 rounded-full px-2 py-1 text-center"
                      readOnly
                      value={stream?.name.replace(".mp4", "") ?? "x"}
                    />

                    <input
                      className="bg-zinc-800 rounded-full px-2 py-1 text-center"
                      readOnly
                      value={stream?.link || "x"}
                    />
                  </div>
                </td>

                {/* PACH */}
                <td className="border px-2 py-1">
                  <div className="flex justify-between gap-3">
                    <input
                      className="bg-zinc-800 rounded-full px-2 py-1 text-center"
                      readOnly
                      value={pach?.id ?? "x"}
                    />

                    <input
                      className="bg-zinc-800 rounded-full px-2 py-1 text-center"
                      readOnly
                      value={pach?.xtitle ?? "x"}
                    />

                    {pach && (
                      <>
                        <Button
                          href={`/${pach.xtype}/${pach.id}`}
                          variant="base"
                          size="sm"
                          className="w-24!"
                          rounded
                        >
                          {pach.xtype || "x"}
                        </Button>

                        <Button
                          href={pach.xsource}
                          target="_blank"
                          variant="primary"
                          size="sm"
                          rounded
                        >
                          {pach?.xsource ? "Source" : "x"}
                        </Button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p className="text-center font-bold mb-2">
        <i className="bi bi-check mr-2" />
        Publish
      </p>

      <table className="text-xs mx-auto">
        <thead>
          <tr>
            <th className="border px-2 py-1">No</th>
            <th className="border px-2 py-1">Doodstream</th>
            <th className="border px-2 py-1">Streamtape</th>
            <th className="border px-2 py-1">PACH</th>
          </tr>
        </thead>

        <tbody>
          {allData.map((key, index) => {
            const dood = doodMap.get(key);
            const stream = streamMap.get(key);
            const pach = pachMap.get(key);

            return (
              <tr key={key}>
                <td className="border px-2 py-1">{index + 1}</td>

                {/* Doodstream */}
                <td className="border px-2 py-1">
                  <input
                    className="bg-zinc-800 rounded-full px-2 py-1 text-center"
                    readOnly
                    value={dood?.title ?? "x"}
                  />
                </td>

                {/* Streamtape */}
                <td className="border px-2 py-1">
                  <div className="flex justify-between gap-3">
                    <input
                      className="bg-zinc-800 rounded-full px-2 py-1 text-center"
                      readOnly
                      value={stream?.name.replace(".mp4", "") ?? "x"}
                    />

                    <input
                      className="bg-zinc-800 rounded-full px-2 py-1 text-center"
                      readOnly
                      value={stream?.link || "x"}
                    />
                  </div>
                </td>

                {/* PACH */}
                <td className="border px-2 py-1">
                  <div className="flex justify-between gap-3">
                    <input
                      className="bg-zinc-800 rounded-full px-2 py-1 text-center"
                      readOnly
                      value={pach?.id ?? "x"}
                    />

                    <input
                      className="bg-zinc-800 rounded-full px-2 py-1 text-center"
                      readOnly
                      value={pach?.xtitle ?? "x"}
                    />

                    {pach && (
                      <>
                        <Button
                          href={`/${pach.xtype}/${pach.id}`}
                          variant="base"
                          size="sm"
                          className="w-24!"
                          rounded
                        >
                          {pach.xtype || "x"}
                        </Button>

                        <Button
                          href={pach.xsource}
                          target="_blank"
                          variant="primary"
                          size="sm"
                          rounded
                        >
                          {pach?.xsource ? "Source" : "x"}
                        </Button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
