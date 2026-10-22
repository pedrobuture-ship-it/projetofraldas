import { useEffect, useState, useSyncExternalStore } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => true,
  );
}

// Mantém o conteúdo montado durante a saída, inclusive em cliques rápidos.
export function usePresence(open: boolean, duration = 180) {
  const reduced = useReducedMotion();
  const [retained, setRetained] = useState(open);
  useEffect(() => {
    if (open) {
      setRetained(true);
      return;
    }
    if (reduced) {
      setRetained(false);
      return;
    }
    const timer = window.setTimeout(() => setRetained(false), duration);
    return () => window.clearTimeout(timer);
  }, [open, reduced, duration]);
  return open || (retained && !reduced);
}
