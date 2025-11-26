import "./MyProfile.css";

function MyProfile(props: any) {
  console.log(props.user.email);

  return (
    <div>
      Aktueller User: <span className='currentUserName'>{props.username}</span>{" "}
      hat Alter {props.age}
      last LoggedIn {props.user.lastLogginDate.toString()}
    </div>
  );
}

export default MyProfile;
