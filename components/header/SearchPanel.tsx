"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import type { SearchConfig } from "@/types/header";
import HeaderImage from "@/components/header/HeaderImage";

interface Props {
  config: SearchConfig;
  open: boolean;
  onClose: () => void;
}

export default function SearchPanel({ config, open, onClose }: Props) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const q = term.trim();
    if (!q) {
      inputRef.current?.focus(); 
      return;
    }
    router.push(`${config.action}?${config.param}=${encodeURIComponent(q)}`);
    setTerm("");
    onClose();
  };

  return (
    <div className={`search_form ${open ? "active" : ""}`.trim()} role="search" aria-hidden={!open} inert={!open}>
      <a
        href="#0"
        role="button"
        className="search-close"
        aria-label={config.closeIcon?.alt || "Close search"}
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        {config.closeIcon && <HeaderImage image={config.closeIcon} />}
      </a>
      <form className="form-group" onSubmit={submit}>
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder={config.placeholder}
          aria-label={config.placeholder}
          value={term}
          maxLength={120}
          onChange={(e) => setTerm(e.target.value)}
        />
        <input type="submit" className="btn" value="" aria-label="Search" />
      </form>
    </div>
  );
}
