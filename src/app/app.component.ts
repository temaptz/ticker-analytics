import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('canvasElement')
  private canvasElement?: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    this.initChart();
  }

  private initChart(): void {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];

    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

    if (this.canvasElement) {
      const chart = new Chart(
        this.canvasElement?.nativeElement,
        {
          type: 'line',
          data: data,
          options: {}
        }
      );

      console.log('CHART CREATED', chart);
    }
  }

}
