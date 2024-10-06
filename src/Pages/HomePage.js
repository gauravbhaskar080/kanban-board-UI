import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";

import Header from "../Components/Header/Header";
import DisplayList from "../Components/DisplayList/DisplayList";

import "../Stylesheets/HomePage.css";
import { DragDropContext } from "react-beautiful-dnd";

const HomePage = () => {
  // const [listStatus, setListStatus] = useState([]);
  // const priorityList = [
  //   { name: "No priority", priority: 0 },
  //   { name: "Urgent", priority: 4 },
  //   { name: "High", priority: 3 },
  //   { name: "Medium", priority: 2 },
  //   { name: "Low", priority: 1 },
  // ];

  const listStatus = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
  
  const [users, setUsers] = useState([]);
  const [priorityList, setPriorityList] = useState([]);
  const [groupValue, setGroupValue] = useState(getStateFromLocalStorage() || "status");
  const [orderValue, setOrderValue] = useState("title");
  const [ticketDetails, setTicketDetails] = useState([]);

  const orderDataByValue = useCallback(
    (arrayOfCards) => {
      if (orderValue === "priority") {
        arrayOfCards.sort((a, b) => b.priority - a.priority);
      } else if (orderValue === "title") {
        arrayOfCards.sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
      }
      setTicketDetails([...arrayOfCards]);
    },
    [orderValue]
  );

  function saveStateToLocalStorage(state) {
    if (state) {
      localStorage.setItem("groupValue", JSON.stringify(state));
    }
  }

  function getStateFromLocalStorage() {
    return JSON.parse(localStorage.getItem("groupValue")) || null;
  }

  useEffect(() => {
    saveStateToLocalStorage(groupValue);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderDataByValue, groupValue]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      if (response.status === 200) {
        refactorData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const refactorData = (data) => {
    // const statUses = Array.from(new Set(data.tickets.map(ticket => ticket.status)));
    // setListStatus(statUses);
    
    const users = data.users.map(user => ({ name: user.name, id: user.id }));
    // const users = data.users.map(user => user.name);
    setUsers(users);

    const uniquePriorities = Array.from(new Set(data.tickets.map(ticket => ticket.priority)));

    // const noPriority = uniquePriorities.filter(priority => priority === 0);
    // const otherPriorities = uniquePriorities.filter(priority => priority !== 0).sort((a, b) => b - a);
    const priorities = uniquePriorities.sort((a, b) => b - a);
    const sortedPriorities = [...priorities].map(priority => ({
      name: getPriorityName(priority),
      priority
    }));

    setPriorityList(sortedPriorities);

    const userMap = new Map();
    data.users.forEach((user) => userMap.set(user.id, user));

    const ticketArray = data.tickets.map((ticket) => ({
      ...ticket,
      userObj: {...userMap.get(ticket.userId)},
    }));

    setTicketDetails(ticketArray);
    orderDataByValue(ticketArray);
  };

  function getPriorityName(priority) {
    switch (priority) {
      case 0: return "No priority";
      case 4: return "Urgent";
      case 3: return "High";
      case 2: return "Medium";
      case 1: return "Low";
      default: return "";
    }
  }

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    console.log(source, destination);
  
    // If no destination, return early (dragging canceled)
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }
  
    // Make a deep copy of the current ticket details
    const updatedTickets = Array.from(ticketDetails);
  
    // Find the ticket being dragged
    const draggedTicket = updatedTickets.find(
      (ticket) => ticket.id.toString() === draggableId
    );

    console.log(draggedTicket);

    if (groupValue === "status") {
      draggedTicket.status = destination.droppableId;
    } else if (groupValue === "priority") {
      draggedTicket.priority = destination.droppableId;
    } else {
      draggedTicket.userObj.name = destination.droppableId;
      // draggedTicket.userId = destination.droppableId;
    }

    console.log(updatedTickets)

    setTicketDetails(updatedTickets);
  };

  
  function handleGroupValue(value) {
    setGroupValue(value);
  }

  function handleOrderValue(value) {
    setOrderValue(value);
  }

  return (
    <>
      <Header
        groupValue={groupValue}
        orderValue={orderValue}
        handleGroupValue={handleGroupValue}
        handleOrderValue={handleOrderValue}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
      <section className="Details__board">
        <div className="Details__board__lists">
          {groupValue === "status" &&
            listStatus.map((status) => (
              <DisplayList
                key={status}
                groupValue="status"
                orderValue={orderValue}
                listTitle={status}
                listIcon=""
                listStatus={listStatus}
                ticketDetails={ticketDetails}
              />
            ))}

          {groupValue === "user" &&
            users.map((user) => (
              <DisplayList
                key={user}
                groupValue="user"
                orderValue={orderValue}
                listTitle={user.name}
                listIcon=""
                users={users}
                ticketDetails={ticketDetails}
              />
            ))}

          {groupValue === "priority" &&
            priorityList.map((priority) => (
              <DisplayList
                key={priority.priority}
                groupValue="priority"
                orderValue={orderValue}
                listTitle={priority.priority}
                listIcon=""
                priorityList={priorityList}
                ticketDetails={ticketDetails}
              />
            ))}
        </div>
      </section>
      </DragDropContext>
    </>
  );
};

export default HomePage;
