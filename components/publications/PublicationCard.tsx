import { MarketingImgWithFallback } from "@/components/common/MarketingImgWithFallback";
import { LOCAL_IMAGES } from "@/lib/local-images";
import { cn } from "@/utils/cn";
import Image from "next/image";

export type PublicationIssue = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  fallbackSrc?: string;
  href?: string;
  fileUrl?: string;
};

type PublicationCardProps = {
  issue: PublicationIssue;
  className?: string;
  onOpenFile?: (issue: PublicationIssue) => void;
};

export function PublicationCard({
  issue,
  className,
  onOpenFile,
}: PublicationCardProps) {
  const fallbackSrc = issue.fallbackSrc ?? LOCAL_IMAGES.blogDetail;

  function handleOpenFile() {
    onOpenFile?.(issue);
  }

  return (
    <article className={cn("flex flex-col items-center", className)}>
      {/* Portrait magazine/gazette cover */}
      <div className="relative w-full overflow-hidden bg-neutral-200">
        <div className="aspect-[345/451]">
          <MarketingImgWithFallback
            src={issue.imageSrc}
            fallbackSrc={fallbackSrc}
            alt={issue.imageAlt}
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-5 w-full text-center n-bold fs-20 lh-24 text-[#161616]">
        {issue.title}
      </h3>

      {/* Open File button */}
      <button
        type="button"
        onClick={handleOpenFile}
        className={cn(
          "mt-5 inline-flex items-center justify-center gap-2",
          "h-[44px] w-full max-w-[220px] px-6",
          "border border-[#161616] bg-transparent",
          "n-bold text-[12px] uppercase tracking-[0.08em] text-[#161616]",
          "transition-colors duration-200 hover:bg-[#161616] hover:text-white",
          "sm:h-[48px] sm:text-[13px]",
          "cursor-pointer",
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
      </button>
    </article>
  );
}
