import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'expense',
    loadChildren: () => import('./modules/expense/expense.module').then(m=>m.ExpenseModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'expense'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
