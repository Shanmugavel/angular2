/**
 * Created by shanmugavelsundaramoorthy on 1/24/16.
 */
import {Component, OnInit} from 'angular2/core'
import {Hero} from './contract/hero'
import {HeroDetailComponent} from './hero-detail.component'
import {HeroService} from './service/hero.service'

@Component({
    selector : "my-app",
    templateUrl : 'app/template/list-heroes.html',
    directives : [HeroDetailComponent]
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
       this._heroService.getHeroes().then(heroes => { this.heroes = heroes }).catch( err => console.error( err));
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