"use client";

import { useEffect } from "react";

const storageKey = "skill-card-hint-seen";
const documentAttribute = "data-skill-card-hint-seen";
const hintCooldown = 7 * 24 * 60 * 60 * 1000;

export const SkillCardHintStorage = ({
  markSeen = false,
}: {
  markSeen?: boolean;
}) => {
  useEffect(() => {
    try {
      const now = Date.now();
      const seenAt = Number(window.localStorage.getItem(storageKey));
      const hasSeenHint =
        markSeen || (Number.isFinite(seenAt) && now - seenAt < hintCooldown);

      if (markSeen) {
        window.localStorage.setItem(storageKey, String(now));
      }

      if (hasSeenHint) {
        document.documentElement.setAttribute(documentAttribute, "true");
      } else {
        window.localStorage.removeItem(storageKey);
        document.documentElement.removeAttribute(documentAttribute);
      }
    } catch {
      document.documentElement.removeAttribute(documentAttribute);
    }
  }, [markSeen]);

  return null;
};
