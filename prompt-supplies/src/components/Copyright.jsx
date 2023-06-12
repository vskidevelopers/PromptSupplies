import React from "react";

export default function Copyright() {
  return (
    <div className="bg-gray-800 py-4 text-gray-300 text-sm text-center">
      <div className="container mx-auto">
        <p>
          &copy; 2023 Prompt Supplies. Designed by{" "}
          <a
            href="https://www.vskidevelopers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            VSKI Developers
          </a>
        </p>
      </div>
    </div>
  );
}
