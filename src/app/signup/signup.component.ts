import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserUnderAge, UserOverAge } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewChecked {

  // View Child wird erst nach ngAfterViewInit initialisiert
  @ViewChild('signUpForm') signUpForm!: NgForm;
  @ViewChild('password') password!: NgModel;

  formChangesSubscription: Subscription | undefined;

  showSignUpForm : boolean = false;
  isUnderAge: boolean = false;

  months: string[] = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  days: number[] = [];
  years: number[] = [];

  selectedRole: string = 'lernende';
  selectedDay: string = 'Tag';
  selectedMonth: string = 'Monat';
  selectedYear: string = 'Jahr';
  currentYear: number  = new Date().getFullYear();
  userDataOverAge: UserOverAge = {day: '', month: '', year: '', email: '', surename: '', name: '', password:''};
  userDataUnderAge: UserUnderAge = {day: '', month: '', year: '', email: '', username: '', password:''};
  isButtonDisabled: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {};

  ngOnInit(): void {
    this.initializeDateControl();

    this.route.queryParams.subscribe(params => {
      // Um sicherzustellen das Default bei Registrieren Button = lernende bleibt
      if (params['userRole'] !== undefined) {
      this.selectedRole = params['userRole'];
      }
    });
  }

  ngAfterViewChecked(): void {
    if (this.signUpForm) {
        // Um Disabled Attribut des Submit Button bei Änderungen zu aktualisieren
        this.signUpForm.form.valueChanges.subscribe(()=> {
          this.isButtonDisabled = this.isFormValid();
        })
      }
  }

  ngOnDestroy(): void {
    if (this.formChangesSubscription) {
      this.formChangesSubscription.unsubscribe();
    }
  }

  onSubmit() {
    if (!this.isUnderAge) {
      const email = this.signUpForm.value.email;
      const surename = this.signUpForm.value.surename;
      const name = this.signUpForm.value.name;
      const password = this.signUpForm.value.password;
      this.userDataOverAge = {
        day: this.selectedDay, 
        month: this.selectedMonth, 
        year: this.selectedYear, 
        email: email, 
        surename: surename, 
        name: name, 
        password: password
      };    
    console.log(this.userDataOverAge);
  }
    else {
      const email = this.signUpForm.value.email;
      const username = this.signUpForm.value.username;
      const password = this.signUpForm.value.password;
      this.userDataUnderAge = {
        day: this.selectedDay, 
        month: this.selectedMonth, 
        year: this.selectedYear, 
        email: email, 
        username: username, 
        password: password
      };    
      console.log(this.userDataUnderAge);
    }
    this.router.navigate(['']);
  }

  initializeDateControl() {
    for (let i = 1; i <=31; i++) {
      this.days.push(i);
    }
    for (let i = this.currentYear; i >= 1900; i--) {
      this.years.push(i);
    }
  }

  resetForm() {
    this.signUpForm.resetForm();
    this.selectedDay = 'Tag';
    this.selectedMonth = 'Monat';
    this.selectedYear = 'Jahr'; 
    this.showSignUpForm = false;
  }

  isPasswordValidDirty() {
    return this.password?.value?.length < 8 && this.password?.dirty;
  }

  isPasswordValidTouched() {
    return this.password?.value?.length < 8 && this.password?.touched;
  }

  isFormValid() {
    if (this.signUpForm && this.signUpForm.valid) {
      return this.password?.value?.length < 8 || !this.signUpForm.valid;
    }
    else {
      return true;
    }
  }

  checkAgeUnder() {
    const age = this.currentYear - +this.selectedYear;

    if (age <= 13 && this.selectedRole === 'lernende') {
      this.isUnderAge = true;
      return true;
    }
    else {
      return false
    }
  }
  checkAgeOver() {
    const age = this.currentYear - +this.selectedYear;

    if (age > 13 && this.selectedRole === 'lernende') {
      this.isUnderAge = false;
      return true;
    }
    else {
      return false
    }
  }
}
