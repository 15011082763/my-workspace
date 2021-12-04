import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginpangeComponent } from './loginmange/loginpange.component';

/** login模块路由 */
export const loginmanageroute = RouterModule.forRoot(
    [
        {
            // 登录页面
            path: 'login',
            loadChildren: () => import('./loginmange/loginmange.model').then(m => m.loginmanagemodel),
         
            
        },
        
        {
            // 登录页面
            path: 'home-page',
            loadChildren: () => import('./home-page/home-page.model').then(m => m.HomePageModule),
         
            
        },
      
    ],
    { useHash: true }
);
