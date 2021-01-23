import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';

export interface DialogData {
  animal: string;
  name: string;
  id: number;
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: any;
  constructor(private apiService: ApiMarvelService, public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.character = []
    console.log("🚀 ~ file: character.component.ts ~ line 18 ~ CharacterComponent ~ @Inject ~ data", data)
  }


  ngOnInit(): void {
    this.getCharacterFromService()
  }

  getCharacterFromService() {
    this.apiService.getCharacter(this.data.id).subscribe((data: any) => {
      this.character = data.data?.results;
      console.log("🚀 ~ file: character.component.ts ~ line 29 ~ CharacterComponent ~ this.apiService.getCharacter ~ data", data)



    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
