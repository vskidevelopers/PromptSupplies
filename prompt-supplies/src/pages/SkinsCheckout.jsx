import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FloatingOrderSummary from "@/components/FloatingOrderSummary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function SkinsCheckout() {
  const title = "Shop | Checkout";
  const image =
    "https://images.pexels.com/photos/1181415/pexels-photo-1181415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="">
      {/* CheckOutHeroSection */}
      <div className="relative h-72 my-10">
        {/* Background Image */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          {/* Black Shade Overlay */}
          {/* <div className="absolute inset-0 h-full w-full bg-[#181b1c]/75"></div> */}
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black via-[#181b1c]/75 to-transparent"></div>
        </div>
        {/* Heading Tag */}
        <div className="absolute inset-0 flex pl-10 flex-col justify-center items-start text-white">
          <Typewriter
            options={{
              wrapperClassName:
                "text-5xl md:text-6xl font-bold font-serif capitalize",
              cursorClassName: "text-5xl md:text-6xl font-bold font-serif",
              strings: title,
              autoStart: true,
              loop: false,
            }}
          />
          {/* Breadcrumb */}
          <div className="py-2 text-[#FDB715] ">
            <Link to="/" className="text-white">
              Home
            </Link>{" "}
            | {title}
          </div>
        </div>
      </div>

      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-1 ">
            <Tabs defaultValue="checkOutDetailForm">
              <TabsContent value="checkOutDetailForm">
                <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                  <CardHeader className="pb-3">
                    <CardTitle>Checkout Details Form</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      Enter Your Details in the form below
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <TabsList>
                      <TabsTrigger value="paymentMethodForm">
                        Continue to Payment Method
                      </TabsTrigger>
                    </TabsList>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="paymentMethodForm">
                <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                  <CardHeader className="pb-3">
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      select your prefered payment method
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <TabsList>
                      <TabsTrigger value="orderReviewForm">
                        Continue to Order Review
                      </TabsTrigger>
                    </TabsList>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="orderReviewForm">
                <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                  <CardHeader className="pb-3">
                    <CardTitle>Order Review</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      Confirm your ordered items
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <button className="py-2 px-6 hover:text-white rounded-xl bg-transparent border border-green-800 hover:bg-green-800">
                      confirm Order
                    </button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <FloatingOrderSummary />
      </main>
    </div>
  );
}

export default SkinsCheckout;
