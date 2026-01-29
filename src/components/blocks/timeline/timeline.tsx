"use client";

import { useFragment } from "@/graphql";
import { Timeline_Fragment, type TimelineProps } from "./timeline-wrapper";
import type {
  ImageFragmentFragment,
  Milestones_FragmentFragment,
} from "@/graphql/graphql";
import Image from "next/image";

export default function Timeline(props: TimelineProps) {
  const milestone = useFragment(Timeline_Fragment, props.data)
    .milestones as Milestones_FragmentFragment[];

  return (
    <div className="relative flex w-full snap-x flex-col gap-12 overflow-x-scroll">
      <div className="border-primary sticky top-32 left-0 h-1 w-[50%] border-t-2" />
      <div className="relative flex h-100 min-h-120 w-fit flex-col items-center">
        <div className="border-primary absolute top-19 left-0 h-1 w-full border-t-2 border-dashed" />
        <div className="flex h-full flex-1 items-center gap-30 px-100">
          {milestone?.map((m) => {
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
    <article className="flex h-full min-w-120 flex-1 snap-center flex-col items-center">
      <p className="text-primary flex w-full flex-1 flex-col justify-center text-center font-medium">
        {props.year}
      </p>
      <div className="bg-primary h-6 w-6 rounded-full" />
      <h3 className="text-primary flex h-full w-full flex-1 flex-col justify-center text-center font-medium">
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
