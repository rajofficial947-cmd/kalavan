import "./globals.css";

export const metadata = {
  title: "Kalavan – Indian Art Marketplace",
  description:
    "Discover and support Indian artists, folk art, scriptures, and handicrafts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header
          style={{
            padding: "16px 40px",
            borderBottom: "1px solid #eee",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Kalavan 🎨 | Indian Art Marketplace
        </header>

        {children}

        <footer
          style={{
            padding: "20px 40px",
            borderTop: "1px solid #eee",
            marginTop: "40px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          © {new Date().getFullYear()} Kalavan. Preserving Indian Art.
        </footer>
      </body>
    </html>
  );
}
