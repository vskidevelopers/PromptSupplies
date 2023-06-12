import promotionalSmsIcon from "../assets/svgs/promotional_sms.svg";
import bulkEmailIcon from "../assets/svgs/bulk_email.svg";
import bulkSmsIcon from "../assets/svgs/bulk_sms.svg";
import apiIntergrationIcon from "../assets/svgs/api_intergration.svg";
import webDevIcon from "../assets/svgs/web_development.svg";
import systemDevIcon from "../assets/svgs/system_development.svg";
import merchandiseIcon from "../assets/svgs/merchandise.svg";
import ServiceMiniCard from "./ServiceMiniCard";

export default function ServicesSection() {
  const services = [
    {
      icon: promotionalSmsIcon,
      title: "Promotional Messages",
      image:
        "https://img.freepik.com/premium-photo/hand-businessman-using-smartphone-email-with-notification-alert_112554-914.jpg?w=740",
    },
    {
      icon: bulkSmsIcon,
      title: "Bulk SMS Services",
      image:
        "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063130.jpg?w=740&t=st=1686594005~exp=1686594605~hmac=dc30519a238aa14179d195e0e48b60a718214d3ae2cb6a7017ef66dff7ae8d09",
    },
    {
      icon: bulkEmailIcon,
      title: "Bulk Email Services",
      image:
        "https://img.freepik.com/premium-photo/electronic-communication-graphics-concept-business-using-laptop-with-email-icon-email-inbox_27634-686.jpg?w=740",
    },
    {
      icon: apiIntergrationIcon,
      title: "API Integrations",
      image:
        "https://img.freepik.com/premium-photo/api-application-programming-interface-development-technology-concept_524876-487.jpg?w=740",
    },
    {
      icon: webDevIcon,
      title: "Web Development",
      image:
        "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=740&t=st=1686600660~exp=1686601260~hmac=94bfbcdfb20f83c4be63906361a2562554b6c9b7566574d27cd5505ee59c1e93",
    },
    {
      icon: systemDevIcon,
      title: "System Development",
      image:
        "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=740&t=st=1686594335~exp=1686594935~hmac=5d79a70781dcdf090fba8f888346aebb6ead279dc5be5fbd488de8d089fe7a61",
    },
    {
      icon: merchandiseIcon,
      title: "Merchandise Branding",
      image:
        "https://img.freepik.com/premium-photo/illustration-colorful-bulb-with-splash-colors-white-background-creativity-eureka-imagination-inspiration-generative-ai-idea-solution-concept_620624-6732.jpg?w=740",
    },
    // Add more services as needed
  ];
  return (
    <div className="container mx-auto px-10 md:px-20">
      {/* Title */}
      <div className="relative flex flex-col justify-center items-center py-10">
        <div className="w-full md:w-1/2 md:text-end">
          <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
            our services
          </h2>
          <h1 className="text-3xl font-bold capitalize">
            Empowering Organizations through Result-Driven Solutions
          </h1>
        </div>
        <div className="absolute top-0 left-0 h-full w-full flex justify-start items-center opacity-10">
          <h1 className="text-7xl md:text-9xl font-bold">Services</h1>
        </div>
      </div>

      {/* Grid Div */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
        {services.map((service, i) => (
          <ServiceMiniCard
            key={i}
            title={service.title}
            icon={service.icon}
            backgroundImage={service.image}
          />
        ))}
      </div>
    </div>
  );
}
