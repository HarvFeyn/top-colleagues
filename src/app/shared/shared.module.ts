import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { ScorePipe } from '../shared/pipes/score.pipe';
import { VotingHistoryComponent } from '../shared/components/voting-history/voting-history.component';
import { CreateColleagueFormsComponent } from './components/create-colleague-forms/create-colleague-forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    CreateColleagueFormsComponent
  ],
    exports: [
        LikeHateComponent,
        ColleagueComponent,
        ColleagueListComponent,
        VotingHistoryComponent,
        CreateColleagueFormsComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }