import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: []
})
export class VerComponent {

  public codigo: string|null = null;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.codigo = params.get('codigo');
    });

  }
}
