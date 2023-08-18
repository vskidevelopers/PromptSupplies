/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function BlogCard({ blogItem }) {
  console.log("blogItem >>", blogItem);

  const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateString = blogItem.createdDate;
  const [day, monthIndex, year] = dateString.split("-");
  const monthAbbreviation = monthAbbreviations[parseInt(monthIndex, 10) - 1];

  return (
    <div className="flex gap-2 relative">
      <article className="flex max-w-2xl bg-white transition hover:shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
            <span>{year}</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>
              {monthAbbreviation}&nbsp; {day}
            </span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={blogItem?.image}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900">
                {blogItem?.title}
              </h3>
            </a>

            <p className="mt-2 line-clamp-5 text-md/relaxed text-gray-700">
              {blogItem?.content}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <Link
              to={`/blog/${blogItem.id}`}
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
