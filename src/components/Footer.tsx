
export function Footer() {
  return (
    <footer className="border-t border-ink/8 px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm text-ink/50">
          &copy; {new Date().getFullYear()} Gurpreet Singh Kaur
        </p>
      </div>
    </footer>
  );
}
