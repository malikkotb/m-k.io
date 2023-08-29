"use client"
import { useRouter } from "next/navigation";
export default function StickyNotes() {

  const router = useRouter()

  
  return (
    <div className="flex flex-col">
      Sticky Project Page
      <a class="underline cursor-pointer" onClick={() => router.replace('/projects')}>
        ← All Projects
      </a>
    </div>
  );
}
