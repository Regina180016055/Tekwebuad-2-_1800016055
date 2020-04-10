import { Component } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';

import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';

import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';

import {ApiService} from './api.service';

import { EditAlamatComponent } from './edit-alamat/edit-alamat.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'BukuAlamat';
  constructor (
	public dialog: MatDialog,
	public api:ApiService
  )
  
  {
	  this.getData();
  }
		
		
		/*getData()
	{
		this.api.status().subscribe(res => {
			console.log(res);
		})
	}*/


		dataAlamat:any=[];
		getData()
	{
		this.api.baca().subscribe(res => {
			this.dataAlamat=res;
		})
	}
	
  konfirmasiHapus(id)
  {
		const dialogRef = this.dialog.open(DialogKonfirmasiComponent, { 
				width: '450px', 
		});
		
		dialogRef.afterClosed().subscribe(result => {
				if (result==true)
				{
					console.log('Menghapus data');
					this.api.hapus(id).subscribe(res=>{
						this.getData();
					})
				}
		});
  }
  
   detailAlamat(item)
  {
		const dialogRef = this.dialog.open(DetailAlamatComponent, { 
				width: '450px', 
				data:item
		});
		
		dialogRef.afterClosed().subscribe(result => {
				console.log('The dialog was closed');
		});
  }
  
  buatAlamat()
  {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: '450px',      
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData(); // data diambil lagi dari server saat dialog tertutup
    });
  }

  
   editAlamat(data)
  {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: '450px',
      data:data
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getData();    
    });
  }
  
}
