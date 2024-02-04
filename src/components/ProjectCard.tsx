"use client";
import { Project } from "@/payload-types";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { Github, Link2 } from "lucide-react";
import { TECH_STACK } from "@/config";
import ImageSlider from "./ImageSlider";

interface ProjectCardProps {
  project: Project | null;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // used for staggering animation on the product
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!project || (!isVisible && isMounted)) return <ProjectPlaceholder />;

  const validUrls = project.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  if (isVisible && project) {
    return (
      <div className="flex items-center justify-center rounded-3xl border border-primary/20 bg-gradient-to-bl from-primary to-primary/40 p-2.5">
        <div className="flex max-w-[351px] flex-col items-start justify-center rounded-2xl border border-primary/20 bg-muted">
          <div className="relative aspect-video w-[350px] overflow-hidden rounded-t-2xl border-b border-b-primary/40">
            <ImageSlider urls={validUrls} />
          </div>
          <div className="flex w-full items-center justify-between border-b border-b-primary/40 p-2.5">
            <span className="w-full bg-primary bg-clip-text text-lg font-bold text-transparent md:text-xl">
              {/* Title */}
              {project.name}
            </span>
            <div className="flex items-center justify-between gap-5">
              {/* Links */}
              {project.github_url && (
                <Link href={project.github_url} target="_blank">
                  <Github className="w-5 h-5 text-primary hover:text-primary-foreground transition-all ease-in" />
                </Link>
              )}
              {project.live_url && (
                <Link href={project.live_url} target="_blank">
                  <Link2 className="w-5 h-5 text-primary hover:text-primary-foreground transition-all ease-in" />
                </Link>
              )}
            </div>
          </div>
          <p className="max-w-[350px] border-b border-b-primary/40 p-2.5 text-sm text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-col items-start justify-center gap-2.5 p-2.5">
            <span className="bg-primary bg-clip-text text-transparent font-semibold md:text-lg lg:text-md">
              Technologies:
            </span>
            <div className="flex w-full flex-wrap items-center justify-start gap-2.5">
              {project?.tech?.map((tech, i) => (
                <div
                  key={i}
                  className="text-center px-2 py-1 md:text-sm text-xs lg:text-md rounded-md bg-gradient-to-bl from-primary to-primary/40"
                >
                  {TECH_STACK[tech]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const ProjectPlaceholder = () => {
  return (
    <div className="flex items-center justify-center rounded-3xl border border-primary/20 bg-gradient-to-b from-primary to-primary/40 p-2.5">
      <div className="flex max-w-[351px] flex-col items-start justify-center rounded-2xl border border-primary/20 bg-muted">
        <div className="relative aspect-video w-[350px] overflow-hidden rounded-t-2xl border-b border-b-primary/40 bg-primary">
          {/* TODO: images, Image slider */}
          <Skeleton className="w-full h-full" />
        </div>
        <div className="flex w-full items-center justify-between border-b border-b-primary/40 p-2.5">
          <span className="w-full ">
            {/* Title */}
            <Skeleton className="w-2/3 h-5 bg-primary" />
          </span>
          <div className="flex items-center justify-between gap-5">
            {/* Links */}
            <Skeleton className="w-5 h-5 bg-primary" />
            <Skeleton className="w-5 h-5 bg-primary" />
          </div>
        </div>
        <p className="max-w-[350px] w-full border-b border-b-primary/40 p-2.5 text-sm text-muted-foreground">
          <Skeleton className="w-full h-32 bg-primary" />
        </p>
        <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 w-full">
          <span className="bg-primary bg-clip-text text-transparent font-semibold md:text-lg lg:text-md">
            Technologies:
          </span>
          <div className="flex w-full items-center justify-start gap-2.5">
            {/* tech */}
            {new Array(4).fill(null).map((_, i) => (
              <Skeleton className="h-5 w-1/4 bg-primary" key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
