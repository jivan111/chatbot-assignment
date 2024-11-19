import { Component } from '@angular/core';
import { StockDataService } from '../services/stock-data.service';
import { CommonModule } from '@angular/common';
enum RESET {
  MENU = "MENU",
  BACK = "BACK"
}

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {
  RESET = RESET
  exchangeData: any;
  stocksData: any;
  stockItem: any;
  activeStockEx: string = "";
  activeStock: string = "";

  constructor(
    private _stockService: StockDataService,
  ) {

  }

  ngOnInit() {
    this.getEchanges();
  }

  // get stock exchange
  getEchanges() {
    this._stockService.getStockList().subscribe({
      next: ((res: any) => this.exchangeData = res),
      error: ((err: any) => console.log(err))
    });
  }

  // choose exchange
  chooseExchange(event: any) {
    const stockExCode = event?.target?.value;
    this.getExchange(stockExCode)
  }

  getExchange(stockExCode: string) {

    const stockData = this.exchangeData.find((stock: any) => stock.code === stockExCode);
    this.stocksData = stockData;
    this.stockItem = null;
    this.activeStockEx = stockExCode;
    this.activeStock = "";
  }



  // choose stock
  chooseStock(event: any) {
    const stockCode = event?.target?.value;
    this.activeStock = stockCode;
    const stockItem = this.stocksData?.topStocks.find((stock: any) => stock.code === stockCode);
    this.stockItem = stockItem;
  }


  reset(option: RESET) {
    if (option === RESET.MENU) {

      this.getExchange(this.activeStockEx)
    } else {
      this.stocksData = null;
      this.stockItem = null;
      this.activeStockEx = "";
      this.activeStock = "";


    }

  }

}
