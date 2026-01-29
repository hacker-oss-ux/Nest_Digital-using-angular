import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contactus',
  imports: [RouterLink, CommonModule],
  templateUrl: './contactus.html',
  styleUrls: ['./contactus.css'],
})
export class Contactus {
  submitting = false;
  success = false;
  errorMsg: string | null = null;

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fd = new FormData(form);
    const name = (fd.get('name') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();

    this.errorMsg = null;
    if (!name || !email || !message) {
      this.errorMsg = 'Please fill out all required fields.';
      return;
    }

    // simple email check
    const re = /^\S+@\S+\.\S+$/;
    if (!re.test(email)) {
      this.errorMsg = 'Please enter a valid email address.';
      return;
    }

    this.submitting = true;
    // simulate async send
    setTimeout(() => {
      this.submitting = false;
      this.success = true;
      form.reset();
    }, 900);
  }
} 
