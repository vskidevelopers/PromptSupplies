/* eslint-disable react/prop-types */
function AdminActionButton({ text, theme, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`w-full py-2 px-4 border hover:border-gray-400 bg-${theme} text-white rounded-full `}
      >
        {text}
      </button>
    </div>
  );
}

export default AdminActionButton;
