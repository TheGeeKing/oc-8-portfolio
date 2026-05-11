"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ACTIVE_ATTRIBUTE = "data-project-card-highlighted";

const getHashTargetId = () => {
  const hash = window.location.hash.slice(1);
  if (!hash) return "";

  try {
    return decodeURIComponent(hash);
  } catch {
    return hash;
  }
};

const updateHighlightedProject = () => {
  document
    .querySelectorAll<HTMLElement>(`.project-card[${ACTIVE_ATTRIBUTE}]`)
    .forEach((card) => card.removeAttribute(ACTIVE_ATTRIBUTE));

  const targetId = getHashTargetId();
  if (!targetId) return;

  const target = document.getElementById(targetId);
  if (!target?.classList.contains("project-card")) return;

  target.setAttribute(ACTIVE_ATTRIBUTE, "true");
};

export const ProjectCardTargetSync = () => {
  const pathname = usePathname();

  useEffect(() => {
    updateHighlightedProject();

    window.addEventListener("hashchange", updateHighlightedProject);
    window.addEventListener("popstate", updateHighlightedProject);

    return () => {
      window.removeEventListener("hashchange", updateHighlightedProject);
      window.removeEventListener("popstate", updateHighlightedProject);
    };
  }, [pathname]);

  return null;
};
