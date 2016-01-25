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
    template : `<h1>{{title}}</h1>
                <h2>{{hero.name}}'s details:</h2>
                <div><label>id: </label>{{hero.id}}</div>
                <div>
                    <label>name: </label>
                    <div><input [(ngModel)]="hero.name" placeholder="name"/></div>
                </div>`
})

export class AppComponent {
     title:string = "Tour of Heroes";
     hero:Hero = { id:1, name: "Shan"};
}