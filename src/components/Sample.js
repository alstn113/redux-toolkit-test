const Sample = ({ users, loading, hasErrors }) => {
  if (hasErrors) {
    return <div>오류 발생</div>;
  }
  return (
    <div>
      {!loading &&
        users &&
        users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.email})
          </li>
        ))}
    </div>
  );
};

export default Sample;
