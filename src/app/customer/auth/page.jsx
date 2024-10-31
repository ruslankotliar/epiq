"use client";

import { authUser } from "@src/queries/customer";
import createSupabaseBrowserClient from "@src/utils/supabase/browserClient";
import getBaseUrl from "@src/utils/url";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function AuthComponent() {
  const supabase = createSupabaseBrowserClient();
  const searchParams = useSearchParams();

  const { mutate, isError, error } = useMutation({
    mutationFn: () => {
      console.log(
        `Redirecting to: ${getBaseUrl().api}auth/callback/${searchParams.get("referrerId")}`,
      );
      // authUser(supabase, searchParams.get("referrerId"))
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  if (isError) return <p>Error signing in: {error}</p>;

  return null;
}

export default function AuthPage() {
  return (
    <Suspense>
      <AuthComponent />
    </Suspense>
  );
}
