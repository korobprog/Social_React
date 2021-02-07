import { StylesContext } from '@material-ui/styles';
import React from 'react';
import styles from './users.module.css';



let Users = (props) => {
    console.log(props)
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://img-fotki.yandex.ru/get/5109/27064182.121/0_c8ab2_976be6de_XXXL.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: { city: 'Minsk', country: 'Russia' }
            },
            {
                id: 2,
                photoUrl: 'https://img-fotki.yandex.ru/get/5109/27064182.121/0_c8ab2_976be6de_XXXL.jpg',
                followed: true,
                fullName: 'Maxim',
                status: 'I am a das',
                location: { city: 'Russia', country: 'Minsk' }
            },
            {
                id: 3,
                photoUrl: 'https://img-fotki.yandex.ru/get/5109/27064182.121/0_c8ab2_976be6de_XXXL.jpg',
                followed: false,
                fullName: 'Ivan',
                status: 'I am a slip',
                location: { city: 'Ukraine', country: 'Belarus' }
            }
        ]
        )
    }


    return <div>
        {
            props.users.map(u => <div key={u.id} >
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
                </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;