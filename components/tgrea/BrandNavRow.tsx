"use client";

import Image from "next/image";

interface BrandNavRowProps {
  imageSrc: string;
}

export function BrandNavRow({ imageSrc }: BrandNavRowProps) {
  const scrollToBrand = (id: number) => {
    const element = document.getElementById(`brand-block-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-full py-2">
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Image
          src={imageSrc}
          alt="Brand navigation - Ground Holding, Guardians International, Guardians Cavalry"
          width={2600}
          height={600}
          className="h-auto w-full"
          sizes="100vw"
          priority
        />
        {/* Clickable overlay areas for each brand panel */}
        <div className="absolute inset-0 flex">
          <button
            type="button"
            onClick={() => scrollToBrand(1)}
            className="h-full w-1/3 cursor-pointer"
            aria-label="Navigate to Ground Holding brand section"
          />
          <button
            type="button"
            onClick={() => scrollToBrand(2)}
            className="h-full w-1/3 cursor-pointer"
            aria-label="Navigate to Guardians International brand section"
          />
          <button
            type="button"
            onClick={() => scrollToBrand(3)}
            className="h-full w-1/3 cursor-pointer"
            aria-label="Navigate to Guardians Cavalry brand section"
          />
        </div>
      </div>
    </div>
  );
}
