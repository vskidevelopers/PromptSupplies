import { useBlogFunctions } from "../../utils/firebase";
import AdminBlogsSection from "./AdminBlogsSection";

export default function FeaturedBlogs() {
  const { featuredBlogs } = useBlogFunctions();
  return (
    <div className="overflow-auto">
      <AdminBlogsSection
        sectionTitle="Featured Blogs"
        blogItems={featuredBlogs}
      />
    </div>
  );
}
