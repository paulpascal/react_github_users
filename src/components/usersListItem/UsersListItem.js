import './usersListItem.scss';

const UsersListItem = ({ login, type, avatar_url, onUserSelected }) => {
    return (
        <li className='user__item'>
            <div className='user__img'>
                <img src={avatar_url} alt={login} />
            </div>
            <div>
                <div>{login}</div>
                <div>{type}</div>
                <button className='user__button' onClick={onUserSelected}>
                    Profile
                </button>
            </div>
            
        </li>
    );
};

export default UsersListItem;