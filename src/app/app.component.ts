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
  user = {
    username: '',
    email: '',
    secretQuestion:'',
    answer:'',
    gender: ''
  }
  submitted = false;

  @ViewChild('hwForm') hwForm: NgForm;

  hw= {
    emailHW: '',
    subscriptionHW:'',
    passwordHW: '',
  }

  //For HW
  subscription = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';


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
    console.log(this.signUpForm);
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email2;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.submitted = true;

    this.signUpForm.reset(); //Позволяет ресетнуть все значения при нажатии кнопки.
  }

  onSubmitHW() {
    console.log(this.hwForm);
    this.hw.subscriptionHW = this.hwForm.value.subscriptionHW;
    this.hw.passwordHW = this.hwForm.value.passwordHW;
    this.hw.emailHW = this.hwForm.value.emailHW;

    console.log(this.hw.emailHW);
    console.log(this.hw.subscriptionHW);
    console.log(this.hw.passwordHW);
    this.signUpForm.reset(); //Позволяет ресетнуть все значения при нажатии кнопки.
  }
}
