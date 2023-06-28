import AdvertInfoCards from "./AdvertInfoCards";

export default function AdminAdverts() {
  const advertStats = [
    {
      title: "Total Adverts",
      value: 50,
    },
    {
      title: "Approved Adverts",
      value: 40,
    },
    {
      title: "Pending Adverts",
      value: 10,
    },
    {
      title: "Vip Adverts",
      value: 15,
    },
  ];

  return (
    <>
      <div className="w-full px-2 py-16 sm:px-0 bg-white">
        <div className="py-10 px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {advertStats.map((advert, index) => (
            <AdvertInfoCards
              key={index}
              title={advert.title}
              value={advert.value}
            />
          ))}
        </div>
      </div>
      <div className="mt-5 w-full">d</div>
    </>
  );
}
