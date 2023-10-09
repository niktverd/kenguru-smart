// Доска для работы с тикерами
import React from 'react';
import googleFinance from 'google-finance';
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';

// type Props = {
//     children: any;
// };

export const KanbanKenguru = (): React.ReactElement => {
    googleFinance.companyNews(
        {
            symbol: 'NASDAQ:AAPL',
        },
        function (err, news) {
            console.log(news);
        }
    );

    return (
        <WideLayoutKenguru>
            <div>Канбан</div>
        </WideLayoutKenguru>
    );
};
