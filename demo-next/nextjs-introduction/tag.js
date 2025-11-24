// Tag.js
function Tag({ content = "New", classNames = "" }) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full px-2 py-0.5
        text-xs font-semibold text-white
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        ${classNames}
      `}
    >
      {content}
    </span>
  );
}
