/**
 * Created by shanmugavelsundaramoorthy on 1/25/16.
 */
import {Component} from 'angular2/core';
import {Hero} from './contract/hero'

@Component({
    selector : 'my-hero-detail',
    templateUrl : '/app/template/hero-details.html',
    inputs : ['hero']
})
export class HeroDetailComponent {
    public hero: Hero;
}