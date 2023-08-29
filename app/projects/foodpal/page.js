"use client"
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      Foodpal Project Page
      <a class="underline cursor-pointer" onClick={() => router.replace("/projects")}>
        ← All Projects
      </a>
    </div>
  );
}
