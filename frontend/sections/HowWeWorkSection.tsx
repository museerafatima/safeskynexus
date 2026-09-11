export default function HowWeWorkSection() {
  return (
    <section className="max-w-container mx-auto px-6 py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-navy">How We </span>
          <span className="text-orange">Work</span>
        </h2>
        <p className="text-body leading-relaxed">
          Our development philosophy combines artificial intelligence,
          aerospace engineering, and computer vision to create intelligent
          autonomous systems capable of making real-time decisions without
          relying on external infrastructure.
        </p>
      </div>

      {/* Video placeholder */}
      <button
        type="button"
        aria-label="Play video"
        className="w-full max-w-4xl mx-auto h-64 md:h-96 bg-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-300 transition-colors"
      >
        <span className="w-0 h-0 border-t-16 border-t-transparent border-b-16 border-b-transparent border-l-26 border-l-navy ml-2" />
      </button>
    </section>
  );
}
