import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Calls, Nodes } from '../Interface/interface';
import { ApiCallsService } from '../Services/api-calls.service';

@Component({
  selector: 'app-all-calls',
  templateUrl: './all-calls.component.html',
  styleUrls: ['./all-calls.component.scss'],
})
export class AllCallsComponent implements OnInit {
  public calls: Nodes[] = [];
  public next: boolean = false;
  public total: number = 0;
  public page: number = 1;
  public limit = 10;
  public allcalls: any = [];
  offset: any;
  constructor(
    private api: ApiCallsService,
    private router: Router,
    private activate: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.offset = (this.page - 1) * this.limit;
    console.log(this.offset);
    this.activate.queryParams.subscribe((params) => {
      this.offset = params.offset ? params.offset : 0;
      this.limit = params.limit ? params.limit : this.limit;
      this.spinner.show();
      this.api.allCalls(this.offset, this.limit).subscribe((res) => {
        this.calls = res.nodes;
        this.next = res.hasNextPage;
        this.total = res.totalCount;
        this.spinner.hide();
      });
    });
  }

  getCalls(event: any) {
    this.router.navigate(['/allCalls'], {
      queryParams: { offset: (event - 1) * this.limit, limit: this.limit },
    });
  }
}
