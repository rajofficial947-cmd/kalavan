export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Kalavan 🎨</h1>

      <p>
        A marketplace to discover and support Indian artists & traditional art.
      </p>

      <section style={{ marginTop: "30px" }}>
        <h2>Featured Categories</h2>
        <ul>
          <li>🖌️ Paintings</li>
          <li>🎭 Folk Art</li>
          <li>📜 Scriptures</li>
          <li>🧵 Handicrafts</li>
        </ul>
      </section>

      <section style={{ marginTop: "30px" }}>
        <button style={{ padding: "10px 16px", fontSize: "16px" }}>
          Explore Artists
        </button>
      </section>
    </main>
  );
}
