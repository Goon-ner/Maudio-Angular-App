import { Pipe, PipeTransform } from '@angular/core';
import {IDevice} from "../models/device";

@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {

  transform(products: IDevice[], term: string): IDevice[] {
    return products.filter(prod =>  prod.name.toLowerCase().includes(term.toLowerCase())
    )}

}
