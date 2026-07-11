import BundleBuilder from "@/components/builder/BundleBuilder";
import ReviewPanel from "@/components/review/ReviewPanel";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-[1fr_400px] gap-8 p-10">
      <BundleBuilder />
      <ReviewPanel />
    </main>
  );
}
