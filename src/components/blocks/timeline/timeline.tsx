"use client";

import { useFragment } from "@/graphql";
import { Timeline_Fragment, type TimelineProps } from "./timeline-wrapper";
import type {
  ImageFragmentFragment,
  Milestones_FragmentFragment,
} from "@/graphql/graphql";
import Image from "next/image";

export default function Timeline(props: TimelineProps) {
  const milestones = useFragment(Timeline_Fragment, props.data)
    .milestones as Milestones_FragmentFragment[];

  return (
    <div className="relative flex w-full snap-x snap-mandatory flex-col overflow-x-scroll">
      <div className="flex w-full gap-30 px-6 md:px-130">
        {milestones.map((m, index) => (
          <div
            key={index}
            className="text-primary relative min-w-70 justify-center py-8 text-center text-lg font-medium md:min-w-100"
          >
            {m.year}
            <div className="bg-primary absolute bottom-0 left-1/2 h-6 w-6 -translate-x-1/2 translate-y-1/2 rounded-full" />
          </div>
        ))}
      </div>
      <div className="border-primary sticky top-3 left-0 h-1 w-[50%] border-b-2" />
      <div className="relative flex h-100 min-h-120 w-fit flex-col items-center">
        <div className="border-primary absolute -top-1 left-0 h-1 w-full border-b-2 border-dashed" />
        <div className="flex h-full flex-1 items-center gap-30 px-6 md:px-130">
          {milestones?.map((m) => {
            const image = m.image?.node as ImageFragmentFragment;
            return (
              <MilestoneItem
                key={m.title}
                title={m.title ?? ""}
                year={m.year ?? ""}
                description={m.description ?? ""}
                imgSrc={image.mediaItemUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface MilestoneItemProps {
  title: string;
  year: string;
  description: string;
  imgSrc?: string | undefined | null;
}

const MilestoneItem = (props: MilestoneItemProps) => {
  return (
    <article className="flex h-full min-w-70 flex-1 snap-center flex-col items-center md:h-full md:min-w-100">
      <h3 className="text-primary flex h-full w-full flex-1 flex-col justify-center text-center text-lg font-medium">
        {props.title}
      </h3>
      <p className="w-full flex-3 text-center">{props.description}</p>
      <div className="relative aspect-square h-20 flex-2">
        <Image
          src={props.imgSrc || "/misc/no-image.svg"}
          alt={""}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 80vw, 10vw"
        />
      </div>
    </article>
  );
};
