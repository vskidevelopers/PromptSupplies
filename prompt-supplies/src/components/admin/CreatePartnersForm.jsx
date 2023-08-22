import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { usePartnersFunctions } from "../../utils/firebase";

function CreatePartnersForm() {
  const {
    partnersLoading,
    partnersImageURL,
    uploadPartnersProgress,
    uploadPartnersLogo,
    handlePostParnersData,
  } = usePartnersFunctions();

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

  const onSubmit = (data) => {
    console.log(data);
    console.log("data.imagePoster >>", data.imagePoster.name);
    if (partnersImageURL) {
      console.log("Image Url >>", partnersImageURL);
      const partnersData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        image: partnersImageURL,
      };
      console.log("Blog Data to upload >>", partnersData);
      handlePostParnersData(partnersData);
      alert(
        "Added new partner. Refresh the page to view the current partners in the database"
      );

      reset();
    } else {
      console.log("No Image  ");
      alert("Uploading files... Click OK to continue");
      if (data.imagePoster) {
        uploadPartnersLogo(data.imagePoster);
      }
    }
  };
  return (
    <div className="relative h-full w-full">
      <div className="z-50">
        <div className="container mx-auto ">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Add a partner
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="title">
                Name:
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="w-full border border-yellow-400 rounded py-2 px-3"
              />
              {errors?.title && <span>This field is required</span>}
            </div>

            <div className="flex w-full gap-5">
              <div className="mb-4 w-1/2">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="content"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                />
                {errors?.content && <span>This field is required</span>}
              </div>
              <div className="mb-4 w-1/2">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="content"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  {...register("phone", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                />
                {errors?.content && <span>This field is required</span>}
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="imagePoster"
              >
                Logo
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
                disabled={partnersLoading}
                type="submit"
                className="bg-yellow-400 text-white py-2 px-4 rounded"
              >
                {partnersLoading
                  ? `${uploadPartnersProgress} % Image uploading ...`
                  : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePartnersForm;
