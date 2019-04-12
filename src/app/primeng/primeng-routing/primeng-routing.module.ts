import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrimengMainComponent} from '../primeng-main/primeng-main.component';
import {PrimengDialogsComponent} from '../primeng-dialogs/primeng-dialogs.component';
import {PrimengDynamicDialogsComponent} from '../primeng-dynamic-dialogs/primeng-dynamic-dialogs.component';
import {PrimengTabViewComponent} from '../primeng-tab-view/primeng-tab-view.component';
import {ScrumBoardComponent} from '../scrum-board/scrum-board.component';
import {SprintBacklogComponent} from '../sprint-backlog/sprint-backlog.component';
import {ProductBacklogComponent} from '../product-backlog/product-backlog.component';
import {PipeSampleComponent} from '../pipe-sample/pipe-sample.component';
import {PromiseSampleComponent} from '../promise-sample/promise-sample.component';
import {SubjectSimpleComponent} from '../subject-simple/subject-simple.component';
import {PrimengTableComponent} from '../primeng-table/primeng-table.component';

const routes: Routes = [
  {
    path: 'primeng',
    component: PrimengMainComponent,
    children: [
      {
        path: '',
        component: PrimengDialogsComponent
      },
      {
        path: 'dialog',
        component: PrimengDialogsComponent
      },
      {
        path: 'dynamic',
        component: PrimengDynamicDialogsComponent
      },
      {
        path: 'tab',
        component: PrimengTabViewComponent
      },
      {
        path: 'board',
        component: ScrumBoardComponent
      },
      {
        path: 'sprint',
        component: SprintBacklogComponent
      },
      {
        path: 'product',
        component: ProductBacklogComponent
      },
      {
        path: 'code',
        component: PipeSampleComponent
      },
      {
        path: 'message',
        component: PromiseSampleComponent
      },
      {
        path: 'field',
        component: SubjectSimpleComponent
      },
      {
        path: 'table',
        component: PrimengTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrimengRoutingModule {
}
