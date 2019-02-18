import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.page.html',
    styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
    public teams = [
        {id: 1, name: 'HC Elite'},
        {id: 2, name: 'Team Takeover'},
        {id: 3, name: 'DC Thunder'},
    ];

    constructor(public nav: NavController) {
    }

    ngOnInit() {
    }

    itemTapped($event: MouseEvent, team) {
        this.nav.navigateFo,

            rward(['/team-detail'], team);
    }
}
