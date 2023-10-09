// Список тикеров
import React from 'react';
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';

type TickersProps = {
    _id: string;
    name: string;
    currentPrice: number;
    ticker: string;
    exchange: string;
};

export const TickersKenguru = (props: TickersProps): React.ReactElement => {
    return (
        <WideLayoutKenguru>
            <div>Тикеры Кенгкру</div>
        </WideLayoutKenguru>
    );
};
