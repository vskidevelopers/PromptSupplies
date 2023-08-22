import BlogCard from "../components/BlogCard";
import FeaturedBlogCard from "../components/FeaturedBlogCard";
import { useBlogFunctions } from "../utils/firebase";
// import ComingSoon from "./ComingSoon";

export default function Features() {
  const { allBlogs, blogLoading } = useBlogFunctions();

  console.log("all blogs from blogs page >>", allBlogs);
  console.log("loading >>", blogLoading);
  return (
    <div className="w-screen mt-20 h-full py-10">
      <div className="contaner mx-auto px-10">
        {/* <ComingSoon /> */}
        <div className="my-4 w-full">
          <p className="text-2xl font-bold">Featured Posts</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
          <div className="flex flex-col gap-4">
            {allBlogs?.map((blogItem, index) => (
              <div key={index}>
                <FeaturedBlogCard blogItem={blogItem} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {allBlogs?.map((blogItem, index) => (
              <div key={index}>
                <BlogCard blogItem={blogItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
