import { useDispatch, useSelector } from "react-redux";
import { removeFromBlockList } from "../utils/userSlice";

function BlockList() {
  const dispatch = useDispatch();

  const blockList = useSelector(
    (state) => state.users.blockList
  );

  // Empty Block List
  if (blockList.length === 0) {
    return (
      <h1 className="text-center text-3xl mt-10">
        No Users Are Blocked!
      </h1>
    );
  }

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blockList.map((user) => (
          <div
            key={user.id}
            className="
              bg-white
              rounded-2xl
              shadow-xl
              p-6
              hover:-translate-y-2
              duration-300
            "
          >
            <img
              src={user.image}
              alt={user.firstName}
              className="
                h-28
                w-28
                rounded-full
                mx-auto
                border-4
                border-orange-500
              "
            />

            <h1 className="text-center text-2xl font-bold mt-4">
              {user.firstName} {user.lastName}
            </h1>

            <p className="mt-4">
              <strong>Email :</strong> {user.email}
            </p>

            <p>
              <strong>Phone :</strong> {user.phone}
            </p>

            <p>
              <strong>Company :</strong> {user.company.name}
            </p>

            <div className="flex justify-center mt-5">
              <button
                onClick={() =>
                  dispatch(removeFromBlockList(user.id))
                }
                className="btn-orange"
              >
                Remove From BlockList
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default BlockList;