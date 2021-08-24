import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Nodes } from '../Interface/interface';
import { ApiCallsService } from '../Services/api-calls.service';

@Component({
  selector: 'app-missed-calls',
  templateUrl: './missed-calls.component.html',
  styleUrls: ['./missed-calls.component.scss']
})
export class MissedCallsComponent implements OnInit {

  public calls:Nodes[]=[];
  public next:boolean = false;
  public total:number = 0;
  public page:number= 1;
  public limit=10;
  public allcalls:any=[];
  offset:any;
constructor(private api:ApiCallsService,private router : Router,private activate:ActivatedRoute) { }

ngOnInit(): void {

   this.activate.queryParams.subscribe(params=>{
      this.offset = params.offset? params.offset : 0;
     this.limit = params.limit ? params.limit : this.limit;
    this.api.allCalls(this.offset, this.limit).subscribe(res=>{
      this.calls=res.nodes.filter((res=>{
       return  res.call_type==="missed";
      }));
      this.next=res.hasNextPage;
      this.total=res.totalCount;

  })

   })
}

getCalls(event: any){
  this.router.navigate(["/missedCalls"],{queryParams:{offset:(event-1)*this.limit,limit:this.limit}});
}

}
