import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { NestingComponent } from './nests/nesting/nesting.component';
import { ListFriendsComponent } from './friends/list-friends/list-friends.component';
import { TpBindingComponent } from './tp-binding/tp-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { BlogControlCenterComponent } from './blog/blog-control-center/blog-control-center.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ZeldaCreaturesListComponent } from './zelda-creatures-list/zelda-creatures-list.component';

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
        component: ZeldaCreaturesListComponent
    }
];
// RGAPI-e02bd48b-b4e6-4ae8-98b9-c62150b34802