import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { AuthGuard } from './commons/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router"
import { LoginComponent } from "./login/login.component";

export const AppRoutes: Routes = [

    {
        path: '', component: HomeComponent, canActivate: [AuthGuard],

        children: [

            { path: "", component: BienvenidoComponent, canActivate: [AuthGuard] },
            {
                path:'conocenos',
                canActivate: [AuthGuard], 
                loadChildren: './conocenos/conocenos.module#ConocenosModule'
            },
            {
                path:'repsol-en-el-mundo',
                canActivate: [AuthGuard], 
                loadChildren: './mundo/mundo.module#MundoModule'
            }

        ]

    },
    { path: "login", component: LoginComponent },
    { path: '**', redirectTo: '' }
]