import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import ServicesCard from "../components/ServicesCard";

import promotionalSmsIcon from "../assets/svgs/promotional_sms.svg";
import bulkEmailIcon from "../assets/svgs/bulk_email.svg";
import bulkSmsIcon from "../assets/svgs/bulk_sms.svg";
import apiIntergrationIcon from "../assets/svgs/api_intergration.svg";
import webDevIcon from "../assets/svgs/web_development.svg";
import systemDevIcon from "../assets/svgs/system_development.svg";
import merchandiseIcon from "../assets/svgs/merchandise.svg";
import Loader from "../components/Loader";

export default function Services() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const serviceList = [
    {
      icon: promotionalSmsIcon,
      title: "Promotional Messages",
      image:
        "https://img.freepik.com/premium-photo/hand-businessman-using-smartphone-email-with-notification-alert_112554-914.jpg?w=740",
      description:
        "We offer expertly crafted promotional messages that are tailored to meet your specific marketing goals. Our skilled team ensures that your messages are concise, compelling, and highly effective in capturing the attention of your target audience.",
    },
    {
      icon: bulkSmsIcon,
      title: "Bulk SMS Services",
      image:
        "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063130.jpg?w=740&t=st=1686594005~exp=1686594605~hmac=dc30519a238aa14179d195e0e48b60a718214d3ae2cb6a7017ef66dff7ae8d09",
      description:
        "With our advanced bulk SMS services, you can quickly and efficiently reach a large number of customers or prospects in a personalized manner. Our user-friendly platform allows you to schedule, send, and track SMS campaigns, ensuring seamless communication with your audience.",
    },
    {
      icon: bulkEmailIcon,
      title: "Bulk Email Services",
      image:
        "https://img.freepik.com/premium-photo/electronic-communication-graphics-concept-business-using-laptop-with-email-icon-email-inbox_27634-686.jpg?w=740",
      description:
        "Our bulk email services enable you to engage with your audience through well-designed and impactful email campaigns. We provide customizable templates, powerful analytics, and email delivery management to maximize the effectiveness of your email marketing efforts.",
    },
    {
      icon: apiIntergrationIcon,
      title: "API Integrations",
      image:
        "https://img.freepik.com/premium-photo/api-application-programming-interface-development-technology-concept_524876-487.jpg?w=740",
      description:
        "We offer seamless API integration services to connect your systems or applications with our marketing platform. This integration allows for automated data synchronization, enabling you to streamline your marketing processes and improve efficiency.",
    },
    {
      icon: webDevIcon,
      title: "Web Development",
      image:
        "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=740&t=st=1686600660~exp=1686601260~hmac=94bfbcdfb20f83c4be63906361a2562554b6c9b7566574d27cd5505ee59c1e93",
      description:
        "Our team of experienced web developers can create dynamic and user-friendly websites tailored to your specific requirements. Whether you need a simple landing page or a complex e-commerce platform, we have the expertise to deliver high-quality web solutions.",
    },
    {
      icon: systemDevIcon,
      title: "System Development",
      image:
        "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=740&t=st=1686594335~exp=1686594935~hmac=5d79a70781dcdf090fba8f888346aebb6ead279dc5be5fbd488de8d089fe7a61",
      description:
        "We provide custom system development services to help you build robust, scalable, and secure software solutions. Our team of skilled developers can create tailored systems that align with your unique business needs, driving efficiency and productivity.",
    },
    {
      icon: merchandiseIcon,
      title: "Merchandise Branding",
      image:
        "https://img.freepik.com/premium-photo/illustration-colorful-bulb-with-splash-colors-white-background-creativity-eureka-imagination-inspiration-generative-ai-idea-solution-concept_620624-6732.jpg?w=740",
      description:
        "We specialize in merchandise branding, offering a wide range of promotional products that effectively showcase your brand. From corporate gifts to customized apparel, we help you leave a lasting impression on your clients and customers.",
    },
  ];

  if (showSplash) {
    return <Loader />;
  }

  return (
    <div className="">
      <HeroSection
        tagline="Amplify Your Reach"
        title="Services"
        image="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="py-16 ">
        <div className="relative flex flex-col justify-center items-center mb-16">
          <div className="w-full md:w-1/2 pl-4 text-start md:text-center">
            <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
              Our Services
            </h2>
            <h1 className="text-3xl font-bold capitalize">
              Empowering Organizations through Result-Driven Solutions
            </h1>
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center opacity-10 ">
            <h1 className="text-7xl md:text-9xl font-bold ">Services</h1>
          </div>
        </div>

        {/* SERVICE  GRID*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 container mx-auto px-5 md:px-20">
          {serviceList.map((service, i) => (
            <ServicesCard
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
              backgroundImage={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
