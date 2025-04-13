import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './ultils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  userListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.userListFiltered = this.usersList;
    }, 1000);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.userListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}
