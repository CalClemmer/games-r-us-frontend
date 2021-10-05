import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AllGames = () => {
  const [allGames, setGames] = useState([]);

  //   let url = process.env.REACT_APP_SERVER_URL + "videogames/trending/"; //process.env.REACT_APP_API is undefined
  let url = "videogames/names/";

  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
    axios.get(url).then((response) => {
      setGames(response.data.game);
    });
  }, []);

  // this makes sure that the data is loaded before passing it through
  function allGamesList(n) {
    let gameArr = [];
    for (let i = 0; i < n; i++) {
      if (allGames[i]["cover"]) {
        gameArr.push(
          <Col>
            <GameCard gameData={allGames[i]} width={10}></GameCard>
          </Col>
        );
      }
    }
    return gameArr;
  }

  let displayAllGamesList = allGames.length ? (
    allGamesList(allGames.length)
  ) : (
    <p>Loading...</p>
  );

  return (
    <div className="trending">
      <Row className="mx-0">{displayAllGamesList}</Row>
    </div>
  );
};

export default AllGames;
