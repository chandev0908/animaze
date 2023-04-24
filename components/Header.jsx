import { useRef, useState } from "react";

import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
});
const inter2 = Inter({
  weight: "200",
  subsets: ["latin"],
});

export default function Header() {
  const router = useRouter();
  const { q } = router.query;
  // states
  const [navVisibility, setNavVisibility] = useState(false);
  const [sQuery, setsQuery] = useState("");
  // refs
  const inputRef = useRef(null);
  const mobileSearchNavRef = useRef(null);
  // actions
  const handleSubmit = (e) => {
    router.push(`/search/?q=${sQuery}`);
    setsQuery("");
    inputRef.current.value = "";
  };

  const onClickSearchNav = () => {
    if (!navVisibility) {
      mobileSearchNavRef.current.classList.remove("translate-y-[-12rem]");
      inputRef.current.focus();
      setNavVisibility(true);
    } else {
      mobileSearchNavRef.current.classList.add("translate-y-[-12rem]");
      setNavVisibility(false);
    }
    console.log(mobileSearchNavRef.current.autofocus);
  };

  return (
    <header className="relative m-auto">
      <main
        className={`w-full grid grid-flow-col content-center z-20 bg-[#1A1D2C]`}
      >
        <div
          className={`${inter.className} logo-container text-start w-fit p-6`}
        >
          <h1 className="text-[#0CFFFF] text-2xl">Animaze</h1>
          <p className={`${inter2.className} text-white text-xs text-end`}>
            Beta
          </p>
        </div>
        {/* Large Displays */}
        <div className="search-container grid content-center p-4 hidden md:grid">
          <form
            onSubmit={handleSubmit}
            className="grid grid-flow-col content-center justify-end gap-2"
          >
            <input
              type="text"
              name="q"
              id="search-input"
              onChange={(e) => setsQuery(e.target.value)}
              className="w-fit rounded-md bg-[#D9D9D9]"
              ref={inputRef}
              autoComplete="off"
            />
            <div className="icon-container w-9">
              <svg
                type="submit"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          </form>
        </div>
        {/* Small Display */}
        <div className="search-container grid content-center p-4 justify-end md:hidden">
          <div className="icon-container w-9" onClick={onClickSearchNav}>
            <svg
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
        </div>
      </main>
      <div
        className="mobile-input-container w-full z-10 p-1 m-auto md:hidden absolute transition-all duration-500 translate-y-[-12rem]"
        ref={mobileSearchNavRef}
      >
        <form className="m-auto w-[100%] grid grid-flow-col grid-cols-1fr-auto">
          <input
            type="text"
            name="q"
            id="mobile-input"
            className="w-[97.5%] rounded-md bg-[#D9D9D9] mx-auto"
            autoComplete="off"
            ref={inputRef}
          />
          <div className="close-btn-container w-10 p-0.5">
            <svg
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
              <path d="m15 9-6 6"></path>
              <path d="m9 9 6 6"></path>
            </svg>
          </div>
        </form>
      </div>
    </header>
  );
}
