import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackSweep – Auto-archive old Slack threads by keyword",
  description: "Automatically archive or delete Slack threads older than X days based on channel, keyword, or participant rules. Keep your workspace clean effortlessly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="25426e30-cdab-4013-a7b0-b676529f8750"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
