import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'camex-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  @Output()smenu = new EventEmitter();
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  menuToggle() {
    this.smenu.emit(null);
  }
  navigate(ruta) {
    this._router.navigate([`/${ruta}`]);
  }
}
