import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Minder",
    short_name: "Minder",
    description: "Reminders for what's worth remembering.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0e0e",
    theme_color: "#121212",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
