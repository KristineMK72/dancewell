const photos = [
  // After you upload images into /public/photos, add file names here like:
  // { src: "/photos/dance1.jpg", alt: "Ballroom moment" },
];

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold">Gallery</h1>
      <p className="text-white/75 max-w-3xl">
        Upload your images to <code className="text-white/90">public/photos</code>,
        then add filenames to the list in this page.
      </p>

      {photos.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white/70">
          No photos yet. Once you upload them, this page will automatically become a grid gallery.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p) => (
            <div key={p.src} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              {/* We’ll switch to next/image later once images are in */}
              <img src={p.src} alt={p.alt} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
