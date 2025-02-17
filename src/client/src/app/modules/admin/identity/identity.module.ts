import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityComponent } from './identity.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { IdentityRoutingModule } from './identity-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { UserComponent } from './components/user/user.component';
import { RoleComponent } from './components/role/role.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { RoleFormComponent } from './components/role/role-form/role-form.component';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { IdentityService } from './services/identity.service';
import { PermissionFormComponent } from './components/role/permission-form/permission-form.component';
import { UserRoleFormComponent } from './components/user/user-role-form/user-role-form.component';

@NgModule({
  declarations: [
    IdentityComponent,
    ProfileComponent,
    UserComponent,
    RoleComponent,
    UserFormComponent,
    RoleFormComponent,
    PermissionFormComponent,
    UserRoleFormComponent
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule
  ],
  providers:[
    IdentityService,
    UserService,
    RoleService
  ]
})
export class IdentityModule { }
