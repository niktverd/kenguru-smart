// Панель для работы с конкретным тикером
import React from 'react';
import { useParams } from 'react-router-dom';
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';

// type Props = {
//     children: any;
// };

export const TickerKenguru = (): React.ReactElement => {
    const params = useParams() as any;
    const { id } = params;

    return (
        <WideLayoutKenguru>
            <div>Тикер Кенгкру {id}</div>
        </WideLayoutKenguru>
    );
};
