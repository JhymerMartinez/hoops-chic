"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

type CopyState = "idle" | "copied" | "error";

export function CopyProductLinkButton({
  fallbackUrl,
  label,
  copiedLabel,
  errorLabel,
}: {
  fallbackUrl: string;
  label: string;
  copiedLabel: string;
  errorLabel: string;
}) {
  const [state, setState] = useState<CopyState>("idle");

  async function handleCopy() {
    try {
      await copyText(getCurrentPageUrl(fallbackUrl));
      setState("copied");
    } catch {
      setState("error");
    }
  }

  const currentLabel =
    state === "copied" ? copiedLabel : state === "error" ? errorLabel : label;

  return (
    <Button type="button" variant="outline" onClick={handleCopy}>
      {state === "copied" ? (
        <Check className="size-4" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      <span aria-live="polite">{currentLabel}</span>
    </Button>
  );
}

function getCurrentPageUrl(fallbackUrl: string) {
  try {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch {
    return fallbackUrl;
  }
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) throw new Error("Unable to copy product URL");
}
