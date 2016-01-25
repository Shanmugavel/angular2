/**
 * Created by shanmugavelsundaramoorthy on 1/24/16.
 */
import {Component} from 'angular2/core'

interface Hero {
    id:number;
    name:string;
}

@Component({
    selector : "my-app",
    template : `<h2>{{title}}</h2>
                <div class="jumbotron">
                    <ul class="list-group">
                        <li  *ngFor="#hero of heroes;" (click)="onSelect(hero);" [ngClass]="applyStyle(hero)">
                            <span class="badge pull-left">{{hero.id}}</span>&nbsp;{{hero.name}}
                        </li>
                    </ul>
                    <div *ngIf="selectedHero">
                      <h2>{{selectedHero.name}} details!</h2>
                      <div><label>id: </label>{{selectedHero.id}}</div>
                      <div>
                        <label>name: </label>
                        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
                      </div>
                    </div>
                </div>`
})

export class AppComponent {
     title:string = "My Heroes!";
     selectedHero:Hero;

    //classes
     activeItem:string = "list-group-item active";
     inactiveItem:string = "list-group-item";

    heroes : Hero[] = [
         { id:1, name: "Shan"},
         { id:2, name: "Raj"},
         { id:3, name: "Seenu"}
     ];

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