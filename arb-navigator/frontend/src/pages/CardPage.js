import React from 'react';

import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import CardUI from '../components/CardUI';

const CardPage = () =>
{
    console.log("CardPage");
    return(
        <div>
            <PageTitle />
            <LoggedInName />
            <CardUI />
        </div>
    );
};

export default CardPage;
