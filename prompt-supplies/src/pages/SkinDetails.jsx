import { useNavigate, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./styles/skinDetails.css";
import { Heart } from "lucide-react";

function SkinDetails() {
  const navigate = useNavigate();
  const skinId = useParams();
  console.log("skinId >> ", skinId);
  const laptopSizes = ["Small", "Medium", "Large"];
  const skinCoverage = ["Top Skin Only", "Full Panel", "Full Body"];

  const skin = {
    image: "https://via.placeholder.com/450x450", // Replace with actual image URL
    title: "Awesome Skin",
    price: "$49.99",
    description: "This is a detailed description of the awesome skin.",
    type: "laptopSkin",
    coverage: "Full Coverage",
    quantity: 1,
  };

  const handleSubmit = () => {
    console.log("submitting form to order of active:false, fulfilled:false");

    // handle sum submit logics and return an orderID
    // Store thr returned orderId in the localstorage
    // handle navigation to checkOut
    navigate("/skins/checkout");
  };
  return (
    <div className="mt-16 py-16">
      <div className="container mx-auto flex w-full justify-center">
        <div className="w-full md:w-1/3">
          {/* image div */}
          <div className="h-[450px] w-full bg-zinc-900 flex items-center justify-center">
            <img
              src={skin.image}
              alt={skin.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden h-[450px]">
          {/* details Div */}
          <div className="h-full w-full bg-green-700/10 p-4 overflow-y-scroll no-scrollbar">
            <h2 className="text-2xl font-bold mb-2">{skin.title}</h2>
            <p className="text-xl font-semibold mb-4">{skin.price}</p>
            <p className="mb-4">{skin.description}</p>
            {skin.type === "laptopSkin" ? (
              <div>
                <p className="font-bold mb-2">Size: choose an option</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {laptopSizes.map((size) => (
                    <span
                      key={size}
                      className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer"
                    >
                      {size}
                    </span>
                  ))}
                </div>
                <p className="mb-4 font-bold">
                  Skin Coverage: Select an Option
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skinCoverage.map((size) => (
                    <span
                      key={size}
                      className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer hover:bg-sky-500 "
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            <label htmlFor="quantity" className="block mb-1 font-bold">
              Quantity
            </label>
            <div className="flex justify-around w-full md:w-3/5">
              <div className="w-1/5 mr-2 h-full flex justify-center items-center">
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  defaultValue={skin.quantity}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-3/5 mr-2 flex items-center justify-center">
                <button
                  onClick={handleSubmit}
                  className=" bg-blue-500 text-white py-2 rounded w-5/6"
                >
                  Order this skin
                </button>
              </div>

              {/* Todo: 
                  wishlist
              */}
              <div className="w-1/5 flex justify-center items-center">
                <button className="content bg-slate-800 text-white py-4 px-4 rounded-full">
                  <Heart className="h-5 w-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* skins extras */}
      <div className="mx-20 my-16">
        <Tabs defaultValue="description">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="additionalInfo">Additional Info</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="description">
            <h1 className=" font-mono"> Description goes Here!</h1>
            <div>
              <h1 className="font-bold"> Why Choose Our {skinId.category}</h1>
            </div>
            <TabsList>
              <TabsTrigger value="additionalInfo">
                continue to additional info
              </TabsTrigger>
            </TabsList>
          </TabsContent>
          <TabsContent value="additionalInfo">
            <h1 className=" font-mono"> additionalInfo goes Here!</h1>
          </TabsContent>
          <TabsContent value="reviews">
            <h1 className=" font-mono"> reviews goes Here!</h1>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default SkinDetails;
