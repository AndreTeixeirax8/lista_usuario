import { IUser } from '../interfaces/user/user.interface';
import { Data } from '@angular/router';
import { isWithinInterval } from 'date-fns';
import { IFilterOptions } from '../interfaces/filter-options.interface';

const filterUsersListByName = (
  name: string | undefined,
  usersList: IUser[]
): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined;

  if (NAME_NOT_TYPPED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) =>
    user.nome.toLocaleLowerCase().includes(name.toLowerCase())
  );

  return filteredList;
};

const filterUsersListByStatus = (
  status: boolean | undefined,
  usersList: IUser[]
): IUser[] => {
  const STATUS_NOT_SELECTED = status === undefined;

  if (STATUS_NOT_SELECTED) {
    return usersList;
  }

  const filteredListByStatus = usersList.filter(
    (user) => user.ativo === status
  );

  return filteredListByStatus;
};

const filterUsersListByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  usersList: IUser[]
): IUser[] => {
  const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;
  if (DATES_NOT_SELECTED) {
    return usersList;
  }

  const listFiltered = usersList.filter((user) =>
    isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    })
  );
  return listFiltered;
};

const filterUsersList = (
  filterOptions: IFilterOptions,
  usersList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

  filteredList = filterUsersListByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );

  return filteredList;
};

export { filterUsersList };
