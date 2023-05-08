import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultQuestion = 'pet';
  @ViewChild('f') signUpForm: NgForm;
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    //По нажатию на кнопку во все поля зададуться следующие значения в закомментированном коде ниже. Минус в том, что мы переопределили сразу все поля.
    /*
    this.signUpForm.setValue({
      userData: {
        username: suggestedName,
        email2: 'random'
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    })
     */

    this.signUpForm.form.patchValue({
      userData: {
        username: 'Random username'
      }
    })
  }

  /*
    onSubmit(form: NgForm) {
    console.log(form)
    }
   */

  onSubmit() {
    console.log(this.signUpForm)
  }
}
