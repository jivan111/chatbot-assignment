import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ExtraOptions, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { StockDataService } from './services/stock-data.service';
import { ChatBotComponent } from "./chat-bot/chat-bot.component";
const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled"
  //scrollPositionRestoration: "enabled"
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HttpClientModule, 
    ChatBotComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[StockDataService]
})
export class AppComponent {
  title = 'Demo2';

  constructor(){}

}
