/**
 * Created by shanmugavelsundaramoorthy on 1/24/16.
 */
import {Component, OnInit} from 'angular2/core'
import {Hero} from './contract/hero'
import {HeroDetailComponent} from './hero-detail.component'
import {HeroService} from './service/hero.service'

@Component({
    selector : "my-app",
    template : `<h2>{{title}}</h2>
                <div class="jumbotron">
                    <ul class="list-group">
                        <li  *ngFor="#hero of heroes;" (click)="onSelect(hero);" [ngClass]="applyStyle(hero)">
                            <span class="badge pull-left">{{hero.id}}</span>&nbsp;{{hero.name}}
                        </li>
                    </ul>
                    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
                </div>`,
    directives : [HeroDetailComponent],
    providers : [HeroService]
})

export class AppComponent implements OnInit {
     title:string = "My Heroes!";
     selectedHero:Hero;

    //classes
     activeItem:string = "list-group-item active";
     inactiveItem:string = "list-group-item";

    heroes : Hero[];

    constructor(private _heroService : HeroService) {
        //Inject and export hero service
    }

    ngOnInit() : void {
      this.getHeroes();
    }

    getHeroes() {
        //Load Heroes from service
        this.heroes = this._heroService.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    applyStyle(hero:Hero) : string {
        if (hero === this.selectedHero) {
            return this.activeItem;
        } else {
            return this.inactiveItem;
        }
    }

}