import React from 'react';
import "./ListItem.scss";
import deleteIcon from '../../images/delete-icon.svg';


const ListItem = props => {

    const circleClass = () => {
        var circleClass = '';
        const duration = parseInt(props.duration);
        if(duration <= 30){
            circleClass =  "duration-circle-green"
        }
        else if (duration > 30 && duration <= 45){
            circleClass = "duration-circle-orange"
        }
        else{
            circleClass = "duration-circle-red"
        }
        return circleClass;
        };
    
    return(
        <li className="exercise-list-item" draggable="true" key={props.idKey} id={props.id}>
            <p className="exercise-text">{props.exercise}</p>
            <div className={circleClass()}>{props.duration}</div>
            <button className="cancel-button" type="button" onClick={props.handleDelete}>
                <object type="image/svg+xml" data={deleteIcon} className="delete-icon">
                    <img src={deleteIcon} alt="delete"></img>
                </object>
            </button>
        </li>
    )
};


export default ListItem;

