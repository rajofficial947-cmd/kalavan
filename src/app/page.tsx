export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "8px" }}>
          Kalavan 🎨
        </h1>
        <p style={{ color: "#555", fontSize: "16px" }}>
          A marketplace to discover and support Indian artists & traditional art.
        </p>
      </header>

      <section style={{ marginBottom: "32px" }}>
        <h2>Featured Categories</h2>
        <ul>
          <li>🖌️ Paintings</li>
          <li>🎭 Folk Art</li>
          <li>📜 Scriptures</li>
          <li>🧵 Handicrafts</li>
        </ul>
      </section>

      <section>
        <h2>Explore Artists</h2>
        <p style={{ color: "#666" }}>
          Coming soon — real artists, real stories, real culture.
        </p>
      </section>
    </main>
  );
}
