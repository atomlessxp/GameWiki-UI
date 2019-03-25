import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../../../core/http/game.service';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.css']
})
export class GamesDetailComponent implements OnInit {

  gameId: any;
  game: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameService: GameService) { }

  /**
   * Finds the specific game details by searching for a game by it's ID.
   */
  ngOnInit() {
    // Load in the specific game's details.
    this.gameId = this.route.snapshot.paramMap.get('id');
    this.gameService.findGameById(this.gameId)
      .subscribe(
        (response) => {
          this.game = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  /**
   * Navigates back to the games list component.
   */
  gotoGameList() {
    this.router.navigate(['games']);
  }
}
