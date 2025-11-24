// Navbar.js

// Simple logo component using an SVG (Heroicons-style)
function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-indigo-600"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        {/* 🔹 Replace this <path> with one from an icon you picked at heroicons.com */}
        <path d="M12 2.25l3.09 6.26 6.91 1.01-5 4.87 1.18 6.88L12 17.77l-6.18 3.5L7 14.39 2 9.52l6.91-1.01L12 2.25z" />
      </svg>
      <span className="font-semibold tracking-tight text-indigo-700">
        CSCI31
      </span>
    </div>
  );
}

function Navbar() {
  const navigation = [
    { title: "Button One", href: "/one", isNew: false },
    { title: "Button Two", href: "/two", isNew: true },
  ];

  return (
    <nav className="flex justify-between bg-indigo-50 p-6 items-center sticky top-0 shadow-lg">
      {/* 🔹 Use the logo instead of the old colored circle */}
      <Logo />

      <div className="flex gap-x-4 items-center">
        {navigation.map(({ title, href, isNew }) => (
          <Button key={href} classNameProp="flex items-center gap-2">
            <span>{title}</span>
            {isNew ? <Tag /> : null}
          </Button>
        ))}
      </div>
    </nav>
  );
}
