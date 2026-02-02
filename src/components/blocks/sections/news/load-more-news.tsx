"use client";

import { Button } from "@/components/ui/button";
import { getNews } from "@/lib/fetchers/news";
import { useState, useTransition } from "react";

interface Props {
  initialNews: Awaited<ReturnType<typeof getNews>>;
  onLoadMore: (news: Awaited<ReturnType<typeof getNews>>) => void;
}

export default function LoadMoreNews(props: Props) {
  const [isPending, startTransition] = useTransition();
  const [pageInfo, setPageInfo] = useState(props.initialNews?.pageInfo);
  const AMOUNT_OF_NEWS_TO_LOAD = 9;

  const handleLoadMore = () => {
    startTransition(async () => {
      const moreNews = await getNews(
        AMOUNT_OF_NEWS_TO_LOAD,
        pageInfo?.endCursor,
      );
      if (moreNews) {
        props.onLoadMore(moreNews);
        setPageInfo(moreNews.pageInfo);
      }
    });
  };

  if (!pageInfo?.hasNextPage) return null;

  return (
    <Button onClick={handleLoadMore} withArrow disabled={isPending}>
      {isPending ? "Laddar..." : "Ladda fler nyheter"}
    </Button>
  );
}
