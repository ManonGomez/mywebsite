"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/resources";
import { Flex, Spinner } from "@once-ui-system/core";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();

  const normalizedPathname = useMemo(() => {
    if (!pathname) return null;
    if (pathname === "/") return "/";
    return pathname.replace(/\/$/, "");
  }, [pathname]);

  const isRouteEnabled = useMemo(() => {
    if (!normalizedPathname) return false;

    if (normalizedPathname in routes) {
      return routes[normalizedPathname as keyof typeof routes];
    }

    // Allow dynamic children of enabled routes (e.g. /work/[slug])
    const dynamicRoutes = ["/work"] as const;
    for (const route of dynamicRoutes) {
      if (normalizedPathname.startsWith(`${route}/`) && routes[route]) {
        return true;
      }
    }

    return false;
  }, [normalizedPathname]);

  if (!normalizedPathname) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (!isRouteEnabled) {
    return <NotFound />;
  }

  return <>{children}</>;
};

export { RouteGuard };
