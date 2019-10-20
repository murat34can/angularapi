import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/particle/movies/card/card.component';
import { WebApiService } from 'src/app/services/WebApi/web-api.service';
import { CardDetailComponent } from 'src/app/particle/movies/card-detail/card-detail.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[CardComponent,CardDetailComponent]
})
export class HomeComponent implements OnInit {

  constructor(private webApi:WebApiService) { }

  moviesData = [];
  moviesPage = 1;

  
  ngOnInit() {
    
    /*
    //TEST JSON PAGE-1
    let data = { 
      //Page-1
      Search: [
      {Title:"The Fast and the Furious: Tokyo Drift",Year:"2006",imdbID:"tt0463985",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"},      
      {Title:"Tokyo Story",Year:"1953",imdbID:"tt0046438",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},
      {Title:"Tokyo Godfathers",Year:"2003",imdbID:"tt0388473",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYmJmMjFiY2ItNDBkZS00MGQyLWE3ZjQtZWMzNjQ5ZTA5YjcwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"},
      {Title:"Showdown in Little Tokyo",Year:"1991",imdbID:"tt0102915",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMDI5NzM2YzEtNjBkNC00Njk0LTgxZDItY2RhMWM2ODE1ODNjXkEyXkFqcGdeQXVyMDI4NjM1MQ@@._V1_SX300.jpg"},
      {Title:"Tokyo Gore Police",Year:"2008",imdbID:"tt1183732",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNzdjNGU2YTQtMzYwZC00MThhLWFlYTgtZmFmZDY3YTI2NDAxXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_SX300.jpg"},
      {Title:"Tokyo!",Year:"2008",imdbID:"tt0976060",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNDcxMzU0MTYyNl5BMl5BanBnXkFtZTcwODQ0NzgyMg@@._V1_SX300.jpg"},
      {"Title":"Tokyo Sonata","Year":"2008","imdbID":"tt0938341","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZTBmOTE1NzUtYTI4NS00NDgyLWJhMTAtMDNjODI0Mjg0YjA5XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"},
      {"Title":"Tokyo Drifter","Year":"1966","imdbID":"tt0061101","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzFkODkwN2ItMTk1NS00OWZiLTllNmMtYzBiNmY1OTk2YzI0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
      {"Title":"Thirty Seconds Over Tokyo","Year":"1944","imdbID":"tt0037366","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzZmZjg1ZDAtY2VkYi00YTY1LWFmMzQtNjc4NmZmNmE1MjQxL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg"},
      {"Title":"Destination Tokyo","Year":"1943","imdbID":"tt0035799","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDJiYzY1ZWYtYzJhYi00YjQzLThkZjktNjUzMTIyOTE5MjY3XkEyXkFqcGdeQXVyMDUyOTUyNQ@@._V1_SX300.jpg"}
    ]};    
    
    this.moviesData.push(data.Search);  

    //Test JSON EXAMPLE DATA
    this.moviesDetailData = {"Title":"Guardians of the Galaxy Vol. 2","Year":"2017","Rated":"PG-13","Released":"05 May 2017","Runtime":"136 min","Genre":"Action, Adventure, Comedy, Sci-Fi","Director":"James Gunn","Writer":"James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)","Actors":"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel","Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 12 wins & 42 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BN2MwNjJlODAtMTc1MS00NjkwLTg2NDMtYzFjZmU2MGM1YWUwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"7.6","imdbVotes":"502,562","imdbID":"tt3896198","Type":"movie","DVD":"22 Aug 2017","BoxOffice":"$389,804,217","Production":"Walt Disney Pictures","Website":"https://marvel.com/guardians","Response":"True"};
    */
   
    this.webApi.get("movies", this.moviesPage).subscribe(
        data => {          
          if(data.Response == "True")
            this.moviesData.push(data.Search);
          else
            this.moviesPageLast = true;
        },
        error => {
          console.error("Hata oluştu:movies");
        }
    );

    this.Timer(); //Diğer Sayfaların yüklenmesi için timer başlatıp scroll kontrolü yapılacak.
  }

  scrollSonaYaklasmaYukseligi = 1280; //scroll sonuna yaklaşıldığını anlamak için.
  moviesPageLast = false; // Sayfa sonuna gelindiyse daha request atma.
  moviesDataLoadingDrop = true; // 1 saniye aralıklı yüklemeye izin vermek için üst üste yükleme çekemesin diye.

