import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchUsers,
  addFriend,
  removeFromBlockList,
} from "../utils/userSlice";

import UserCard from "../Component/UserCard";

function Home() {
  const dispatch = useDispatch();

  const { users, friends, blockList, loading } = useSelector(
    (state) => state.users
  );

  // API Call
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-8
      p-8
    "
    >
      {users.map((user) => {
        const isFriend = friends.some(
          (item) => item.id === user.id
        );

        const isBlocked = blockList.some(
          (item) => item.id === user.id
        );

        return (
          <UserCard key={user.id} user={user}>
            {/* Normal User */}
            {!isFriend && !isBlocked && (
              <button
                onClick={() => dispatch(addFriend(user))}
                className="btn-blue"
              >
                Add To Friend
              </button>
            )}

            {/* Friend User */}
            {isFriend && (
              <button
                disabled
                className="btn-green"
              >
                Added To Friend
              </button>
            )}

            {/* Blocked User */}
            {isBlocked && (
              <button
                onClick={() =>
                  dispatch(removeFromBlockList(user.id))
                }
                className="btn-orange"
              >
                Remove From BlockList
              </button>
            )}
          </UserCard>
        );
      })}
    </div>
  );
}

export default Home;