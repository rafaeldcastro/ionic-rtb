import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users = [];
  page = 0;
  maximumPages = 3;

  constructor(
    private http: HttpClient
  ) {
    // this.loadUsers();
    this.loadUsers_VirtualScroll();
  }

  loadUsers(event?){
    this.http.get(`https://randomuser.me/api/?results=20&page=${this.page}`)
      .subscribe(res => {
        console.log(res)
        this.users = this.users.concat(res['results']);

        if(event){
          event.target.complete();
        }
      })
  }

  loadMore(event){
    this.page++;
    this.loadUsers(event);

    if(this.page === this.maximumPages){
      event.target.disabled = true;
    }
  }

  loadUsers_VirtualScroll(){
    this.http.get(`https://randomuser.me/api/?results=100&page`)
      .subscribe(res => {
        
        this.users = res['results'].sort((a,b) => {
          if(a.name.last < b.name.last){
            return -1;
          }
          if(a.name.last > b.name.last){
            return 1;
          }
          return 0;
        })
        console.log(this.users)
      })
  }

  separateLetter(record, recordIndex, records){

    if(recordIndex == 0){
      return record.name.last[0].toUpperCase();
    }

    let first_prev = records[recordIndex - 1].name.last[0];
    let first_current  = record.name.last[0];

    if(first_prev != first_current){
      return first_current.toUpperCase();
    }
    return null;
  }
}
