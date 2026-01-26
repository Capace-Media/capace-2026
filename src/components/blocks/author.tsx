import { useFragment, type FragmentType } from "@/graphql/fragment-masking";
import { BlocksFragment } from "@/lib/queries/fragments";
import Image from "next/image";
import EmailLink from "../shared/email-link";
import TelephoneLink from "../shared/telephone-link";
import Link from "next/link";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}
export default function Author(props: Props) {
  const data = useFragment(BlocksFragment, props.data);
  console.log("emp data:", data);

  if (data.__typename !== "BlocksBlocksAuthorLayout") return null;
  return (
    <div>
      <div></div>
      <div>
        {data.employee?.nodes.map((data, index) => {
          if (data.__typename !== "Employee") return;
          return (
            <article
              key={index}
              className="itesm-center flex flex-col items-center justify-center gap-8 md:flex-row"
            >
              <div className="relative h-50 w-50 overflow-hidden rounded-full">
                <Image
                  src={
                    data.employeeContent?.image?.node.mediaItemUrl ||
                    "/misc/no-image.svg"
                  }
                  alt={
                    data.employeeContent?.image?.node.altText ||
                    `Bild på ${data.title}`
                  }
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className="flex flex-col items-start">
                  <h3 className="orange-dot font-bold">
                    <Link
                      href={`/om-oss/${data.slug}`}
                      className="hover:underline!"
                    >
                      {data.title}
                    </Link>
                  </h3>
                  <p className="text-primary text-sm uppercase">
                    {data.employeeContent?.workTitle}
                  </p>
                </div>
                {data.employeeContent?.email && (
                  <EmailLink email={data.employeeContent.email} />
                )}
                {data.employeeContent?.telephone && (
                  <TelephoneLink phoneNumber={data.employeeContent.telephone} />
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
