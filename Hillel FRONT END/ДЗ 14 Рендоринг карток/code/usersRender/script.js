const gradation = {
  20: "satisfactory",
  55: "good",
  85: "very-good",
  100: "excellent",
};

const users = [
  {
    name: "Jack Smith",
    age: 23,
    img: "JackSmith",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 20,
      },
      {
        title: "Java Enterprise",
        mark: 100,
      },
    ],
  },
  {
    name: "Amal Smith",
    age: 20,
    img: "AmalSmith",
    role: "student",
  },
  {
    name: "Noah Smith",
    age: 43,
    img: "NoahSmith",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 50,
      },
    ],
  },
  {
    name: "Charlie Smith",
    age: 18,
    img: "CharlieSmith",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 75,
      },
      {
        title: "Java Enterprise",
        mark: 23,
      },
    ],
  },
  {
    name: "Emily Smith",
    age: 30,
    img: "EmilySmith",
    role: "admin",
    courses: [
      {
        title: "Front-end Pro",
        score: 10,
        lector: "Leo Smith",
      },
      {
        title: "Java Enterprise",
        score: 50,
        lector: "David Smith",
      },
      {
        title: "QA",
        score: 75,
        lector: "Emilie Smith",
      },
    ],
  },
  {
    name: "Leo Smith",
    age: 253,
    img: "LeoSmith",
    role: "lector",
    courses: [
      {
        title: "Front-end Pro",
        score: 78,
        studentsScore: 79,
      },
      {
        title: "Java Enterprise",
        score: 85,
        studentsScore: 85,
      },
    ],
  },
];

const getGradation = (grade) => {
  for (const key in gradation) {
    if (grade <= key) {
      return gradation[key];
    }
  }
};

class User {
  constructor(user) {
    this.name = user.name;
    this.age = user.age;
    this.img = user.img;
    this.role = user.role;

    this.courses = user.courses;
  }

  render() {
    return `
		<div class="user">
		<div class="user__info">
			<div class="user__info--data">
				<img src="images/users/${this.img}.png" alt="${this.name}" height="50">
				<div class="user__naming">
					<p>Name: <b>${this.name}</b></p>
					<p>Age: <b>${this.age}</b></p>
				</div>
			</div>
			<div class="user__info--role student">
				<img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
				<p>${this.role}</p>
			</div>
		</div> 
		${this.courses?.length >= 0 && this.renderCourse()};
	</div>
		`;
  }

  renderCourse() {
    return `
		<div class="user__courses">
		${this.courses.map(
      (el) => `<p class="user__courses--course student">${
        el.title
      }<span class="${getGradation(el.mark)}">${getGradation(
        el.mark
      )}</span></p>
		`
    )}        
        </div>
		
		`;
  }
}

class Student extends User {}

class Lector extends User {
  renderCourse() {
    return `
		<div class="user__courses admin--info">
		${this.courses
      .map(
        (el) => ` 
		<div class="user__courses--course lector"><p>Title: <b>${el.title}</b></p>
			<p>Lector's score: <span class="${getGradation(el.score)}">${getGradation(
          el.score
        )}</span></p>
			<p>Average student's score: <span class="${getGradation(
        el.score
      )}">${getGradation(el.score)}</span></p>
		</div>`
      )
      .toString()}
		</div>`;
  }
}

class Admin extends User {
  renderCourse() {
    return `
		<div class="user__courses admin--info">
		${this.courses.map(
      (el) => ` 
		<div class="user__courses--course admin">
		<p>Title: <b>${el.title}</b></p>
		<p>Admin's score: <span class="${getGradation(el.score)}">${getGradation(
        el.score
      )}</span></p>
		<p>Lector: <b>${el.lector}</b></p>
		</div> `
    )}
		</div>`;
  }
}

const student = new Student(users[0]);

const ROLES_MAP = {
  lector: function (user) {
    return new Lector(user);
  },
  admin: (user) => new Admin(user),
  student: (user) => new Student(user),
  default: (user) => new User(user),
};

const result = users.map(
  (item) => ROLES_MAP[item.role](item) ?? new User(item)
);

const rendered = result.map((el) => el.render()).toString();

document.write(`<div class="users">${rendered}</div>`);
