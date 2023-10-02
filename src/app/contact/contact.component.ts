import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  openEmailPopup(): void {
    const recipientEmail = 'ronallanpaguntalan@gmail.com'; // Replace with the recipient's email address
    const subject = '[Insert your subject here]'; // You can customize the email subject
    const body = 'I\'d like to connect with you...'; // You can customize the email body

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }
}
