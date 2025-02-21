import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>By Tanishq Kapoor</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="https://www.linkedin.com/in/tanishq-kapoor-132a5a261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="text-gray-400 hover:text-gray-300 transition-colors">
              Connect on Linkedin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;