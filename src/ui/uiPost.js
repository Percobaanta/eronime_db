import Button from "./uiButton";
import Badge from "./uiBadge";
import Label from "./uiLabel";
import Link from "next/link";

export default function Post({}) {
  const posts = [
    {
      id: 1,
      title: "Post Pertama",
      slug: "post-pertama",
      description: "Deskripsi post pertama",
    },
    {
      id: 2,
      title: "Post Kedua",
      slug: "post-kedua",
      description: "Deskripsi post kedua",
    },
    {
      id: 3,
      title: "Post Ketiga",
      slug: "post-ketiga",
      description: "Deskripsi post ketiga",
    },
    {
      id: 4,
      title: "Post Keempat",
      slug: "post-keempat",
      description: "Deskripsi post keempat",
    },
    {
      id: 5,
      title: "Post Kelima",
      slug: "post-kelima",
      description: "Deskripsi post kelima",
    },
    {
      id: 6,
      title: "Post Keenam",
      slug: "post-keenam",
      description: "Deskripsi post keenam",
    },
    {
      id: 7,
      title: "Post Ketujuh",
      slug: "post-ketujuh",
      description: "Deskripsi post ketujuh",
    },
    {
      id: 8,
      title: "Post Kedelapan",
      slug: "post-kedelapan",
      description: "Deskripsi post kedelapan",
    },
    {
      id: 9,
      title: "Post Kesembilan",
      slug: "post-kesembilan",
      description: "Deskripsi post kesembilan",
    },
    {
      id: 10,
      title: "Post Kesepuluh",
      slug: "post-kesepuluh",
      description: "Deskripsi post kesepuluh",
    },
  ];

  return (
    <section>
      <div className="container mx-auto p-3">
        <Label h2 title={"New Uploaded"} className={"mb-2"} />

        <div className="grid md:grid-cols-6 grid-cols-3 gap-x-3 gap-y-5 mb-10">
          {Array.from({ length: 16 }, (_, i) => (
            <article key={i}>
              <Link
                href={"#"}
                className="flex flex-col rounded-lg space-y-2 active:scale-[99.50%]"
              >
                <img
                  src={"https://www.eronime.com/img/pah/1777809485628.webp"}
                  className={`bg-zinc-800 object-cover rounded-lg shadow aspect-4/5`}
                />

                <Label title="13123" icon={"eye-fill"} size="sm" muted />

                <Label
                  size="sm"
                  title={
                    "Asian Beautifull Masturbation With Dildo asdasdh asjdhkhaskjdh akshdlkjasd"
                  }
                  className="line-clamp-1"
                  h3
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
