import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function FeaturedBlogCard({ blogItem }) {
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
  const [day, monthIndex] = dateString.split("-");
  const monthAbbreviation = monthAbbreviations[parseInt(monthIndex, 10) - 1];

  return (
    <div className=" py-5 px-4 transition hover:shadow-xl">
      <div className="block">
        <img
          alt={blogItem?.title}
          src={blogItem?.image}
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />
        <Link to={`/blog/${blogItem.id}`}>
          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {blogItem?.title}
          </h3>
        </Link>

        <div className="flex w-full h-full items-center">
          <p className="mt-2  max-w-md  line-clamp-5 text-md/relaxed text-gray-700">
            {blogItem?.content}
          </p>
          <div className="mx-5 bg-[#FDB715] w-full h-full py-4 px-2 flex flex-col items-center">
            <p className="text-5xl font-black font-mono">{day}</p>
            <p className="font-semibold text-xl font-mono">
              {" "}
              {monthAbbreviation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
