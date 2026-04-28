"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ToastInput = {
  title: string;
  description?: string;
};

type ToastItem = ToastInput & { id: string };

let listeners: Array<(toast: ToastItem) => void> = [];

export function toast(input: ToastInput) {
  const item = { ...input, id: crypto.randomUUID() };
  listeners.forEach((listener) => listener(item));
}

export function useToast() {
  return { toast };
}

export function Toaster() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const listener = (item: ToastItem) => {
      setToasts((current) => [...current, item]);

      window.setTimeout(() => {
        setToasts((current) => current.filter((toastItem) => toastItem.id !== item.id));
      }, 3500);
    };

    listeners.push(listener);

    return () => {
      listeners = listeners.filter((candidate) => candidate !== listener);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3 sm:w-full">
      <AnimatePresence>
        {toasts.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.28 }}
            className="rounded-sm border border-[#222222] bg-card px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            role="status"
            aria-live="polite"
          >
            <p className="text-sm font-semibold text-parchment">{item.title}</p>
            {item.description ? <p className="mt-1 text-sm text-muted">{item.description}</p> : null}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
