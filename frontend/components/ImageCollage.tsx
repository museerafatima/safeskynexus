import Image from "next/image";

/* ==========================================================================
   IMAGE COLLAGE
   Mission, Vision and History each hand-rolled the same two-image collage
   with slightly different sizes, radii and offsets — and each pinned the
   inset card with negative offsets (-right-8, -bottom-6), which pushed it
   outside the section and forced `overflow-hidden` on the parent to hide the
   resulting horizontal scrollbar.

   Here the inset card is laid out INSIDE the collage's own box: the main
   image takes 84% of the width, the inset card sits flush to the opposite
   corner at 36%, and the two overlap in the middle. Nothing ever crosses the
   boundary, so no ancestor needs to clip and sticky positioning stays intact.
   ========================================================================== */

type CollageImage = { src: string; alt: string };

export default function ImageCollage({
  main,
  inset,
  align = "right",
  className = "",
}: {
  main: CollageImage;
  inset: CollageImage;
  /** Which corner the inset card occupies. Alternate it down the page. */
  align?: "left" | "right";
  className?: string;
}) {
  const insetSide = align === "right" ? "right-0" : "left-0";

  return (
    <div
      className={`group stage relative mx-auto w-full max-w-md lg:mx-0 ${className}`}
    >
      {/* Main frame */}
      <div
        className={`relative aspect-4/3 w-[84%] overflow-hidden rounded-panel shadow-lift transition-shadow duration-500 ease-soft group-hover:shadow-float ${
          align === "right" ? "mr-auto" : "ml-auto"
        }`}
      >
        <Image
          src={main.src}
          alt={main.alt}
          fill
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 380px"
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.05]"
        />
      </div>

      {/* Inset card — matted in white so it reads as a physical print */}
      <div
        className={`absolute bottom-0 ${insetSide} aspect-square w-[36%] rounded-card bg-surface p-1.5 shadow-float transition-transform duration-500 ease-soft group-hover:-translate-y-1.5 sm:p-2`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[0.625rem]">
          <Image
            src={inset.src}
            alt={inset.alt}
            fill
            sizes="(max-width: 640px) 30vw, 170px"
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}