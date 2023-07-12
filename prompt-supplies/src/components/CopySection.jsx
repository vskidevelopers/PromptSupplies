import { Link } from "react-router-dom";

export default function CopySection() {
  return (
    <div className="bg-gray-800 py-4 text-gray-300 text-sm text-center">
      <div className="container mx-auto">
        <div className="flex ">
          <div className="w-1/2 flex justify-end">
            <p>
              &copy; 2023 <Link to="/admin"> Prompt Supplies. </Link> All rights
              Preserved.
            </p>
          </div>

          <div className="flex w-1/2 justify-end">
            <p>
              Designed by{" "}
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
      </div>
    </div>
  );
}
