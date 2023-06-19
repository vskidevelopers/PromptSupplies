import HeroSection from "../components/HeroSection";

function ServiceDetail() {
  return (
    <>
      <HeroSection
        title="Bulk Sms"
        image="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <section>
        <div className="bg-slate-800 text-white py-8">
          <div className="container mx-auto flex flex-col  my-12 md:my-24">
            <div className="flex flex-col w-full md:top-36  mt-2 md:mt-12 px-8">
              <p className="ml-2 text-[#FDB715] uppercase tracking-loose">
                Bulk Sms
              </p>
              <p className="text-3xl font-bold md:text-4xl leading-normal md:leading-relaxed mb-2">
                What is Bulk Sms ?
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Bulk SMS messaging is a legacy description for
                application-to-person SMS messaging services. It refers
                specifically to the sending of large number of SMS messages to
                the mobile phones of a predetermined group of recipients.
              </p>
            </div>

            <div className="ml-0 md:ml-12  sticky mt-5">
              <div className="container mx-auto w-full h-full">
                <div className="flex w-full justify-center">
                  <h3 className="mb-3 font-bold text-lg md:text-4xl text-[#FDB715]">
                    Why Bulk Sms{" "}
                  </h3>
                </div>
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-yellow-555 absolute h-full border border-[#FFC100] rounded right-1/2"></div>
                  <div className="border-2-2 border-yellow-555 absolute h-full border border-[#FFC100] rounded left-1/2"></div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-lg  text-[#FDB715] underline">
                        Instant and Direct Communication
                      </p>

                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Bulk SMS allows businesses to reach their target
                        audience instantly and directly. SMS messages have a
                        high open and read rate, often within minutes of
                        delivery. This immediacy ensures that your message
                        reaches the recipients promptly and increases the
                        chances of them taking the desired action.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-lg  text-[#FDB715] underline">
                        Wide Reach
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        SMS messages can be sent to a large number of recipients
                        simultaneously, making it an effective tool for reaching
                        a wide audience. Whether you need to communicate with
                        existing customers, potential leads, or members of an
                        organization, bulk SMS service allows you to deliver
                        your message efficiently and cost-effectively.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-lg  text-[#FDB715] underline">
                        {" "}
                        High Open and Read Rates
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Compared to other communication channels like emails or
                        social media posts, SMS messages have exceptionally high
                        open and read rates. Studies have shown that SMS
                        messages have an open rate of over 95% and a read rate
                        of approximately 98%. This makes SMS an effective means
                        of ensuring that your message is seen and read by the
                        recipients.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-lg  text-[#FDB715] underline">
                        Personalized Messaging
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Bulk SMS services often provide the option to
                        personalize your messages by addressing recipients by
                        their names or including relevant details.
                        Personalization helps to establish a connection with the
                        recipients, making them more likely to engage with the
                        message and take the desired action
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-lg  text-[#FDB715] underline">
                        {" "}
                        Cost-Effective
                      </p>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Bulk SMS services are generally affordable, especially
                        when compared to traditional marketing methods such as
                        print advertising or direct mail campaigns. The low cost
                        per message makes it a cost-effective solution for
                        businesses of all sizes, allowing them to reach a large
                        audience without breaking the bank.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 font-bold  text-lg  text-[#FDB715]">
                        Versatility and Integration
                      </p>

                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Bulk SMS services can be easily integrated into existing
                        marketing and communication strategies. They can be used
                        for various purposes, such as sending promotional
                        offers, event reminders, transactional notifications,
                        customer support updates, and more. Integration with
                        other platforms and systems, such as customer
                        relationship management (CRM) software, allows for
                        streamlined and automated communication workflows.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                />
              </div>
            </div>
            <div className="flex justify-center items-center py-10 px-10 mt-5">
              <button
                className=" bg-yellow-400 text-white py-3 px-6 shadow-lg hover:bg-transparent hover:border hover:border-[#FDB715] "
                // onClick={openModal}
              >
                Request Advert
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetail;
