const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser, i) => {
        const { datetime, email, name, role, username } = curUser;
        return (
          <tr key={i}>
            <td>{username}</td>
            <td>{name}</td>

            <td>{email}</td>
            <td>{role}</td>
            <td>{datetime && new Date(datetime).toDateString()}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
