import { type ClassValue, clsx } from "clsx";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [router.pathname]);

  return null;
}