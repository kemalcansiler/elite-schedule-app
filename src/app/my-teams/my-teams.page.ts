import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-my-teams',
    templateUrl: './my-teams.page.html',
    styleUrls: ['./my-teams.page.scss'],
})

export class MyTeamsPage implements OnInit {

    constructor(private nav: NavController) {
    }

    ngOnInit() {
    }

    goToTournaments() {
        this.nav.navigateForward(['/tournaments']);
    }
}
