import Image from "next/image";

interface ImageProps {
  readonly imageDesktop: string;
  readonly imageMobile?: string;
  readonly altText?: string;
  readonly width?: number;
  readonly height?: number;
  readonly className?: string;
  readonly quality?: number;
  readonly priority?: boolean;
  readonly layout?: "fill" | "fixed" | "intrinsic" | "responsive";
  readonly objectFit?: "contain" | "cover";
}

function ImageComponent({
  imageDesktop,
  imageMobile,
  altText,
  width,
  height,
  className,
}: ImageProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative hidden w-full lg:block">
        <Image
          src={imageDesktop}
          alt={altText || ""}
          width={width}
          height={height}
          className="object-cover"
        />
      </div>

      {imageMobile && (
        <div className="relative block w-full lg:hidden">
          <Image
            src={imageMobile}
            alt={altText || ""}
            width={width}
            height={height}
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

export { ImageComponent };
