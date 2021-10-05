import React from "react";
import AllGames from "./AllGames";

const Games = () => {
  let numGames;

  function searchBar() {
    numGames = 0;
    let input = document.getElementById("myInput");
    // console.log("test", input.value); //logs current value!
    let filter = input.value.toUpperCase();
    let col = document.getElementsByClassName("col");
    // console.log(
    //   "looking for card-text",
    //   col[0].getElementsByClassName("card-text")[0].innerText //lol this actually finds it
    // );

    // Card text will be key here, need to access it then filter by it
    // I don't have access to genre in this component. Hm... Could add it
    // As a class to my cards? This all feels a bit silly but will work
    // We only had a week
    for (let i = 0; i < col.length; i++) {
      setTimeout(function () {
        let txtValue = col[i].getElementsByClassName("card-text")[0].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue !== "") {
          col[i].style.display = "";
        } else {
          col[i].style.display = "none";
        }
      }, i / 20); // end of timeout
    }

    //     setTimeout(function () {
    //       for (let i = 1000; i < col.length; i++) {
    //         //   setTimeout(function () {
    //         let txtValue = col[i].getElementsByClassName("card-text")[0].innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue !== "") {
    //           col[i].style.display = "";
    //         } else {
    //           col[i].style.display = "none";
    //           // numGames++;
    //         }
    //         //   }, i); // end of timeout
    //       }
    //     }, 450);
  }

  return (
    <div>
      <h2>All Games</h2>
      <input
        autoFocus
        type="text"
        id="myInput"
        onKeyUp={(event) => searchBar(event)}
        placeholder="Search for games"
      ></input>
      {/* <input type="text" id="myInput" placeholder="Filter by genre"></input> */}
      <AllGames />
    </div>
  );
};

export default Games;
