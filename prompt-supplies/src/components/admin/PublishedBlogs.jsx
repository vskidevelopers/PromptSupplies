import { useBlogFunctions } from "../../utils/firebase";
import AdminBlogsSection from "./AdminBlogsSection";

export default function PublishedBlogs() {
  const { publishedBlogs } = useBlogFunctions();
  return (
    <div className="overflow-auto">
      <AdminBlogsSection
        sectionTitle="Published Blogs"
        blogItems={publishedBlogs}
      />
    </div>
  );
}
