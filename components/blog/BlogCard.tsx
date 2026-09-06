import { MarketingImgWithFallback } from "@/components/common/MarketingImgWithFallback";
import { LOCAL_IMAGES } from "@/lib/local-images";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export type BlogPost = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col">
      {/* Date */}
      <p className="n-reg  text-base  leading-[1.5] text-[#161616]">
        {post.date}
      </p>

      {/* Title */}
      <h3 className="mt-1.5 n-bold fs-20 ls-5 lh-24  text-[#161616] line-clamp-2">
        {post.title}
      </h3>

      {/* Image — 250×175 landscape */}
      <div className="relative mt-4 w-full overflow-hidden bg-neutral-200">
        <div className="aspect-[10/7]">
          <MarketingImgWithFallback
            src={post.imageSrc}
            fallbackSrc={LOCAL_IMAGES.blogDetail}
            alt={post.imageAlt}
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Excerpt */}
      <p className="mt-4 n-book fs-16 lh-24 text-[#161616] line-clamp-4">
        {post.excerpt}
      </p>

      {/* Open File button */}
      <Link
        href={`/blog/${post.id}`}
        className={cn(
          "mt-5 inline-flex items-center justify-center gap-2",
          "h-[44px] w-full max-w-[220px] px-6",
          "border border-[#161616] bg-transparent",
          "n-bold text-[12px] uppercase tracking-[0.08em] text-[#161616]",
          "transition-colors duration-200 hover:bg-[#161616] hover:text-white",
          "sm:h-[48px] sm:text-[13px]",
        )}
      >
        <span>Open File</span>
        <Image
          src="/images/arrow.svg"
          alt=""
          width={12}
          height={12}
          className="shrink-0"
        />
      </Link>
    </article>
  );
}
