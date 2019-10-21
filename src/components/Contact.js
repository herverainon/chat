import React from "react";
import "./Contact.css";

const OnLine = <div className="status"><div className="status-online"></div><div className="status-text">Online</div></div>;
const OffLine = <div className="status"><div className="status-offline"></div><div className="status-text">Offline</div></div>;

function Contact(props) {
	return (
		<div className="Contact">
			<img className="avatar" src={props.img} alt={props.name} />
			<div>
				<div className="name">{props.name}</div>
                <div className="status">
					{props.online?OnLine:OffLine}
				</div>
			</div>
		</div>
	);
}

export default Contact;
