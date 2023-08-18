import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useAuth, useBlogFunctions } from "../../utils/firebase";

const CreateBlogPostForm = () => {
  const {
    blogLoading,
    uploadBlogProgress,
    blogImageURL,
    handlePostBlog,
    uploadBlogPoster,
  } = useBlogFunctions();
  const { user } = useAuth();
  const { register, handleSubmit, getValues, setValue, errors, reset } =
    useForm();

  const handleImageDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setValue("imagePoster", file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: handleImageDrop,
  });

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0"); // Add leading zero if needed
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  const onSubmit = (data) => {
    console.log(data);
    console.log("data.imagePoster >>", data.imagePoster.name);
    if (blogImageURL) {
      console.log("Image Url >>", blogImageURL);
      const blogData = {
        title: data.title,
        content: data.content,
        tags: data.tags,
        category: data.category,
        image: blogImageURL,
        createdDate: formattedDate,
        publishedDate: null,
        published: false,
        featured: false,
        author: { id: user.uid, email: user.email },
      };
      console.log("Blog Data to upload >>", blogData);
      handlePostBlog(blogData);
      alert("We have recieved your request. we'll be in touch shortly");
      reset();
    } else {
      console.log("No Image  ");
      alert("Uploading files... Click OK to continue");
      if (data.imagePoster) {
        uploadBlogPoster(data.imagePoster);
      }
    }
  };

  const tagsOptions = ["Technology", "Travel", "Food", "Fashion"]; // Add more options if needed
  const categoryOptions = ["Tech", "Lifestyle", "Food"]; // Add more options if needed

  return (
    <div className="relative h-full w-full">
      <div className="z-50">
        <div className="container mx-auto ">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Create a Blog Post
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="title">
                Title:
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: true })}
                className="w-full border border-yellow-400 rounded py-2 px-3"
              />
              {errors?.title && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="content">
                Content:
              </label>
              <textarea
                id="content"
                {...register("content", { required: true })}
                className="w-full border border-yellow-400 rounded py-2 px-3"
                rows="6" // Adjust the number of rows as needed
              ></textarea>
              {errors?.content && <span>This field is required</span>}
            </div>

            <div className="flex w-full gap-5">
              <div className="mb-4 w-1/2">
                <label className="block text-sm font-bold mb-2" htmlFor="tags">
                  Tags:
                </label>
                <select
                  id="tags"
                  {...register("tags", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                  multiple // Allow multiple selections
                >
                  {tagsOptions.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
                {errors?.tags && <span>Please select at least one tag</span>}
              </div>

              <div className="mb-4 w-1/2">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category:
                </label>
                <select
                  id="category"
                  {...register("category", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                >
                  <option value="">Select a category</option>
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors?.category && <span>Please select a category</span>}
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="imagePoster"
              >
                Blog Poster:
              </label>
              <div
                {...getRootProps()}
                className="w-full border border-yellow-400 rounded py-2 px-3 cursor-pointer"
              >
                <input {...getInputProps()} type="file" />
                <p>
                  {getValues("imagePoster")?.name ||
                    "Drag and drop an image here or click to browse"}
                </p>
              </div>
            </div>

            <div className="text-right">
              <button
                disabled={blogLoading}
                type="submit"
                className="bg-yellow-400 text-white py-2 px-4 rounded"
              >
                {blogLoading
                  ? `${uploadBlogProgress} % Image uploading ...`
                  : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPostForm;
