import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';

/* board */
import { BoardComponent } from './component/board/board/board.component';
import { BoardListComponent } from './component/board/board-list/board-list.component';
import { BoardDetailsComponent } from './component/board/board-details/board-details.component';
import { BoardWriteComponent } from './component/board/board-write/board-write.component';
import { CommentComponent } from './component/board/comment/comment.component';
import { EditComponent } from './component/board/edit/edit.component';

/* admin */
import { AdminComponent } from './component/admin/admin/admin.component';
import { BoardEditComponent } from './component/admin/board-edit/board-edit.component';
import { BoardAddComponent } from './component/admin/board-add/board-add.component';
import { adminHearderComponent } from './component/admin/hearder/hearder.component';
import { CommonSequenceComponent } from './component/admin/common-sequence/common-sequence.component';
import { SequenceAddComponent } from './component/admin/sequence-add/sequence-add.component';

/* common */
import { HeaderComponent } from './component/common/header/header.component';
import { PagingComponent } from './component/common/paging/paging.component';

/* member */
import { JoinComponent } from './component/member/join/join.component';
import { LoginComponent } from './component/member/login/login.component';


/* service */
import { GetSequenceValueService } from './service/sequence-value/get-sequence-value.service';
import { PagingService } from './service/paging/paging.service';
import { CommonService } from './service/common/common.service';


/* npm install */
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomFormsModule } from 'ng5-validation';




const appRoutes: Routes = [
  {
    path: 'boards',
    component: BoardComponent
  },
  {
    path: 'board_list/:b_code',
    component: BoardListComponent
  },
  {
    path: 'board_detail/:id',
    component: BoardDetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'boardEdit/:id',
    component: BoardEditComponent
  },
  {
    path: 'boardAdd',
    component: BoardAddComponent
  },
  {
    path: 'commonSequence',
    component: CommonSequenceComponent
  },
  {
    path: 'sequenceAdd',
    component: SequenceAddComponent
  },
  {
    path: 'board_write/:b_code',
    component: BoardWriteComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'join',
    component: JoinComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/boards',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardListComponent,
    BoardDetailsComponent,
    HeaderComponent,
    AdminComponent,
    BoardEditComponent,
    BoardAddComponent,
    adminHearderComponent,
    CommonSequenceComponent,
    SequenceAddComponent,
    BoardWriteComponent,
    CommentComponent,
    EditComponent,
    PagingComponent,
    JoinComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule,
    CustomFormsModule
  ],
  providers: [
    GetSequenceValueService,
    PagingService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
