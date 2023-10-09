// Список пользователей
import React from 'react';
import { Link } from 'react-router-dom';
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';
import { User, UsersProps } from '../types/User';

export const UsersKenguru = ({ users }): React.ReactElement<UsersProps> => {
    return (
        <WideLayoutKenguru>
            <>
                {users.map((user: User) => {
                    return (
                        <div key={user._id}>
                            <span>{user.name} - </span>
                            <span>
                                <Link to={`/user/${user._id}`}>Open</Link>
                            </span>
                        </div>
                    );
                })}
                ;
            </>
        </WideLayoutKenguru>
    );
};
