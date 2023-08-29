"use client"
import { useRouter } from "next/navigation";
export default function PastryShop() {

  const router = useRouter()

  
  return (
    <div className="flex flex-col">
      pastry shop Project Page
      <a class="underline cursor-pointer" onClick={() => router.replace('/projects')}>
        ← All Projects
      </a>
    </div>
  );
}
