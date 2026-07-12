import { BundleState } from "@/types/bundle";

const STORAGE_KEY = "bundle-builder";

export function saveBundle(bundle: BundleState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bundle));
}

export function loadBundle(): BundleState | null {
  const bundle = localStorage.getItem(STORAGE_KEY);

  if (!bundle) return null;

  return JSON.parse(bundle);
}

export function clearBundle() {
  localStorage.removeItem(STORAGE_KEY);
}
