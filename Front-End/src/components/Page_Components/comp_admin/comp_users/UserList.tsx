import SingleItemUsers from "./SingleItemUsers";

export interface UserListProps<T> {
  usersToDisplay: T[];
  visibleCount: number;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
  allFilteredUsers: T[];
  openModal: (user?: T) => void;
}

export default function UserList<T extends { _id: string }>({
  usersToDisplay,
  visibleCount,
  setVisibleCount,
  allFilteredUsers,
  openModal,
}: UserListProps<T>) {
  return (
    <>
      {usersToDisplay.map((user) => (
        <SingleItemUsers key={user._id} {...user} openModal={() => openModal(user)} />
      ))}
      {visibleCount < allFilteredUsers.length && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 5)}
          className="self-center cursor-pointer text-white px-6 py-2 rounded bg-blue-900 hover:bg-blue-800"
        >
          Mostrar mais
        </button>
      )}
    </>
  );
}
