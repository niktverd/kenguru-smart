// компонент с новостями сообщества
import React from 'react';
import { WideLayoutKenguru } from '../layouts/WideLayoutKenguru';

// type Props = {
//     children: any;
// };

export const MainKenguru = (): React.ReactElement => {
    return (
        <WideLayoutKenguru>
            <div>Новости сообщества</div>
        </WideLayoutKenguru>
    );
};
