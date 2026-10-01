
let GameCard = document.getElementById("GameCard");
let GamesData = [];
GetGameData();

 async function GetGameData()
{
  let respone = await fetch('https://www.freetogame.com/api/games?platform=windows');
  let data = await respone.json();
  GamesData = data;
  ApplyDtaToHTML();
}
function ApplyDtaToHTML()
{
    console.log("Hello from HTML");

    GameCard.innerHTML = "";
    for(let i = 0 ; i < GamesData.length ; i++)
    {

GameCard.innerHTML += `

    <div class="col-12 col-md-6 col-lg-4">

        <div class="card h-100">

            <img 
                src="${GamesData[i].thumbnail}" 
                class="card-img-top"
                alt="${GamesData[i].title}"
            >

            <div class="card-body">

                <h5 class="card-title">
                    ${GamesData[i].title}
                </h5>

                <p class="card-text">
                    ${GamesData[i].short_description}
                </p>

            </div>

            <ul class="list-group list-group-flush">

                <li class="list-group-item">
                    Developer : ${GamesData[i].developer}
                </li>

                <li class="list-group-item">
                    Publisher : ${GamesData[i].publisher}
                </li>

                <li class="list-group-item">
                    Genre : ${GamesData[i].genre}
                </li>

            </ul>

        </div>

    </div>

`;
 }


}
