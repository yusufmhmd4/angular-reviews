import { Component, Input } from '@angular/core';
import { User } from '../../lib/interfaces';

@Component({
  selector: 'app-review-user',
  imports: [],
  templateUrl: './review-user.component.html',
  styleUrl: './review-user.component.css'
})
export class ReviewUserComponent {

  @Input() userData!: User;

}
