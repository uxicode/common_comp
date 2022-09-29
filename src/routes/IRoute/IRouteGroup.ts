import React from 'react';

interface IRoute{
    path: string;
    element: React.LazyExoticComponent<() => JSX.Element>;
}

interface IRouteGroup extends IRoute{
    meta?:{
        auth: boolean;
        layout: string;
        renderClass?: string;
    };
    children?: IRoute[];
}

export type {
    IRoute,
    IRouteGroup
}
