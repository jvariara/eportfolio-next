import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parentVariant(delay: number, stagger: number) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };
}

export function childrenVar(
  direction: "vertical" | "horizontal",
  animationType: "spring" | "tween",
) {
  if (direction === "vertical") {
    return {
      hidden: { y: "-30px", opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: animationType,
        },
      },
    };
  } else if (direction === "horizontal") {
    return {
      hidden: { x: "-30px", opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: animationType,
        },
      },
    };
  }
}

export function constructMetaData({
  title = "Justin Variara",
  description = "E-Portfolio to showcase my skills and projects",
  image = "thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    icons,
    metadataBase: new URL(
      "https://www.justinvariara.com"
    ),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
