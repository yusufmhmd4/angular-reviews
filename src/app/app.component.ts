import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import reviewUsers from "./lib/constant.json"
import { ReviewUserComponent } from './components/review-user/review-user.component';

@Component({
  selector: 'app-root',
  imports: [ReviewUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reviews-app';

  userIndex = 0;
  reviewUsersData = reviewUsers;


  leftButtonClicked() {
    if (this.userIndex === 0) {
      this.userIndex = this.reviewUsersData.length-1
    } else {
      this.userIndex--
    }
  }

  rightButtonClicked() {
    if (this.userIndex === this.reviewUsersData.length - 1) {
      this.userIndex = 0
    } else {
      this.userIndex++
    }
  }


}
