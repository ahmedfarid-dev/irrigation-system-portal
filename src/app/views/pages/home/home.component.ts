import { Component, OnInit } from '@angular/core';
import { IrrigationSystemService } from 'src/app/services/irrigation-system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  preserveWhitespaces: true
})
export class HomeComponent implements OnInit {
  plots: any[] = [];

  constructor(
    private irrigationSystemService: IrrigationSystemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.irrigationSystemService.getPlots().subscribe({
      next: (plots) => {
        this.plots = plots.map((plot: any) => {
          return {
            ...plot,
            lastIrragtionDate: `${plot.lastIrragtionDate.split('T')[0]} ${
              plot.lastIrragtionDate.split('T')[1].split('.')[0]
            }`,
            nextIrragtionDate: `${plot.nextIrragtionDate.split('T')[0]} ${
              plot.nextIrragtionDate.split('T')[1].split('.')[0]
            }`
          };
        });
      },
      error: (e) => console.error(e)
    });
  }

  openPlotDetails(plotId: number) {
    this.router.navigate([`details/${plotId}`]);
  }
}
