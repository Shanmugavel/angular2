/**
 * Created by shanmugavelsundaramoorthy on 1/25/16.
 */
import {Injectable} from 'angular2/core'
import {HEROES} from '../mock/mock-heroes'

@Injectable()
export class HeroService {

    getHeroes() {
        return Promise.resolve(HEROES);
    }
}