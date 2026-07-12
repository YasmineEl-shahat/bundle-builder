"use client";

import { saveBundle } from "@/lib/storage";

import { useAppSelector } from "@/store/hooks";
import { Button } from "@/components/ui/button";

export default function SaveBundleLink() {
  const bundle = useAppSelector((state) => state.bundle);

  function handleSave() {
    saveBundle(bundle);
  }

  return (
    <Button
      onClick={handleSave}
      variant="link"
      className="
          block
          w-full
          text-center
          text-sm
          italic
          text-gray-c-650
          underline
          underline-offset-4
          transition-colors
          hover:text-primary
        "
    >
      Save my system for later
    </Button>
  );
}
