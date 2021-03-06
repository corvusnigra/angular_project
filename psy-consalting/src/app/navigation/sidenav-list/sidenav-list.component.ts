import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

    @Output() closeSidenav = new EventEmitter<void>();
    // isAuth$: Observable<boolean>;
    //
    // constructor(
    //     private authService: AuthService,
    //     private store: Store<fromRoot.State>
    // ) {}

    ngOnInit() {
        // this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    }

    onClose() {
        this.closeSidenav.emit();
    }

    onLogout() {
        this.onClose();
        // this.authService.logout();
    }
}
