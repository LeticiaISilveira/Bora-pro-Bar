const Button = (props) => {
	const template = `
	<button id="${props.id}" class="${props.class}" value="${props.value}" type="${props.type}" name="${props.name}" onclick="button.handleClick(event, id, '${props.value}', ${props.onclick})">${props.title}</button>`;
	return template;
}

window.button = {
	handleClick: (event, id, value, onclick) => {
		event.preventDefault();
		onclick(id, event, value);
	}
}

export default Button;