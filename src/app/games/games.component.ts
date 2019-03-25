import { Component, OnInit } from '@angular/core';
import {GameService} from '../core/http/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gameList: any[] = [];

  constructor(private gameService: GameService, private router: Router) { }

  /**
   * A list of games from the database is populated when the page loads.
   */
  ngOnInit() {
    this.gameService.getAllGames()
      .subscribe(
        (response) => {
          this.gameList = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  /**
   * Changes the page to the game details component.
   *
   * @param id
   */
  gameDetails(id: number) {
    this.router.navigate(['/games', id]);
  }
}
