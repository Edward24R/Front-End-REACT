import React from "react";
import "./uiCSS/Grid.css";
import { Link } from "react-router-dom";
import GridButton from "../Buttons/GridButton";
import { useState } from "react";
import "../Buttons/ButtonsCSS/GridButton.css";
import { changeCoord } from "./helpers/functionGrid";
import store from "../../store/store";

import { Grid, GridItem } from "@chakra-ui/react";

const baseStyle = {
  p: "4",
  bg: "transparent",
  width: "100px",
  height: "25px",
};

function MyGrid({ parkings }) {
  const [clicked, setMyClick] = useState(false);
  const [coord, setMyCoord] = useState(false);

  const handleCoord = (arr, pos) => {
    changeCoord(arr, pos);
    return true;
  };

  return (
    <div>
      <div>
        <p className="trans2">
          Current Available Parking Spots: {totalSpaces()}{" "}
        </p>
      </div>

      {/* _________________GRID: "A"____________________________________________________*/}
      {/* Grid component is a single column composed of GridItems which make the grid spaces. 
      There are 4 total Columns so there are 4 total Grids*/}
      <div>
        <Grid
          templateColumns="repeat(1, 1fr)"
          gap="4"
          className="gridPosA"
          h="145%"
        >
        {/* Grid Header Letter is the First Item in each Grid */}
          <GridItem
            className="gridBack"
            bg="yellow"
            p="4"
            borderRadius="md"
            border="1px solid black"
          >
            <div
              className="letterStyle"
              style={{ display: "flex", justifyContent: "center" }}
            >
              A
            </div>
          </GridItem>
            {/* Full Button Component, GridItem inherits baseStyle constant for Style Parameters */}
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              {/* Link Compnent that Sends User to GMaps. Uses Valid Link Function to determine
              if parking space is occupied or not by recieving the parking positions Array and the desired
              spot. parkingA is a array of [1,0,1,0] where a "1" indicated a occupied space and a "0" indicates
              a free space. The positon to check is indicated by the 1 in "validLink(parkingA, 1)
              where in this case it checks [(1),0,1,0]. The same fucntion methodology is applied to
              the rest of the functions. {handleCoord, spotAvailable}
              -validLink: if space is open, button link is to gmaps, else it stays inactive.                                                     */}
              <Link
                to={`/${validLink(parkingA, 1)}`}
                onClick={() => handleCoord(parkingA, 1)}
              >
          {/* -handleCoord: sends the coordinates from the parking spot to store.js where it is then
               passed along to GMAPS for use. See GMaps for further details on coordinate use.
              -spotAvailable: is for determining the Color of the button according to its availability*/}
                <GridButton type={spotAvailable(parkingA, 1)} text="1" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 2)}`}
                onClick={() => handleCoord(parkingA, 2)}
              >
                <GridButton type={spotAvailable(parkingA, 2)} text="2" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 3)}`}
                onClick={() => handleCoord(parkingA, 23)}
              >
                <GridButton type={spotAvailable(parkingA, 3)} text="3" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 4)}`}
                onClick={() => handleCoord(parkingA, 4)}
              >
                <GridButton type={spotAvailable(parkingA, 4)} text="4" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 1)}`}
                onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton type={spotAvailable(parkingA, 1)} text="5" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 1)}`}
                onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton type={spotAvailable(parkingA, 1)} text="6" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 1)}`}
                onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton type={spotAvailable(parkingA, 1)} text="7" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 1)}`}
                onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton type={spotAvailable(parkingA, 1)} text="8" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 1)}`}
                onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton type={spotAvailable(parkingA, 1)} text="9" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 1)}`}
                onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton type={spotAvailable(parkingA, 1)} text="10" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 1)}`}
                onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton type={spotAvailable(parkingA, 1)} text="11" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 1)}`}
                onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton type={spotAvailable(parkingA, 1)} text="12" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 1)}`}
                onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton type={spotAvailable(parkingA, 1)} text="13" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingA, 1)}`}
                onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton type={spotAvailable(parkingA, 1)} text="14" />
              </Link>
            </div>
          </GridItem>
        </Grid>
      </div>

      {/* _________________GRID: "B"____________________________________________________*/}
      <div>
        <Grid
          templateColumns="repeat(1, 1fr)"
          gap="4"
          className="gridPosB"
          h="145%"
        >
          <GridItem
            className="gridBack2"
            bg="yellow"
            p="4"
            borderRadius="md"
            border="1px solid black"
          >
            <div
              className="letterStyle"
              style={{ display: "flex", justifyContent: "center" }}
            >
              B
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="1" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 2)}`}
                onClick={() => handleCoord(parkingB, 2)}
              >
                <GridButton type={spotAvailable(parkingB, 2)} text="2" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 3)}`}
                onClick={() => handleCoord(parkingB, 3)}
              >
                <GridButton type={spotAvailable(parkingB, 3)} text="3" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 4)}`}
                onClick={() => handleCoord(parkingB, 4)}
              >
                <GridButton type={spotAvailable(parkingB, 4)} text="4" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="5" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="6" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="7" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="8" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="9" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="10" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="11" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="12" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="13" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="14" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="15" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="16" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="17" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="18" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingB, 1)}`}
                onClick={() => handleCoord(parkingB, 1)}
              >
                <GridButton type={spotAvailable(parkingB, 1)} text="19" />
              </Link>
            </div>
          </GridItem>
        </Grid>
      </div>

      {/* _________________GRID: "C"____________________________________________________*/}
      <div style={{ height: "100vh" }}>
        <Grid
          templateColumns="repeat(1, 1fr)"
          gap="4"
          className="gridPosC"
          h="165%"
        >
          <GridItem
            className="gridBack2"
            bg="yellow"
            p="4"
            borderRadius="md"
            border="1px solid black"
          >
            <div
              className="letterStyle"
              style={{ display: "flex", justifyContent: "center" }}
            >
              C
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="1" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 2)}`}
                onClick={() => handleCoord(parkingC, 2)}
              >
                <GridButton type={spotAvailable(parkingC, 2)} text="2" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 3)}`}
                onClick={() => handleCoord(parkingC, 3)}
              >
                <GridButton type={spotAvailable(parkingC, 3)} text="3" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 4)}`}
                onClick={() => handleCoord(parkingC, 4)}
              >
                <GridButton type={spotAvailable(parkingC, 4)} text="4" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="5" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="6" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="7" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="8" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="9" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="10" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="11" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="12" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="13" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="14" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="15" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="16" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="17" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="18" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="19" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="20" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="21" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="22" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingC, 1)}`}
                onClick={() => handleCoord(parkingC, 1)}
              >
                <GridButton type={spotAvailable(parkingC, 1)} text="23" />
              </Link>
            </div>
          </GridItem>
        </Grid>
      </div>

      {/* _________________GRID: "D"____________________________________________________*/}
      <div style={{ height: "100vh" }}>
        <Grid
          templateColumns="repeat(1, 1fr)"
          gap="4"
          className="gridPosD"
          h="148%"
        >
          <GridItem
            className="gridBack2"
            bg="yellow"
            p="4"
            borderRadius="md"
            border="1px solid black"
          >
            <div
              className="letterStyle"
              style={{ display: "flex", justifyContent: "center" }}
            >
              D
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="1" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 2)}`}
                onClick={() => handleCoord(parkingD, 2)}
              >
                <GridButton type={spotAvailable(parkingD, 2)} text="2" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 3)}`}
                onClick={() => handleCoord(parkingD, 3)}
              >
                <GridButton type={spotAvailable(parkingD, 3)} text="3" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 4)}`}
                onClick={() => handleCoord(parkingD, 4)}
              >
                <GridButton type={spotAvailable(parkingD, 4)} text="4" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="5" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="6" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="7" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="8" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="9" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="10" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="11" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="12" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="13" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="14" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="15" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="16" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="17" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="18" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="19" />
              </Link>
            </div>
          </GridItem>

          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="20" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 1)}`}
                onClick={() => handleCoord(parkingD, 1)}
              >
                <GridButton type={spotAvailable(parkingD, 1)} text="21" />
              </Link>
            </div>
          </GridItem>
          <GridItem {...baseStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Link
                to={`/${validLink(parkingD, 22)}`}
                onClick={() => handleCoord(parkingD, 22)}
              >
                <GridButton type={spotAvailable(parkingD, 22)} text="22" />
              </Link>
            </div>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}

export default MyGrid;



//TEMPORARY DATA FOR TESTING
export const parkingA = [1, 0, 1, 0];
export const parkingB = [0, 1, 0, 1];
export const parkingC = [1, 0, 1, 0];
export const parkingD = [0, 1, 0, 1];

const position = 2;

export const coordA = [
  "18.217597681837834, -67.14288145560002",
  "18.21757284111633,-67.14287340897359",
  "18.217555006749976,-67.14286133903393",
  "18.217534624614764, -67.14284926909426",
];
export const coordB = [
  " 18.217527694857605, -67.14297094830032",
  "18.217506675777337, -67.14296223112166",
  "18.217486930578414, -67.14295686670404",
  "18.217465274551206, -67.14295083173421",
];
export const coordC = [
  " 18.217503327362838, -67.1430278171088",
  "18.217478486627872, -67.14301909993016",
  "18.217461289193878, -67.14300568888608",
  "18.2174409070477, -67.14300032446846 ",
];
export const coordD = [
  "18.217454442274484, -67.14313830349626",
  "18.217432149301096, -67.14312958631761",
  "18.21741367797814, -67.14312019858677",
  "18.217390111114952, -67.14311215196032",
];

export let coordinates = "18.217597681837834, -67.14288145560002";


//spotAvailable function for determining whether a spot is available
// Returns the color for the availability of the spot
export function spotAvailable(park, pos) {
  if (getValueAtPosition(park, pos - 1) == 1) {
    return "red";
  } else return "green";
}

//Compares 2 arrays and returns true if identical
function isArrayIdentical(arr, arrB) {
  if (arr.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
}

//Determines if a Coordinate is available 
function coordAvailable(arr, posN) {
  if (getValueAtPosition(arr, posN - 1) == 1) {
    return "red";
  } else return getValueAtPosition(arr, posN - 1);
}

/*validLink function for determining whether a link should send the user
to the coordinated google maps page or do nothing is spot is unavailable*/
function validLink(parkN, posM, condition) {
  if (getValueAtPosition(parkN, posM - 1) == 1) {
    return "parkwise";
  } else if (isArrayIdentical(parkN, parkingA) && condition == true) {
    // change constant
    coordinates = getValueAtPosition(coordA, posM - 1);
  } else if (isArrayIdentical(parkN, parkingB) && condition == true) {
    // change constant
    coordinates = getValueAtPosition(coordB, posM - 1);
  } else if (isArrayIdentical(parkN, parkingC) && condition == true) {
    // change constant
    coordinates = getValueAtPosition(coordC, posM - 1);
  } else if (isArrayIdentical(parkN, parkingD) && condition == true) {
    // change constant
    coordinates = getValueAtPosition(coordD, posM - 1);
  } else return "gmaps";
}

//Returns Total Number of Zeros within a Array, a 0 is counted as available parking space
function countZeros(arr) {
  let count = 0; // 0 = availble space
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    }
  }
  return count; // return the total count of 0's
}

//Returns Total Available Parking Spaces
function totalSpaces() {
  return (
    countZeros(parkingA) +
    countZeros(parkingB) +
    countZeros(parkingC) +
    countZeros(parkingD)
  );
}

//Returns the specific value of an array depending on the given position
function getValueAtPosition(array, position) {
  if (position >= 0 && position < array.length) {
    return array[position];
  } else {
    return null; // or any other value you want to return for an invalid position
  }
}
