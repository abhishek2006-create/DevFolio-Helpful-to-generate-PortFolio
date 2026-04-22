import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#2a2a2a] bg-[#0a0a0a] py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-blue-500">DEV.</span>
          <span className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Abhishek Bairwa
          </span>
        </div>

        <div className="flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#" className="hover:text-blue-500 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
