import {Pipe, PipeTransform} from "@angular/core";

@Pipe(
  {
    name: 'short'
  }
)
export class ShortPipe implements PipeTransform {
  transform(value: any, param1: number, param2: number): any {
    console.log(param2);
    if (value.length > param1) {
      return value.substr(0, param1) + ' ...';
    }
    return value;
  }
}
