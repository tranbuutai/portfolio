import LoadingSkeleton from "@/components/loading";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-500 text-white">
      <h1>Loading...</h1>
    </div>
  );
}
