import React from 'react';
import userPhoto from '../../../src/assets/images/user-men.png';
import styles from './users.module.css';
import Pagination from '@material-ui/lab/Pagination';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // Math.ceil округлить в большую сторону

    /*  let pages = [];
     for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
     } */
    const handleChange = (event, value) => {
        props.onPageChanged(value)
    };

    return <div>


        <Pagination count={pagesCount} page={props.currentPage} onChange={handleChange} />

        {/*  <div> count={10}   
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); }} > {p}</span>
            })} </div> */}

        {
            props.users.map(u => <div key={u.id} >
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div >

}

export default Users;