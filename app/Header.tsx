import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="divide-y border-b border-gray-200 dark:border-gray-800">
      <div className="px-4 py-3 md:py-6 lg:px-6">
        <div className="flex items-center space-y-2 md:space-x-6 md:space-y-0">
          <Link className="mr-4 text-2xl font-bold tracking-tighter" href="/">
            Bulletin Board
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/"
            >
              Top
            </Link>
            <Link
              className="rounded-md bg-black px-4 py-3 font-medium text-white"
              href="/post/new"
            >
              Create Post
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
