export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-orange-50 to-white text-center py-8 px-6">
      <p className="bg-gradient-to-br from-orange-50 to-white text-sm">
        © {currentYear} Notely. Crafted with care for your ideas.
      </p>
    </footer>
  );
}
