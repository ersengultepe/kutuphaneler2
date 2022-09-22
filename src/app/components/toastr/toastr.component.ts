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
  }

  success(){
    this._toastr.success("Success toastr çalıştı","Success Toastr");
  }

  info(){
    this._toastr.info("Info toastr çalıştı","Info Toastr");
  }

  warning(){
    this._toastr.warning("Warning toastr çalıştı","Warning Toastr");
  }

  error(){
    this._toastr.error("Error toastr çalıştı","Error Toastr");
  }

}
