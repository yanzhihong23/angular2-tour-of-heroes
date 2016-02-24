import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/detail/hero-detail.component.html',
  styleUrls: ['app/detail/hero-detail.component.css'],
  inputs: ['hero'] // ??
})

export class HeroDetailComponent {
  hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {

  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}