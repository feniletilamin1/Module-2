import { UserType } from "../types/UserType";
import { useEffect } from "react";
import { useState } from "react";

type DetailsProps = {
    user: UserType,
}

export default function Details(props: DetailsProps)  {
    const [loading, setLoading] = useState<boolean>(true);
    const {user} = props;
    
    useEffect(() => {
        if(!loading)
            setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [user.id]);    
    return (
        <>
        {loading && <p>Loading...</p>}
        {!loading &&
        <div className="user">
            <img src={user.avatar} alt={`${user.name} avatar`} className="user__image" />
            <h2 className="user__name">{user.name}</h2>
            <p className="user__text">City: {user.details.city}</p>
            <p className="user__text">Company {user.details.company}</p>
            <p className="user__text">Position {user.details.position}</p>
        </div>  
        }
        </>
    )
}
