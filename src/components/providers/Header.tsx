// import { currentUser } from "@clerk/nextjs/server";
// import { ConvexHttpClient } from "convex/browser";
// import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import HeaderProfileBtn from "./HeaderProfileBtn";

async function Header() {
  // const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  // const user = await currentUser();

  // const convexUser = await convex.query(api.users.getUser, {
  //   userId: user?.id || "",
  // });

  return (
    <div className="relative z-10">
      <div
        className="flex items-center lg:justify-between justify-center 
        bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg"
      >
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 
                group-hover:opacity-100 transition-all duration-500 blur-xl"
            />
 {/* bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 */}
            <div className="flex flex-col justify-center items-center">
              <span className="block text-lg text-white font-pressStart text-transparent bg-clip-text">
                AlgoShare
              </span>
              <span className="block  font-pressStart text-xs text-blue-400/60 font-medium">
                Connect with your Peers
              </span>
            </div>
          </Link>

          {/* <nav className="flex items-center space-x-1">
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 
                hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
                to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span
                className="text-sm font-medium relative z-10 group-hover:text-white
                 transition-colors"
              >
                Snippets
              </span>
            </Link>
          </nav> */}
          <div className="bg-indigo-600/80 p-4 bg-opacity-70 border-md border-white rounded-md">
            <div className="max-w-3xl mx-auto">
              <p className=" text-indigo-100">
                New{" "}
                <span className="font-semibold text-yellow-400">
                  Features
                </span>{" "}
                are {" "}
                <span className="font-semibold text-pink-400">
                  Loading...
                </span>{" "}
                Stay tuned 
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <ThemeSelector />
            <LanguageSelector />
          </div>

          <SignedIn>
            <RunButton />
          </SignedIn>

          <div className="pl-3 border-l border-gray-800">
            <HeaderProfileBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
