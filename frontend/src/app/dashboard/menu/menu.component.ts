import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  notificationCounter = 0;

  
  constructor(private router: Router,  private authService: AuthService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.authService.startInactivityTimer();
  }


  //-------------------------------------ON MOUSE MOVE RESET TIMER---------------------------------//
  @HostListener('window:mousemove') // Add this event listener to the component
  onWindowMouseMove(): void {
    this.authService.resetInactivityTimer();
  }

  
  //---------------------------ON LOGOUT CLICK--------------------------------//
  onLogout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this.toastr.info('Logged Out Successfully', 'Info');
    this.router.navigate(['/login']);
  }



}
