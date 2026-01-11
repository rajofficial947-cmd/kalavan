export default function HomePage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Kalavan 🎨
      </h1>

      <p style={{ fontSize: "18px", color: "#555" }}>
        A marketplace to discover and support Indian artists & traditional art.
      </p>

      <hr style={{ margin: "30px 0" }} />

      <section>
        <h2>Featured Categories</h2>
        <ul>
          <li>🖌️ Warli Paintings</li>
          <li>🎭 Folk Art</li>
          <li>📜 Handwritten Scriptures</li>
          <li>🪔 Handcrafted Decor</li>
        </ul>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Coming Soon</h2>
        <p>
          Artist profiles • Product listings • Secure payments • Order tracking
        </p>
      </section>
    </main>
  );
}
