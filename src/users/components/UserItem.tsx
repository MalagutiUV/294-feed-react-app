import "./UserItem.css";

function UserItem(props) {
  return (
    <div className='userItem'>
      <h1>
        {" "}
        {props.singleUser.username} (id: {props.singleUser.id})
      </h1>
      <p>{props.singleUser.age}</p>
      <p>{props.singleUser.email}</p>
      <p>{props.singleUser.city}</p>

      <button>Open User</button>
    </div>
  );
}

export default UserItem;
