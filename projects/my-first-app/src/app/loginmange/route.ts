import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginpangeComponent } from './loginmange/loginpange.component';

/** login模块路由 */
export const loginmanageroute = RouterModule.forRoot(
    [
        {
            // 默认访问页面
            path: '',
            component:LoginpangeComponent,
        },
        {
            // 登录页面
            path: 'login',
            component:LoginpangeComponent,
        },
        
        {
            // 首页
            path: 'home',
            component:HomePageComponent
        },
        {
            // 人员操作页面
            path: 'useoption',
            loadChildren:() => import('./use-option/use-option.module').then(m => m.UseOptionModule),

        },
    ],
    { useHash: true }
);
