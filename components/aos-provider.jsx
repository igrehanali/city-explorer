"use client"

import { useEffect } from "react"

export function AosProvider({ children }) {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      // Use dynamic import and access the default export
      import("aos").then((AosModule) => {
        const AOS = AosModule.default
        AOS.init({
          duration: 800,
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
        })
      })
    }
  }, [])

  return <>{children}</>
}

