"use client";
import { useEffect } from "react";
import { loadBundle } from "@/lib/storage";
import { useAppDispatch } from "@/store/hooks";
import { restoreBundle } from "@/store/slices/bundleSlice";
import BundleBuilder from "@/components/builder/BundleBuilder";
import ReviewPanel from "@/components/review/ReviewPanel";

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const saved = loadBundle();

    if (saved) {
      dispatch(restoreBundle(saved));
    }
  }, []);
  return (
    <main className="grid lg:grid-cols-[1fr_400px] gap-8 p-10">
      <BundleBuilder />
      <ReviewPanel />
    </main>
  );
}
