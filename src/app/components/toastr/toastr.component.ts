import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor(
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this._toastr.success("Başarılı")
  }

}
