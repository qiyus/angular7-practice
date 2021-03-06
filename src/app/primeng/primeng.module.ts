import {NgModule} from '@angular/core';
import {PrimengMainComponent} from './primeng-main/primeng-main.component';
import {TreeModule} from 'primeng/tree';
import {PrimengRoutingModule} from './primeng-routing/primeng-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TableModule} from 'primeng/table';
import {PrimengDialogComponent} from './primeng-dialog/primeng-dialog.component';
import {DialogModule} from 'primeng/dialog';
import {PrimengDynamicDialogComponent} from './primeng-dynamic-dialog/primeng-dynamic-dialog.component';
import {PrimengDialogsComponent} from './primeng-dialogs/primeng-dialogs.component';
import {PrimengDynamicDialogsComponent} from './primeng-dynamic-dialogs/primeng-dynamic-dialogs.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {PrimengTabViewComponent} from './primeng-tab-view/primeng-tab-view.component';
import {
  CardModule,
  ChartModule,
  CodeHighlighterModule,
  FieldsetModule, FileUploadModule,
  MessageModule,
  MessagesModule,
  PanelModule, PickListModule,
  SplitButtonModule,
  TabViewModule, TerminalModule,
  ToggleButtonModule
} from 'primeng/primeng';
import {TaskCardComponent} from './task-card/task-card.component';
import {TaskCardBoxComponent} from './task-card-box/task-card-box.component';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ScrumBoardComponent} from './scrum-board/scrum-board.component';
import {BurnDownComponent} from './burn-down/burn-down.component';
import {DialogExtensionDirective} from './dialog-extension.directive';
import {SprintBacklogComponent} from './sprint-backlog/sprint-backlog.component';
import {ProductBacklogComponent} from './product-backlog/product-backlog.component';
import {BrPipe} from './br.pipe';
import {PipeSampleComponent} from './pipe-sample/pipe-sample.component';
import {PromiseSampleComponent} from './promise-sample/promise-sample.component';
import {SubjectSimpleComponent} from './subject-simple/subject-simple.component';
import {ToastModule} from 'primeng/toast';
import { PrimengTableComponent } from './primeng-table/primeng-table.component';
import { PrimengPickListComponent } from './primeng-pick-list/primeng-pick-list.component';
import { BoardSignComponent } from './board-sign/board-sign.component';
import { BoardResetPasswordComponent } from './board-reset-password/board-reset-password.component';
import { PrimengTerminalComponent } from './primeng-terminal/primeng-terminal.component';
import { KeepHtmlPipe } from './keep-html.pipe';
import { Gantt } from './gantt/gantt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimengRoutingModule,
    TreeModule,
    ButtonModule,
    TableModule,
    DialogModule,
    DynamicDialogModule,
    TabViewModule,
    CardModule,
    VirtualScrollerModule,
    ChartModule,
    PanelModule,
    CodeHighlighterModule,
    ToggleButtonModule,
    MessagesModule,
    MessageModule,
    SplitButtonModule,
    FieldsetModule,
    ToastModule,
    PickListModule,
    TerminalModule,
    FileUploadModule
  ],
  declarations: [
    PrimengMainComponent,
    PrimengDialogComponent,
    PrimengDialogsComponent,
    PrimengDynamicDialogComponent,
    PrimengDynamicDialogsComponent,
    PrimengTabViewComponent,
    TaskCardComponent,
    TaskCardBoxComponent,
    ScrumBoardComponent,
    BurnDownComponent,
    DialogExtensionDirective,
    SprintBacklogComponent,
    ProductBacklogComponent,
    BrPipe,
    PipeSampleComponent,
    PromiseSampleComponent,
    SubjectSimpleComponent,
    PrimengTableComponent,
    PrimengPickListComponent,
    BoardSignComponent,
    BoardResetPasswordComponent,
    PrimengTerminalComponent,
    KeepHtmlPipe,
    Gantt
  ],
  entryComponents: [
    PrimengDialogComponent,
    PrimengDynamicDialogComponent
  ]
})
export class PrimeNgModule {
}
