import UserRoutes from '@/routes/users';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import { IRoute, IRouteGroup } from '@/routes/IRoute/IRouteGroup';
import PrivateRoute from '@/routes/authGuard/PrivateRoute';
import Layout from '@/pages/layout/Layout';
import { RouteConfig } from '@/routes/route.config';

/*
const ExamRoute1=[
    {
        path: '/exam',
        element: lazy( ()=>import('@/pages/exam1/Exam1') ),
        meta:{
            auth:true,
            layout: 'normal'
        },
        children: [
            {
                path: 'child',
                element: lazy( ()=>import('@/pages/exam1/ch/ChildExam1') ),
            }
        ]
    }
];
*/
const routerItems: IRouteGroup[]=[
    {
        path: RouteConfig.LOGIN,
        element: lazy(()=>import('@/pages/sign/Login')),
        meta:{
            auth:false,
            layout: 'full',
            renderClass:'login'
        }
    },
    {
        path:'/',
        // element: lazy(()=>import('@/pages/Main')),
        element: lazy(()=>import('@/pages/dashboard/DashBoard')),
        meta:{
            auth:true,
            layout: 'side'
        }
    },
    {
        path:'/temp',
        element: lazy(()=>import('@/pages/Template')),
        meta:{
            auth:true,
            layout: 'side'
        }
    },
    ...UserRoutes,
    {
        path: '*',
        element: lazy( ()=>import('@/pages/NotFound') ),
        meta:{
            auth:false,
            layout: 'full'
        },
    }
];

/*
const routerProps = {}
Object.assign(routerProps, { ...props, meta: route.meta })

interface ButtonProps {
  tagName: 'a' | 'button';
}

function Button<P extends ButtonProps>({ tagName: TagName, ...props }: P & JSX.IntrinsicElements[P['tagName']]) {
  return <TagName {...props} />;
}
*/


type FinalRouteProps={
    route: IRouteGroup;
    index: number;
}
const FinalRoute=( { route, index }:FinalRouteProps )=>{
    const layout=(route.meta)? route.meta.layout : '';
    const addClass=(route.meta)? route.meta.renderClass : '';

    const renderProps={layout, addClass};

    //????????? ?????? ?????? ?????? ????????? ?????? ?????? JSX.Element ????????? ????????? ???????????? Route ????????? Routes ??? ???????????? ?????? ?????? ????????? ??????.
    return(
        <Route key={`${route.path}_${Date.now()}`} element={<Layout {...renderProps} />}>
            <Route key={`${route.path}_${index}_${Date.now()}`} path={route.path} element={
                <Suspense fallback={<>....</>} >
                    <route.element />
                </Suspense> }>
                {
                    route.children? route.children.map((child:IRoute)=>{
                        return <Route key={`${child.path}_${Date.now()}`} path={child.path} element={
                            <Suspense fallback={<>....</>}>
                                <child.element />
                            </Suspense> } />
                    }) : null
                }
            </Route>
        </Route>
        )
}

const AppRouter=()=>{
    return (
        <BrowserRouter>
                <Routes>
                    {
                        routerItems.map((route:IRouteGroup, index:number )=>{
                            const auth=(route.meta)? route.meta.auth : false;
                            // ?????? ????????? || ?????? && ??? ????????? ???
                            return <Route key={route.path} element={<PrivateRoute authentication={auth} />}>
                                { FinalRoute( { route, index} ) }
                            </Route>
                        })
                    }
                </Routes>

        </BrowserRouter>
    )
};

export default AppRouter;
