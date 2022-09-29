import { lazy } from 'react';
import { RouteConfig } from '@/routes/route.config';

const UserRoutes=[
  {
    path:RouteConfig.USERS,
    element: lazy( ()=>import('@/pages/users/UserList') ),
    meta:{
      auth: true, // 인증 작업 완료 시 true 로 변경 예정
      layout: 'normal'
    },
  }
]
export default UserRoutes;
