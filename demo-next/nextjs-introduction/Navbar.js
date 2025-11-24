// Navbar.js
function Navbar() {
  const navigation = [
    {
      title: "Button One",
      href: "/one",
      isNew: false,
    },
    {
      title: "Button Two",
      href: "/two",
      isNew: true,
    },
  ];

  return (
    <nav className="flex justify-between bg-indigo-50 p-6 items-center sticky top-0 shadow-lg">
      <div className="logo bg-indigo-600 rounded-full p-6 hover:scale-105 transition-all cursor-pointer" />
      <div className="flex gap-x-4 items-center">
        {navigation.map(({ title, href, isNew }) => (
          <Button key={href} classNameProp="flex items-center gap-2">
            {/* children of Button */}
            <span>{title}</span>
            {isNew ? <Tag /> : null}
          </Button>
        ))}
      </div>
    </nav>
  );
}