  Timer(){
    setInterval(() => { 
      if(this.moviesPageLast == false && this.moviesDataLoadingDrop && this.moviesDetailVisible == "none"){ //sayfa sonuna ulaşıldı mı ? false ise yüklemeye devam et true ise yüklemeyi durdur.
        if((this.scrollSonaYaklasmaYukseligi >= document.documentElement.getBoundingClientRect().height - document.documentElement.scrollTop))
        {
          //Sayfa yüksekliği - Scroll Aşağı indirme farkı bize sayfa sonuna ne kadar piksel yaklaştığını verecektir. 
          //Burada 1280 büyük ise scrollun sona gelme piksel sayısı çok yaklaştı demektir ve sona geldiğinde 937 piksel olacaktır.
          //Kullanıcı sona getirmeyebilir bu yüzden %10 luk indirmeme payı bırakmak için sayıyı 1280 yaptım !
    
          //console.log(document.documentElement.getBoundingClientRect().height + " - "+document.documentElement.scrollTop + " = "+ (document.documentElement.getBoundingClientRect().height - document.documentElement.scrollTop));    
          /*
          //TEST JSON PAGE-2      
          let data = {
            Search:[
              {"Title":"Paranormal Activity 2: Tokyo Night","Year":"2010","imdbID":"tt1728179","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTc1NDgwODE0MF5BMl5BanBnXkFtZTgwNTIwMDY0MDE@._V1_SX300.jpg"},{"Title":"Teen Titans: Trouble in Tokyo","Year":"2006","imdbID":"tt0816671","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTc0NjM3NTI3NV5BMl5BanBnXkFtZTgwODE4NjAwNzE@._V1_SX300.jpg"},{"Title":"Godzilla: Tokyo S.O.S.","Year":"2003","imdbID":"tt0366526","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYjcwYmZiNDYtNjdmMS00YjBlLTk2YjctNzc5YTFiMWI4NzA5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_SX300.jpg"},{"Title":"Tokyo Twilight","Year":"1957","imdbID":"tt0051093","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYWIwMTA5YzQtMjljMi00MjhlLWFhODMtODE2NjE2MTIzY2Y3XkEyXkFqcGdeQXVyMzc2MDEwOTY@._V1_SX300.jpg"},{"Title":"Tokyo Tribe","Year":"2014","imdbID":"tt2808986","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTk5NDg4OTA5NF5BMl5BanBnXkFtZTgwNDk2Njc3NjE@._V1_SX300.jpg"},{"Title":"Tokyo Fist","Year":"1995","imdbID":"tt0114690","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTAzMTkxZDktODllMi00NmIwLWFiZGEtY2FiNTE2OTIxMWM4XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"},{"Title":"Tokyo Ghoul","Year":"2017","imdbID":"tt5815944","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzM3ZTczNmYtYjAyOS00YTc4LWExNTQtNjdkZWRiM2VkODVlXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_SX300.jpg"},{"Title":"Neo Tokyo","Year":"1987","imdbID":"tt0185481","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGE0NTIzMWEtNDMzNi00Y2EyLWIxY2QtYWQ5NDE0ZGZkOTY0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"},{"Title":"Tokyo Decadence","Year":"1992","imdbID":"tt0105622","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmI1MjQyYzItODYwZS00MTRjLWI3ODgtMmZiZmI5ZDM2MTdjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"},{"Title":"Tokyo Raiders","Year":"2000","imdbID":"tt0233600","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ0MTk5NTk0NF5BMl5BanBnXkFtZTcwODI0MTUyMQ@@._V1_SX300.jpg"}
            ]
          };
          this.moviesData.push(data.Search);*/
        
          
          //Yükleme kontrolü
          this.moviesDataLoadingDrop = false;
          setInterval(() => { 
            this.moviesDataLoadingDrop = true;
          },1000);

          
          this.moviesPage++;
          this.webApi.get("movies", this.moviesPage).subscribe(            
              data => {
                //console.log(data);
                if(data.Response == "True"){                
                  this.moviesData.push(data.Search);                
                }
                else//{"Response":"False","Error":"Movie not found!"}
                  this.moviesPageLast = true;
              },
              error => {
                console.error("Hata oluştu:movies");
              }
          );
        }
      }    
    },300)
  }

  moviesDetailVisible = "none";
  moviesDetailData = null;

  scrollHeight = null;
  moviesDetail(detailId){

    this.webApi.get("moviesDetail", detailId).subscribe(            
        data => {
          if(data.Response == "True"){
            this.scrollHeight = document.documentElement.scrollTop;//Son detay bakıldığı scroll bilgisini alıp tekrar geri gelindiğinde scroll oradan başlatacağım.          
            this.moviesDetailVisible = "block";
            this.moviesDetailData = data;
          }
        },
        error => {
          console.error("Hata oluştu:movies");
        }
    );
  }

  moviesDetailEvent(value){
    if(value == "back"){
      
      this.moviesDetailVisible = "none";
      this.moviesDetailData = null;
      
      //Sayfanın geçiş sağlarken scrollun gelmesini beklemek için küçük bir bekletme.      
      setTimeout(() => {
        document.documentElement.scrollTop = this.scrollHeight;
      }, 50);
      
    }
  }

}
