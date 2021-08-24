import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Calls, Nodes } from '../Interface/interface';
import { ApiCallsService } from '../Services/api-calls.service';
import { AuthServicService } from '../Services/auth-servic.service';

@Component({
  selector: 'app-call-detail',
  templateUrl: './call-detail.component.html',
  styleUrls: ['./call-detail.component.scss'],
})
export class CallDetailComponent implements OnInit {
  public id: any;
  call: Nodes | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiCallsService,
    private auth: AuthServicService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      this.api.singleCall(params.id).subscribe((res) => {
        this.call = res;
        this.spinner.hide();
      });
    });
  }
}
