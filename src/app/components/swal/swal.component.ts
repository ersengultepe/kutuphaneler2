import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-swal',
  templateUrl: './swal.component.html',
  styleUrls: ['./swal.component.css']
})
export class SwalComponent implements OnInit {

  constructor() { 
    
  } 

  ngOnInit(): void {
  }

  callSwal(message:string, title: string, options: any){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      timer: 3000,
      timerProgressBar: true,
      showCancelButton: false,
      showConfirmButton: false
    })
    Toast.fire(title,message, options)
  }

  success(){
    this.callSwal("Success Swal çağırıldı","Success","success")
  }

  info(){
    this.callSwal("Info Swal çağırıldı","Info","info")
  }

  warning(){
    this.callSwal("Warning Swal çağırıldı","Warning","warning")
  }

  error(){
    this.callSwal("Error Swal çağırıldı","Error","error")
  }

  callSwalQuestion(title: string, text: string, btnIcon: string, btnName: string){
    let swal = Swal.fire({
      title: title,
      text: text,
      showCancelButton: true,
      cancelButtonText: "<i class='fa-solid fa-circle-xmark'></i> Vazgeç",
      showConfirmButton: true,
      cancelButtonColor: "red",
      confirmButtonText: "<i class='" + btnIcon + "'></i> " + btnName,
      icon: "question"
    });
    return swal;
  }

  sil(){
    this.callSwalQuestion("Sil?","Silmek istiyor musunuz?","fa-solid fa-trash","Sil").then((res)=>{
      if (res.isConfirmed) {
        console.log("Silme işlemi yapıldı");        
      }else if(res.dismiss == Swal.DismissReason.cancel){
        Swal.fire("İptal edildi","İşlem iptal edildi","info")
       }
    })
  }


}
