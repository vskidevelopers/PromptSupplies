import { useBlogFunctions } from "../../utils/firebase";
import AdminBlogsSection from "./AdminBlogsSection";

export default function UnpublishedBlogs() {
  const { unpublishedBlogs } = useBlogFunctions();
  return (
    <div className="overflow-auto">
      <AdminBlogsSection
        sectionTitle="Unpublished Blogs"
        advertItems={unpublishedBlogs}
      />
    </div>
  );
}
