import User from "./User";
import Details from "../Details";
import { UserInfo } from "../../types/UserType";
import { UserType } from "../../types/UserType";
import { useState } from "react";

type UserListProps = {
    users: UserInfo[],
}

export default function Users(props: UserListProps) {
    const { users} = props;
    const[currentUser, setCurrentUser] = useState<UserType | null>(null);

    const getUserInfo = async (id: number) => {
        await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
        .then(res => res.json())
        .then((result: UserType) => {
            setCurrentUser(result);
          },
          (eror: Error) => {
            console.log(eror);
          }
        );
    }
    
    return (
        <div className="users-wrapper">
            <ul className="users-list">
                {users.map(user =>
                    <User key={user.id} user={user} getInfo={getUserInfo}/>
                )}
            </ul>
            {currentUser !== null && <Details user={currentUser}/>}
        </div>
    )
}
