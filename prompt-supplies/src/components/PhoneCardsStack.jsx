import PhoneCards from "./PhoneCards";

export default function PhoneCardsStack() {
  const cards = [
    {
      image:
        "https://i.pinimg.com/564x/64/50/f1/6450f190096ac37aa2a84e5e28eaff4c.jpg",
      title: "Card 1",
      description: "This is the first card.",
    },
    {
      image:
        "https://i.pinimg.com/564x/74/6b/13/746b13b13e58acade1782ac1b394c49e.jpg",
      title: "Card 2",
      description: "This is the second card.",
    },
    {
      image:
        "https://i.pinimg.com/236x/ea/07/2c/ea072c21568010981d75f3353bd5152e.jpg",
      title: "Card 3",
      description: "This is the third card.",
    },
  ];
  return (
    <div className="relative group h-96 w-64 mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`absolute  w-full transform transition-transform duration-300 
          ${index === 0 ? "rotate-0 z-30 top-0 left-0" : ""}
          ${
            index === 1
              ? "rotate-0 group-hover:rotate-6 z-20 top-0 left-0 group-hover:right-10"
              : ""
          }
          ${
            index === 2
              ? "rotate-0 group-hover:-rotate-3 z-10 top-0 left-0 group-hover:left-10"
              : ""
          }`}
        >
          <PhoneCards
            image={card.image}
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
}
