"use client";

import React, { useState, useEffect, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import LoadingComponent from './LoadingComponent';

const FullPageLoader = () => {
  const [isPending, startTransition] = useTransition(); // Use transition hook
  const [isLoading, setIsLoading] = useState(true); // Start with loading state
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => setIsLoading(true); // Set loading state on navigation start
    const handleComplete = () => setIsLoading(false); // Set loading state on navigation complete

    // Listen for changes in the router state
    router.prefetch(pathname); // Prefetch current route

    startTransition(() => {
      handleStart(); // Trigger loader on page load start
      handleComplete(); // Hide loader after page load completes
    });
  }, [pathname, router]);

  if (!isLoading && !isPending) return null; // Hide loader when not loading or pending

  return (
		<LoadingComponent />
  );
};

export default FullPageLoader;
