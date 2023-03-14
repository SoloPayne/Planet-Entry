import {Component, OnInit, ViewChild} from '@angular/core';
import {WizardComponent} from "angular-archwizard";

@Component({
  selector: 'app-my-palnets-wizard',
  templateUrl: './my-palnets-wizard.component.html',
  styleUrls: ['./my-palnets-wizard.component.css']
})
export class MyPalnetsWizardComponent implements OnInit {

  @ViewChild(WizardComponent)
  public wizard!: WizardComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
