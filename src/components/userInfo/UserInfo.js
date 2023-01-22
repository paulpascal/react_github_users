import './userInfo.scss';

const UserInfo = ({ oneUser, followers, onLoadingUsers }) => {

    const {login, avatar_url, name, location, html_url} = oneUser;

    const follow = followers.length > 0 ? followers.map((elem) => {
        return (
            <div key={elem.id} className='followers__info'>
                <div className='followers__img'>
                    <img src={elem.avatar_url} alt={elem.login} />
                </div>
            </div>
        );
    }) : <div>No subscribers</div>

    return (
        <div className='info'>
            <div className='info__login'>{login}</div>
            <div className="info__wrapper">
                <div>
                    <div className='info__name'>{name}</div>
                    <div className='info__img'>
                        <img src={avatar_url} alt={login} />
                    </div>
                    <div>{location}</div>
                    <a className='info__link' href={html_url}>
                        GitHub
                    </a>
                </div>
                <div>
                    <div>Subscribers</div>
                    <div className='followers'>{follow}</div>
                    <button className='user__button user__button_big' onClick={onLoadingUsers}>
                        Back to list
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;