import React from 'react';

import DisplayCard from '../DisplayCard/DisplayCard';

import * as icons from '../../Assets/index.js';
import '../../Stylesheets/DisplayList.css';


let countCard = 0;

const DisplayList = (props) => {
  return (
    <>
        <div className="list__container">
            <div className="list__header">
                <div className="list__header-left">
                    {{
                    'status' : <>{{
                        'Todo': <div className="list__icon"><img src={icons.todo} /></div>,
                        'Backlog': <div className="list__icon"><img src={icons.backlog} /></div>,
                        'In progress': <div className="list__icon"><img src={icons.inProgress} /></div>,
                        'Done': <div className="list__icon"><img src={icons.done} /></div>,
                        'Cancelled': <div className="list__icon"><img src={icons.cancelled} /></div>
                    }[props.listTitle]}</>,
                    
                    'user': <></>,
                    'priority' : <>{{
                        0: <div className="card__heading-icon"><img src={icons.noPriority} /></div>,
                        1: <div className="card__heading-icon"><img src={icons.lowPriority} /></div>,
                        2: <div className="card__heading-icon"><img src={icons.mediumPriority} /></div>,
                        3: <div className="card__heading-icon"><img src={icons.highPriority} /></div>,
                        4: <div className="card__heading-icon"><img src={icons.UrgentPriorityColour} /></div>
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
                    <div className="list-sum">{countCard}</div>
                </div>
                <div className="list__header-right">
                    <div className="list__add-item"><img src={icons.add}/></div>
                    <div className="list__option-item"><img src={icons.dotMenu}/></div>
                </div>
            </div>

            <div className="list__card-items">
                {props.ticketDetails.map(ticket => {
                    if(ticket.status === props.listTitle){
                        countCard++;
                        return(<DisplayCard cardDetails={ticket} />)
                    }
                    else if(ticket.priority === props.listTitle){
                        countCard++;
                        return(<DisplayCard cardDetails={ticket} />)
                    }
                    else if(ticket.userObj.name === props.listTitle){
                        countCard++;
                        return(<DisplayCard cardDetails={ticket} />)
                    }
                    return null;
                }, countCard = 0)}
            </div>
        </div>
    </>
  )
}

export default DisplayList;