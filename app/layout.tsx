import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FollowUpFox",
  description: "Never lose a lead again."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial"
        }}
      >
        {children}
      </body>
    </html>
  );
}
