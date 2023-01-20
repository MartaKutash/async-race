
	let title = document.createElement('p');
	title.setAttribute('class', 'title');
	let body = document.querySelector('body');
	body.appendChild(title);
	title.innerText = "ASYNC RACE";


	let div_for_garage = document.createElement('div');
	div_for_garage.setAttribute('id', 'div_for_garage');
	body.appendChild(div_for_garage);
	let button_garage = document.createElement('button');
	button_garage.innerText = "TO GARAGE";
	button_garage.setAttribute('id', 'button_garage');
	div_for_garage.appendChild(button_garage);


	console.log(getCars());

	/*let img2 = document.createElement('img');
	img2.setAttribute('class', 'car_img');
	img2.src = "img/car-158795.svg";
	div_for_img.appendChild(img2);

	let create_button1 = document.createElement('button');
	create_button1.setAttribute('id', 'create_button1');
	create_button1.innerText = "Create a car";
	div_for_img.appendChild(create_button1);
	let update_button1 = document.createElement('button');
	update_button1.innerText = "Update a car";
	update_button1.setAttribute('id', 'update_button1');
	div_for_img.appendChild(update_button1);
	let delete_button1 = document.createElement('button');
	delete_button1.setAttribute('id', 'delete_button1');
	delete_button1.innerText = "Delete a car";
	div_for_img.appendChild(delete_button1);

	let img3 = document.createElement('img');
	img3.setAttribute('class', 'car_img');
	img3.src = "img/car-158795.svg";
	div_for_img.appendChild(img3);*/

	let div_for_winner = document.createElement('div');
	div_for_winner.setAttribute('class', 'div_for_winner');
	body.appendChild(div_for_winner);
	let button_winners = document.createElement('button');
	button_winners.innerText = "TO WINNERS";
	button_winners.setAttribute('id', 'button_winners');
	div_for_winner.appendChild(button_winners);

	let div_hidden = document.createElement('div');
	div_hidden.setAttribute('id', 'div_hidden');
	body.appendChild(div_hidden);
	let first_paragraph = document.createElement('p');
	first_paragraph.setAttribute('class', 'first_paragraph');
	div_hidden.appendChild(first_paragraph);
	first_paragraph.innerText = "HI THIS IS WINNER'S PAGE";

	let second_paragraph = document.createElement('p');
	second_paragraph.setAttribute('class', 'second_paragraph');
	div_hidden.appendChild(second_paragraph);
	second_paragraph.innerText = "Примечание: Начиная с Gecko 9.0, можно быть уверенным, что события progress будут приходить для каждого пакета данных, включая последний пакет в случаях, когда он получен, и соединение закрыто прежде, чем будет создано событие progress. В этом случае, событие progress автоматическисоздастся, когда будет получено событие load для этого пакета. Это позволяет следить за процессом загрузки с помощью только событий progress.";


function getCars() {
	let url = 'http://127.0.0.1:3000/garage';
	let response = fetch(url)
		.then(response => {
        return response.json();
		})
		.then(data => {
			console.log(data);
			let div_for_img = document.createElement('div');
			div_for_img.setAttribute('id', 'div_for_img');
			body.appendChild(div_for_img);
			let create_button = document.createElement('button');
			create_button.setAttribute('id', 'create_button');
			create_button.innerText = "Create a car";
			div_for_img.appendChild(create_button);
			for(let key in data) {
				console.log(data[key]);
				console.log(data[key].name);
				let car_self = document.createElement('div');
				let car_div_id = 'car_self-' + data[key].id;
				car_self.setAttribute('id', car_div_id);
				let carname = document.createElement('div');
				carname.textContent = data[key].name;
				carname.setAttribute('id', 'carname');
				car_self.appendChild(carname);
			let img1 = document.createElement('img');
			img1.setAttribute('class', 'car_img');
			img1.src = "img/car-158795.svg";
			car_self.appendChild(img1);
			let update_button = document.createElement('button');
			update_button.innerText = "Update a car";
			update_button.setAttribute('id', 'update_button');
			car_self.appendChild(update_button);
			let delete_button = document.createElement('button');
			delete_button.setAttribute('id', 'delete_button');
			delete_button.innerText = "Delete a car";
			car_self.appendChild(delete_button);
			delete_button.addEventListener('click', () => {
				let elementById = document.getElementById(car_div_id);
                if (elementById) {
                    div_for_img.removeChild(elementById);
                }
			})
			div_for_img.appendChild(car_self);

		}
    });

}

let hidden = document.getElementById('div_hidden');
	let winner = document.getElementById('button_winners');
	let hide_winner = document.getElementById('button_garage');
	let hide_garage = document.getElementById('div_for_img');

	winner.addEventListener('click', () => {
		hidden.style.display = 'block';
		hide_garage.style.display = 'none';
	})

	hide_winner.addEventListener('click', () => {
		hidden.style.display = 'none';
		hide_garage.style.display = 'block';
	})




