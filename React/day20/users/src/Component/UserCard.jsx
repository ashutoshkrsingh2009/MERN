function UserCard({ user, children }) {
  return (
    <div
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
        alt=""
        className="
        w-28
        h-28
        rounded-full
        mx-auto
        border-4
        border-blue-500
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

      <div className="mt-5 flex justify-center">
        {children}
      </div>
    </div>
  );
}

export default UserCard;