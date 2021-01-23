import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { CharacterComponent } from 'src/app/shared/character/character.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animal: string;
  characters: any
  parameters: string;
  constructor(private apiService: ApiMarvelService, public dialog: MatDialog) {
    // this.id = 0;
    this.animal = ''
    this.characters = []
    this.parameters = ''
  }

  ngOnInit(): void {
    this.getCharactersFromService()
    this.parameters = this.apiService.getApiSecurityParameters()
    // console.log("🚀 ~ file: home.component.ts ~ line 22 ~ HomeComponent ~ ngOnInit ~ parameters", parameters)
  }

  getCharactersFromService() {
    this.apiService.getCharacters().subscribe((data: any) => {
      console.log("🚀 ~ file: home.component.ts ~ line 23 ~ HomeComponent ~ this.apiService.getCharacters ~ data", data)
      return this.characters = data.data.results;
    })
    console.log("🚀 ~ file: home.component.ts ~ line 23 ~ HomeComponent ~ getCharactersFromService ~ this.characters", this.characters)
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(CharacterComponent, {
      width: '600px',
      data: { id: id, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
