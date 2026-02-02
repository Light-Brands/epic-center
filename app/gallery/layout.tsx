export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-[100]">
      {children}
    </div>
  )
}
