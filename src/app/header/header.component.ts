import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges, AfterContentChecked, DoCheck, AfterViewChecked {
  constructor(){
    console.log('Constructor ejecutado')
  }
  ngOnInit(): void {
    console.log('ngOnInit ejecutado')
  }
  ngAfterContentInit(): void {
    console.log('AfterContent ejecutado.');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked ejecutado')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange ejecutado.');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked ejecutado.');
  }
  ngDoCheck(): void {
    console.log('Dochek ejecutado.');
  }
  ngAfterViewInit(): void {
    console.log('AfterView ejecutado.');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy ejecutado.');
  }

}
