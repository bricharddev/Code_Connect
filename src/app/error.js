"use client"; // Error components must be Client Components

import ErrorPage from "@/components/errorPage";
import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <ErrorPage />
    </div>
  );
}
