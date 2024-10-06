import React from 'react';

import DisplayCard from '../DisplayCard/DisplayCard';

import * as icons from '../../Assets/index.js';
import '../../Stylesheets/DisplayList.css';
import { Droppable } from "react-beautiful-dnd";

let countCard = 0;

const DisplayList = (props) => {
  return (
    <>
    <Droppable droppableId={props.listTitle}>
    {(provided) => (
        <div className="list__container" ref={provided.innerRef} {...provided.droppableProps}>
                <div className="list__header">
                    <div className="list__header-left">
                        {{
                        'status' : <>{{
                            'Todo': <div className="list__icon"><img src={icons.todo} alt="Todo"/></div>,
                            'Backlog': <div className="list__icon"><img src={icons.backlog} alt="Backlog"/></div>,
                            'In progress': <div className="list__icon"><img src={icons.inProgress} alt="In-progress"/></div>,
                            'Done': <div className="list__icon"><img src={icons.done} alt="Done"/></div>,
                            'Cancelled': <div className="list__icon"><img src={icons.cancelled} alt="Cancelled"/></div>
                        }[props.listTitle]}</>,
                        
                        'user': <></>,
                        'priority' : <>{{
                            0: <div className="card__heading-icon"><img src={icons.noPriority} alt="no-priority"/></div>,
                            1: <div className="card__heading-icon"><img src={icons.lowPriority} alt="low-priority"/></div>,
                            2: <div className="card__heading-icon"><img src={icons.mediumPriority} alt="medium-priority"/></div>,
                            3: <div className="card__heading-icon"><img src={icons.highPriority} alt="high-priority"/></div>,
                            4: <div className="card__heading-icon"><img src={icons.UrgentPriorityColour} alt="urgent-priority"/></div>
                        }[props.listTitle]} </>
                        }[props.groupValue]}

                        <div className="list__title">
                            {{
                            'priority' : <>{
                                props.priorityList
                                ? props.priorityList.map(priorityProperty => (
                                    priorityProperty.priority === props.listTitle
                                    ? <>{priorityProperty.name}</>
                                    : null
                                ))
                                : null}</>,

                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                            }
                        </div>
                        <div className="list-sum">
                            {/* {countCard} */}
                        </div>
                    </div>
                    <div className="list__header-right">
                        <div className="list__add-item"><img src={icons.add} alt="add"/></div>
                        <div className="list__option-item"><img src={icons.dotMenu} alt="menu"/></div>
                    </div>
                </div>

                <div className="list__card-items">
                    {props.ticketDetails.map((ticket,index) => {
                        if(ticket.status === props.listTitle){
                            countCard++;
                            return(<DisplayCard cardDetails={ticket} index={index} key={ticket.id}/>)
                        }
                        else if(ticket.priority === props.listTitle){
                            countCard++;
                            return(<DisplayCard cardDetails={ticket} index={index} key={ticket.id}/>)
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            countCard++;
                            return(<DisplayCard cardDetails={ticket} index={index} key={ticket.id}/>)
                        }
                        return null;
                    }, countCard = 0)}
                </div>
            {provided.placeholder}
        </div>
    )}
    </Droppable>
    </>
  )
}

export default DisplayList;