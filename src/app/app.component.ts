import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      "gender": new FormControl('male'),
      "hobbies": new FormArray([])
    });

    this.signUpForm.valueChanges.subscribe(
      (value) => console.log('value ' + value)
    );

    this.signUpForm.statusChanges.subscribe(
      (status) => console.log('status ' + status)
    );

    // Чтобы установить во ВСЕХ полях формы новые значения (если наже не прописал, будет = null)
    this.signUpForm.setValue( {
      'userData': {
        'username': 'Evgeni',
        'email': 'kro@googlers.com'
      },
      'gender': 'male',
      'hobbies':[]
    });

    // Чтобы установить установить в ОПРЕДЕЛЕННЫХ полях формы новые значения (если ниже не указал, будет = старое значение)
    this.signUpForm.patchValue( {
      'userData': {
        'username': 'EvgeniPatch'
      }
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  onAddHobby() {
    (<FormArray>this.signUpForm.get('hobbies')).push(new FormControl(null, Validators.required));
  }

  //Пишем свой валидатор!
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }

  //Асинхронный валидатор
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'nameIsForbidden': true})
        } else {
          resolve(null);
        }
      }, 1500)
    })
    return promise;
  }
}
