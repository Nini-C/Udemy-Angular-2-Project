import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'courseProject';
  loadedFeature = 'recipe';


  onNavigate(featureStyle: string) {
    this.loadedFeature = featureStyle;
  }
}
