import { MessageService } from './message.service';
import { catchError, map } from 'rxjs/operators';
import { User } from './../models/user.model';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {

  

  constructor(private http: HttpClient,private uServ:UserService) { }
  u:User = new User(0,"username","","","","");
  
    
}
