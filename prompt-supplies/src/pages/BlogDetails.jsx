import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlogFunctions } from "../utils/firebase";

export default function BlogDetails() {
  const { getBlogDetails, blogDetails } = useBlogFunctions();

  const { id } = useParams();
  useEffect(() => {
    const getBlog = async () => {
      await getBlogDetails(id);
    };

    getBlog();
  }, []);
  if (blogDetails) {
    return (
      <div className="h-full w-screen container mx-auto my-20">
        <div className="container mx-auto px-2 md:px-20 flex flex-col gap w-full">
          <p>Posted on 1/01/23</p>
          <h2 className="text-3xl font-bold py-4"> {blogDetails.title}</h2>
        </div>
        <div className="w-full h-full md:h-96 overflow-y-hidden bg-contain bg-center">
          <img src={blogDetails.image} className="" alt="" />
        </div>
        <div className="container mx-auto px-20 flex flex-col gap-2 w-full"></div>
        <h2 className="text-4xl font-semibold px-3 text-center py-4">
          {" "}
          {blogDetails.title}
        </h2>
        <div className="container mx-auto px-5 md:px-40">
          <p>{blogDetails.content}</p>
        </div>
      </div>
    );
  }
  return <div>BlogDetails</div>;
}
