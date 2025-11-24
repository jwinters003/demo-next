function Button({ title }) {
  return (
    <button className="px-6 py-3 bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-300 shadow-md rounded-md transition-all">
      {title}
    </button>
  );
}
