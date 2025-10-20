export default function Footer() {
  return (
    <footer className="bg-[#F8FBFF] text-center py-6 mt-10 border-t border-gray-200">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Lumeflo Solutions. All Rights Reserved.
      </p>
    </footer>
  );
}
