System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "My Heroes!";
                    //classes
                    this.activeItem = "list-group-item active";
                    this.inactiveItem = "list-group-item";
                    this.heroes = [
                        { id: 1, name: "Shan" },
                        { id: 2, name: "Raj" },
                        { id: 3, name: "Seenu" }
                    ];
                }
                AppComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                AppComponent.prototype.applyStyle = function (hero) {
                    if (hero === this.selectedHero) {
                        return this.activeItem;
                    }
                    else {
                        return this.inactiveItem;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "<h2>{{title}}</h2>\n                <div class=\"jumbotron\">\n                    <ul class=\"list-group\">\n                        <li  *ngFor=\"#hero of heroes;\" (click)=\"onSelect(hero);\" [ngClass]=\"applyStyle(hero)\">\n                            <span class=\"badge pull-left\">{{hero.id}}</span>&nbsp;{{hero.name}}\n                        </li>\n                    </ul>\n                    <div *ngIf=\"selectedHero\">\n                      <h2>{{selectedHero.name}} details!</h2>\n                      <div><label>id: </label>{{selectedHero.id}}</div>\n                      <div>\n                        <label>name: </label>\n                        <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n                      </div>\n                    </div>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map