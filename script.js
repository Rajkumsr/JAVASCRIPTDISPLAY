
fetch("raj.json")
.then(function(response){
	return response.json();
})
.then(function(products) {
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<ul>
				<br></br>
				<li>FirstName: ${product.firstName}</li>
				<li>LastName: ${product.lastName}</li>
				<li>Job: ${product.job}</li>
				<li>Roll: ${product.roll}</li>
				<li>Bio: ${product.bio}</li>
				<li>Address: ${product.Address}</li>
			</ul>
		`;
	}

	placeholder.innerHTML = out;
});