"use client";

import { useSession } from "@supabase/auth-helpers-react";
import Link from "next/link";

export default function Home() {
  const session = useSession();

  return (
    <p>Hello</p>
  );
}; 