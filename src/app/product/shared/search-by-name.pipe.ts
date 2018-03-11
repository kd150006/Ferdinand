import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})

export class SearchByNamePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items){ return []; }
    if (!searchText) {return items; }

    searchText = searchText.toLowerCase();

    return items.filter(item => item.name.toLowerCase().includes(searchText) || item.number.toLowerCase().includes(searchText));
  }
}
