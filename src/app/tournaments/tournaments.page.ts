import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-tournaments',
    templateUrl: './tournaments.page.html',
    styleUrls: ['./tournaments.page.scss'],
})
export class TournamentsPage implements OnInit {

    constructor(private nav: NavController) {
    }

    ngOnInit() {
    }

    backPage() {
        this.nav.goBack();
    }
}
