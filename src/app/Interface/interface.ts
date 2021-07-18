export interface User{
     access_token : string;
     user:{
         id: string;
         username: string;
     }
     password: string;

  }


  export interface Login{
         access_token: string;
         username: string;
         password: string;

 }


 export   interface Calls{
     hasNextPage: boolean;
     nodes: Nodes[]
     totalCount: number;
 }


 export interface Nodes{
    id:string,
    duration:number,
    is_archived:boolean,
    from:number,
    to:number,
    via:number,
    direction:string,
    call_type:string,
    created_at:Date,
    notes: Notes[]

 }

 export interface Notes{
    id:string,
    content:string,
 }