import UserItem from "./users/components/UserItem";

function Users() {
  const users = [
    {
      username: "binaryVoyager",
      age: 2,
      email: "binaryVoyager@gmail.com",
      id: 2,
      city: "Bern",
    },
    {
      username: "cobaltVision",
      age: 18,
      email: "cobaltVision@gmail.com",
      id: 1,
      city: "Zürich",
    },
    {
      username: "xyz",
      age: 222,
      email: "xyz@gmail.com",
      id: 3,
      city: "Schaffhausen",
    },
  ];

  return (
    <>
      <h1>Users Page</h1>

      <p>All Users (Anzahl: {users.length})</p>

      {users.map((user) => (
        <UserItem singleUser={user} />
      ))}
    </>
  );
}

export default Users;
