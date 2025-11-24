// Button.js
function Button({ children, classNameProp = "" }) {
  const baseClasses =
    "px-6 py-3 bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-300 shadow-md rounded-md transition-all";

  const combinedClasses = `${baseClasses} ${classNameProp}`;

  return (
    <button className={combinedClasses}>
      {children}
    </button>
  );
}
