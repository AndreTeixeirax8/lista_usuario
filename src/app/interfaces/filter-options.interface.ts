import { Data } from '@angular/router';

export interface IFilterOptions {
  name: string | undefined;
  startDate: undefined;
  endDate: Date | undefined;
  status: boolean | undefined;
}
