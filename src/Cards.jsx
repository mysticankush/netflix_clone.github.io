import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src={props.i} alt="mtPic" className="card_img" />
            <div className="card_info">
                <span className="card__category">{props.t}</span>
                <h3 className="card__title">{props.s}</h3>
                <a href={props.l} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    );
}
export default Card;