import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primaryColor py-2 lg:py-5">
      <div className="max-w-[1280px] mx-auto p-4 flex items-center text-center justify-center">
        <p className=" text-xs sm:text-sm lg:text-base">
          &copy; 2025 |
          <span className="underline underline-offset-2">Designed</span> and{" "}
          <span className="underline underline-offset-2">coded</span> with ❤️ by
          <span> Polok Banik</span>
        </p>
      </div>
    </footer>
  );
}
