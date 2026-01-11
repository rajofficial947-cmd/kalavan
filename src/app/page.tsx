export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Kalavan
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Discover authentic Indian art directly from local artists.
          Every purchase supports real creators and living traditions.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Explore Art
        </button>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Art Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Warli Paintings",
            "Madhubani Art",
            "Sculptures",
            "Handicrafts",
          ].map((category) => (
            <div
              key={category}
              className="border rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <h3 className="font-medium">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY KALAVAN */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Kalavan?
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold mb-2">🎨 Direct from Artists</h3>
            <p className="text-sm text-gray-600">
              No middlemen. Artists earn what they deserve.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">🇮🇳 Indian Heritage</h3>
            <p className="text-sm text-gray-600">
              Preserving traditional Indian art forms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">🚚 Trusted Delivery</h3>
            <p className="text-sm text-gray-600">
              Secure packaging and reliable shipping.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kalavan. Made for Indian Artists.
      </footer>

    </main>
  );
}
