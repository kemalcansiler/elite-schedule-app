import {Component, OnInit} from '@angular/core';

import {NavController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-team-detail',
    templateUrl: './team-detail.page.html',
    styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {

    public team: any = {};

    constructor(public navParams: NavParams, public nav: NavController) {
        this.team = this.navParams.data;
        console.log(this.team);
    }

    ngOnInit() {
    }

}
