import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  articleForm: FormGroup;

  constructor(fb: FormBuilder, private globalService: GlobalService) {
    this.articleForm = fb.group({
      titre: new FormControl(''),
      contenu: new FormControl(''),
      date: Date,
      image: new FormControl('')

    })
  }

  ngOnInit() {
  }

  valider() {
    console.log(this.articleForm.value);

    this.globalService.saveArticle(this.articleForm.value);
    this.articleForm.reset();
  }

}
