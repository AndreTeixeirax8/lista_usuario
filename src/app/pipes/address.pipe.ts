import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): string {
    const IVALID_ADDRESS =
      !address ||
      !address.rua ||
      !address.cidade ||
      !address.estado ||
      !address.pais ||
      address.numero === null ||
      address.numero === undefined;

    if (IVALID_ADDRESS) {
      return 'Endereço inválido';
    }

    return `${address.rua}, ${address.numero} - ${address.cidade}, ${address.estado}, ${address.pais}`;
  }
}
