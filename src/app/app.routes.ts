import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { ListFriendsComponent } from './friends/list-friends/list-friends.component';
import { TpBindingComponent } from './tp-binding/tp-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { BlogControlCenterComponent } from './blog/blog-control-center/blog-control-center.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ZeldaCreaturesListComponent } from './zelda-creatures-list/zelda-creatures-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UsersControlCenterComponent } from './tp-communication/users-control-center/users-control-center.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },{
        path: "textinter",
        component: ListFriendsComponent
    },{
        path: "tpbinding",
        component: TpBindingComponent
    },{
        path: "tpdirectives",
        component: DirectivesComponent
    },{
        path: "blog",
        component: BlogControlCenterComponent
    },{
        path: "pokedex",
        component: PokemonListComponent
    },{
        path: "zelda",
        canActivate: [AuthGuardService],
        component: ZeldaCreaturesListComponent
    },{
        path: "usersedit",
        component: UsersControlCenterComponent
    }
];
