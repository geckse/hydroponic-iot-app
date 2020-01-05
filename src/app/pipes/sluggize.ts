import {Pipe} from '@angular/core';

@Pipe({
  name: 'sluggize'
})
export class SluggizePipe {
  transform(value, args) {
    return value.replace(" ","-").toLowerCase();
  }
}
