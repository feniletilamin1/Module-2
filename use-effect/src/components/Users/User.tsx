import { UserInfo } from "../../types/UserType";

type UserProps = {
  user: UserInfo,
  getInfo: Function,
}

export default function User(props: UserProps) {
  const  {user, getInfo} = props;
  return (
      <li  className="users-list__item">
        {user.name}
        <button className="users-list__item-btn" onClick={() => getInfo(user.id)}>Choose</button>
      </li> 
  )
}
