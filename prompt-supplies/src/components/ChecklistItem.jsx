/* eslint-disable react/prop-types */

export default function ChecklistItem({ icon, listItem, py, list, social }) {
  return (
    <div className={`flex items-center ${py}`}>
      <div className="mr-3">{icon}</div>

      {social ? (
        <button
          onClick={() =>
            alert(
              "our social platforms are currently under maintenance. Visit us later"
            )
          }
          className="text-sm capitalize"
        >
          {listItem}
        </button>
      ) : (
        <div className="text-sm capitalize">
          {list ? (
            <div className="flex flex-col gap">
              {listItem?.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          ) : (
            listItem
          )}
        </div>
      )}
    </div>
  );
}
