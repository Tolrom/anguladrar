import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NestingComponent } from './nesting/nesting.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { TpBindingComponent } from './tp-binding/tp-binding.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },{
        path: "nesting",
        component: NestingComponent
    },{
        path: "textinter",
        component: ListFriendsComponent
    },{
        path: "tpbinding",
        component: TpBindingComponent
    }
];
