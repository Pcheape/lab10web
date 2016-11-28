import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
 
export const AppRoutes: any = [
    { path: "Home", component: HomeComponent },
    { path: "About", component: AboutComponent },
    {path: "todo-app",component: TodoAppComponent}
];
 
export const AppComponents: any = [
    HomeComponent,
    AboutComponent,
    TodoAppComponent
];