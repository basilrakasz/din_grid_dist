import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { UserService } from '../../../user/services/user.service';
import { User } from '../../../user/models/user';
import { Navigation } from '../../../core/navigation/navigation';

@Component({
  selector: 'din-classy-layout',
  templateUrl: './classy-layout.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ClassyLayoutComponent implements OnInit, OnDestroy {
  isScreenSmall: boolean;
  // TODO maybe fetch from NavigationService if needed
  // navigation: Navigation;
  navigation: Partial<Navigation> = {
    default: [
      {
        id: 'projects',
        title: 'Projekte',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/projects'
      },
      {
        id: 'create-notification',
        title: 'Meldung anlegen',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/notification/create'
      },
      {
        id: 'company',
        title: 'Firma',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/company'
      }
    ]
  };
  user: User;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    // private _navigationService: NavigationService,
    private _userService: UserService,
    private _fuseMediaWatcherService: FuseMediaWatcherService,
    private _fuseNavigationService: FuseNavigationService
  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for current year
   */
  get currentYear(): number {
    return new Date().getFullYear();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to navigation data
    // this._navigationService.navigation$
    //   .pipe(takeUntil(this._unsubscribeAll))
    //   .subscribe((navigation: Navigation) => {
    //     this.navigation = navigation;
    //   });

    // Subscribe to the user service
    this._userService.user$
      .pipe((takeUntil(this._unsubscribeAll)))
      .subscribe((user: User) => {
        this.user = user;
      });

    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {

        // Check if the screen is small
        this.isScreenSmall = !matchingAliases.includes('md');
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle navigation
   *
   * @param name
   */
  toggleNavigation(name: string): void {
    // Get the navigation
    const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

    if (navigation) {
      // Toggle the opened status
      navigation.toggle();
    }
  }
}
