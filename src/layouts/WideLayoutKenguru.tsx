// Доска для работы с тикерами
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    children: React.ReactElement;
};

export const WideLayoutKenguru = (props: Props): React.ReactElement => {
    const { children } = props;

    return (
        <>
            <div>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/kanban">Kanban</Link>
                </div>
                <div>
                    <Link to="/tickers">Ticker</Link>
                </div>
                <div>
                    <Link to="/users">Users</Link>
                </div>
                {/* <div>
                    <Link to="/user/123">User - 123</Link>
                </div> */}
            </div>
            <div>{children}</div>
        </>
    );
};
