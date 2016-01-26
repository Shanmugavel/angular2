/**
 * Created by shanmugavelsundaramoorthy on 1/24/16.
 */
import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {HeroService}  from './service/hero.service'
bootstrap(AppComponent, [HeroService]);