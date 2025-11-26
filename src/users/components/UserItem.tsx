import "./UserItem.css";

function UserItem(props) {
  return (
    <div className='userItem'>
      <h1>
        {" "}
        {props.singleUser.username} (id: {props.singleUser.id})
      </h1>
      <p>{props.singleUser.age}</p>
      <span>{props.singleUser.email}</span>
      <span>{props.singleUser.city}</span>

      <button>Open User</button>
    </div>
  );
}

export default UserItem;
