import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Add an event listener to check the scroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle scrolling and toggling the button's visibility
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll back to the top when the button is clicked
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-5 right-5 z-10 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition-all duration-300 ease-in-out cursor-pointer`}
    >
      Back to Top
    </button>
  );
}
