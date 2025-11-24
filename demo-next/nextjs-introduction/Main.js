const cards = [
  {
    title: "The Coldest Sunset",
    img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "The Warmest Sunset",
    img: "https://images.unsplash.com/photo-1466618572466-002f11d518db?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "The Coolest Ocean",
    img: "https://images.unsplash.com/photo-1468861389126-e0ca735dba0d?q=80&w=1470&auto=format&fit=crop",
  },
];

function Main() {
  return (
    <main>
      {/* Card Container */}
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {cards.map((card, idx) => (
          <Card key={idx} title={card.title} image={card.img} />
        ))}
      </div>

      {/* Flex Component Example */}
      <Flex classNames="bg-blue-600 text-blue-100 gap-x-6 p-6 rounded-lg shadow-lg">
        <span className="font-semibold">Child tag one</span>
        <span className="font-semibold">Child tag two</span>
        <span className="font-semibold">Child tag three</span>
      </Flex>
    </main>
  );
}
