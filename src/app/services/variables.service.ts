import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VariablesService {

  private index = new BehaviorSubject<number>(-1);

  public setIndex(index: number): void {
    this.index.next(index);
  }

  public getIndex(): number {
    return this.index.getValue();
  }

  constructor() { }
}
