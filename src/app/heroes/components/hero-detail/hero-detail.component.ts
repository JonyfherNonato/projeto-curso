import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../../../core/models/hero.model";
import { HeroService } from "../../../core/services/hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  isEditing = false;

  form = this.fb.group({
    id: ['' , Validators.required],
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
      private fb: FormBuilder,
      private heroService: HeroService,
      private location: Location,
      private route: ActivatedRoute,
      private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
      this.getHero();
    }

    getHero(): void {
      const paramId = this.route.snapshot.paramMap.get('id');

      if (paramId !== 'new') {
        this.isEditing = true;

        const id = Number(paramId);
        this.heroService.getOne(id).subscribe((hero) => {
          this.hero = hero;
          this.form.controls['id'].setValue(hero.name);
          this.form.controls['name'].setValue(hero.name);
        });
      }
    }

    goBack(): void {
      this.location.back();
    }

    create(): void {
      const { valid, value } = this.form;

      if(valid) {
        const hero: Hero = {
          name: this.hero.name
        } as Hero;

        this.heroService.update(hero).subscribe(() => this.goBack());
      } else {
        this.showErrorMsg();
      }

    }

    update(): void {
      const { valid, value } = this.form;

      if(valid) {
        const hero: Hero = {
          id: this.hero.id,
          name: this.hero.name
        };

        this.heroService.update(hero).subscribe(() => this.goBack());
      } else {
        this.showErrorMsg();
      }
  }

  private showErrorMsg(): void{
    this.snackBar.open('Please check the erros found.', 'OK', {
      duration: 5000,
      verticalPosition: 'top'
    })
  }
}
