import React, { useEffect, useState } from "react";
import { Tab, TabList, Tabs } from "react-tabs";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import CategoryCard from "../../Shared/HouseCard/CategoryCard";
import "./FindByRoomSize.css";

const FindByRoomSize = () => {
    const [allHouses, setAllHouses] = useState([]);
    const [roomSizes, setRoomSizes] = useState([]);
    const [tab, setTab] = useState("Small");

    useEffect(() => {
        fetch("/houses.json")
          .then((res) => res.json())
          .then((data) => {
            setAllHouses(data);
    
            const filteredRoomSizes = data.filter((house) => house.roomSize === tab);
            setRoomSizes(filteredRoomSizes);
          });
      }, [tab]);
    

  console.log("roomSizes", roomSizes);
  return (
    <Container>
      {/* Title */}
      <SectionTitle
        heading={"Find By Room Size"}
        subHeading={"Discover homes tailored to your preferred room sizes"}
      />
      {/* Body */}
      <p className="text-center font-medium m-4">
        <Tabs>
          <TabList className="custom-tab-list">
            <Tab
              className="custom-tab dark:text-slate-300"
              onClick={() => setTab("Small")}
            >
              Small
            </Tab>
            <Tab
              className="custom-tab dark:text-slate-300"
              onClick={() => setTab("Medium")}
            >
              Medium
            </Tab>
            <Tab
              className="custom-tab dark:text-slate-300"
              onClick={() => setTab("Large")}
            >
              Large
            </Tab>
          </TabList>
        </Tabs>
      </p>
      <div className="grid grid-cols md:grid-cols-2">
        {roomSizes.map((roomSize) => (
          <CategoryCard key={roomSize._id} roomSize={roomSize} />
        ))}
      </div>
    </Container>
  );
};

export default FindByRoomSize;
