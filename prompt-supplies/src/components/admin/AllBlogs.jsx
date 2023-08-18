import { useBlogFunctions } from "../../utils/firebase";
import AdminBlogsSection from "./AdminBlogsSection";

export default function AllBlogs() {
  const { allBlogs } = useBlogFunctions();
  return (
    <div className=" ">
      <AdminBlogsSection sectionTitle="All Blogs" blogItems={allBlogs} />
    </div>
  );
}
