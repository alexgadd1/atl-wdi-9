// user {
// 	id =1 
// 	name:
// 	email_providers: [{id: 1}]
// }
// 	id = 2 }
// 	name: 
// 	email_providers
// }

// email_providers {
// 	id: 1(a)
// 	name: AOL
// 	email_providers:
// 	users [e id:
// 		name: Josh;
// 		age: 28;
// 		]
// }

///// EMAIL APP ///////

var emailApp = {
	id: 1,
	name: "gmail",
	age: 20,
	uses: [send, receive, delete, address book],
	types: "mobileApplication", "webPage",
	rating: "first",
	owner: ["user", "users"]
}

var example emailApp = {
	name: "gmail";
	age: 20;
	uses: [send, receive, delete, address book {
	id: 1;
	name: "gmail"
	age: 20;
	condition: "email application";
	types: "mobileApplication", "webPage",
	rating: "first",
	owner: ["user", "users"],
	  id: #11738;
	  name: "Alex",
	  address: "PCM",
	  phoneNumber: "111-1111",
	}]
}
