import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor() { }
  displayModal:Subject<boolean> = new Subject<boolean>();
  navigateAwaySelection: Subject<boolean> = new Subject<boolean>();
}
