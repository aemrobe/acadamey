const searchInput = document.querySelector(".search-item__input");
const menuBar = document.querySelector(".menubar");
const navBar = document.querySelector(".left");
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
/*### manage post ###*/
const managePost = document.querySelector(".manage-post");
const editBtnManagePost = document.querySelector(".edit-post--manage-post");
const deleteBtnManagePost = document.querySelector(".delete-post--manage-post");
/*edit post informations*/
const editPostTitle = document.querySelector(".edit-post-title");
const editPostCatagory = document.querySelector(".edit-post-catagory");
const editPostDetail = document.querySelector(".edit-post-description");
const editPostImage = document.querySelector(".edit-post-image");

/*### edit Registered Coaches ###*/
const coachProfileSection = document.querySelector(".coach-profile");
const editCoachInfoBtn = document.querySelectorAll(".edit-coach-info");
const deleteCoachInfoBtn = document.querySelectorAll(".delete-coach-info");

/* edit coach information*/
const editCoachName = document.querySelector(".edit-coach-name");
const editCoachUsername = document.querySelector(".edit-coach-username");
const editCoachImage = document.querySelector("edit-coach-image");
const editCoachClub = document.querySelector(".edit-coach-club");
const editCoachPassword = document.querySelector(".edit-coach-password");
const editfieldOfTheCoach = document.querySelector(".edit-coach-position");
const editYearOfExperience = document.querySelector(".edit-year-of-experience");
const editCoachAccomplishment = document.querySelector(
  ".edit-coach-accomplishment"
);
const editCoachQuote = document.querySelector(".edit-coach-quote");

/*### edit club members ###*/
/*edit athletics club*/
const athleticsClub = document.querySelector(".athletics-club");
const editAthleticsClubButton = document.querySelectorAll(
  ".edit-athletics-information"
);
const deleteAthleticsButton = document.querySelector(
  ".delete-athletics-information"
);

console.log(editAthleticsClubButton[0]);

editAthleticsClubButton.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log("clicked");

    const newElement = document.createElement("div");

    newElement.setAttribute("class", "edit-members-of-the-club");

    newElement.innerHTML = `
       <h4 class="margin-bottom-1"> Edit Athletics Members </h4>

      <form action="#" class="form" id="form">
        <div class="form-control">
          <label for="firstname">First Name</label>

          <input type="text" placeholder="Enter your username" id="firstname" />

        </div>

        <div class="form-control">
          <label for="lastname">Last Name</label>

          <input type="text" placeholder="Enter your username" id="lastname" />

        </div>

        <div class="form-control">
          <label for="age">age</label>

          <input type="text" placeholder="Enter your age" id="age" />

        </div>

        <div class="form-control">
          <label for="image">image</label>

         <img src="./image/wollo logo.jpg" alt="image of the coach" class="card-img edit-member-image">
       </div>

        <div class="form-control">
          <label for="id">ID</label>

          <input type="text" placeholder="Enter your ID" id="id" />

        </div>

        <div class="form-control">
          <label for="phone" class=""
            >Phone Number</label
          >

          <input type="text" placeholder="Enter your username" id="phone" />

        </div>

        <div class="form-control">
          <label for="username">Username</label>

          <input type="text" placeholder="Enter your username" id="username" />

        </div>

        <div class="form-control">
          <label for="email">Email</label>

          <input type="email" placeholder="Enter your email" id="email" />

        </div>

        <div class="form-control display-flex">
          <label for="club">Club</label>

          <select name="club" class="style-for-input" id="club">
            <option value="choose-club">choose club</option>

            <option value="athletics">athletics</option>

            <option value="athletics">football</option>

            <option value="athletics">gym</option>
          </select>

        </div>

        <div class="form-control">
          <label for="pass">Password</label>

          <input type="password" placeholder="Enter your password" id="pass" />

        </div>

        <div class="form-control">
          <label for="newpass">Check Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            id="newpass"
          />

        </div>

        <button type="submit">Submit</button>
      </form>`;

    athleticsClub.insertAdjacentElement("beforeEnd", newElement);
  });
});

//edit football club
const footballClub = document.querySelector(".football-club");
const editFootballClubButton = document.querySelectorAll(".edit-football-club");
const deleteFootballClubButton = document.querySelectorAll(
  ".delete-football-club"
);

editFootballClubButton.forEach(function (button) {
  button.addEventListener("click", function () {
    const newElement = document.createElement("div");

    newElement.setAttribute("class", "edit-members-of-the-club");

    newElement.innerHTML = `
        <h4 class="margin-bottom-1"> Edit football Members </h4>

      <form action="#" class="form" id="form">
        <div class="form-control">
          <label for="firstname">First Name</label>

          <input type="text" placeholder="Enter your username" id="firstname" />

        </div>

        <div class="form-control">
          <label for="lastname">Last Name</label>

          <input type="text" placeholder="Enter your username" id="lastname" />

        </div>

        <div class="form-control">
          <label for="age">age</label>

          <input type="text" placeholder="Enter your age" id="age" />

        </div>

        <div class="form-control">
          <label for="image">image</label>

         <img src="./image/wollo logo.jpg" alt="image of the coach" class="card-img edit-member-image">
       </div>

        <div class="form-control">
          <label for="id">ID</label>

          <input type="text" placeholder="Enter your ID" id="id" />

        </div>

        <div class="form-control">
          <label for="phone" class=""
            >Phone Number</label
          >

          <input type="text" placeholder="Enter your username" id="phone" />

        </div>

        <div class="form-control">
          <label for="username">Username</label>

          <input type="text" placeholder="Enter your username" id="username" />

        </div>

        <div class="form-control">
          <label for="email">Email</label>

          <input type="email" placeholder="Enter your email" id="email" />

        </div>

        <div class="form-control display-flex">
          <label for="club">Club</label>

          <select name="club" class="style-for-input" id="club">
            <option value="choose-club">choose club</option>

            <option value="athletics">athletics</option>

            <option value="athletics">football</option>

            <option value="athletics">gym</option>
          </select>

        </div>

        <div class="form-control">
          <label for="pass">Password</label>

          <input type="password" placeholder="Enter your password" id="pass" />

        </div>

        <div class="form-control">
          <label for="newpass">Check Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            id="newpass"
          />

        </div>

        <button type="submit">Submit</button>
      </form>`;

    footballClub.insertAdjacentElement("beforeEnd", newElement);
  });
});

//edit gym club
const gymClub = document.querySelector(".gym-club");
const editGymClubButton = document.querySelectorAll(".edit-gym-club");
const deleteGymClubButton = document.querySelectorAll(".delete-gym-club");

editGymClubButton.forEach(function (button) {
  button.addEventListener("click", function () {
    const newElement = document.createElement("div");

    newElement.setAttribute("class", "edit-members-of-the-club");

    newElement.innerHTML = `
    <h4 class="margin-bottom-1"> Edit Gym Members </h4>

      <form action="#" class="form" id="form">
        <div class="form-control">
          <label for="firstname">First Name</label>

          <input type="text" placeholder="Enter your username" id="firstname" />

        </div>

        <div class="form-control">
          <label for="lastname">Last Name</label>

          <input type="text" placeholder="Enter your username" id="lastname" />

        </div>

        <div class="form-control">
          <label for="age">age</label>

          <input type="text" placeholder="Enter your age" id="age" />

        </div>

        <div class="form-control">
          <label for="image">image</label>

         <img src="./image/wollo logo.jpg" alt="image of the coach" class="card-img edit-member-image">
       </div>

        <div class="form-control">
          <label for="id">ID</label>

          <input type="text" placeholder="Enter your ID" id="id" />

        </div>

        <div class="form-control">
          <label for="phone" class=""
            >Phone Number</label
          >

          <input type="text" placeholder="Enter your username" id="phone" />

        </div>

        <div class="form-control">
          <label for="username">Username</label>

          <input type="text" placeholder="Enter your username" id="username" />

        </div>

        <div class="form-control">
          <label for="email">Email</label>

          <input type="email" placeholder="Enter your email" id="email" />

        </div>

        <div class="form-control display-flex">
          <label for="club">Club</label>

          <select name="club" class="style-for-input" id="club">
            <option value="choose-club">choose club</option>

            <option value="athletics">athletics</option>

            <option value="athletics">football</option>

            <option value="athletics">gym</option>
          </select>

        </div>

        <div class="form-control">
          <label for="pass">Password</label>

          <input type="password" placeholder="Enter your password" id="pass" />

        </div>

        <div class="form-control">
          <label for="newpass">Check Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            id="newpass"
          />

        </div>

        <button type="submit">Submit</button>
      </form>`;

    gymClub.insertAdjacentElement("beforeEnd", newElement);
  });
});

//close navbar
const closeNavbar = function () {
  navBar.classList.add("navbar-responsive");
  wrapper.classList.add("wrapper-responsive");
  header.classList.add("header-responsive");
  main.classList.add("main-responsive");
  footer.classList.add("footer-responsive");
};

const showNavbar = function () {
  navBar.classList.remove("navbar-responsive");
  wrapper.classList.remove("wrapper-responsive");
  header.classList.remove("header-responsive");
  main.classList.remove("main-responsive");
  footer.classList.remove("footer-responsive");
};

searchInput.addEventListener("click", function (e) {
  e.target.parentElement.classList.add("clicked");
});

closeNavbar();

menuBar.addEventListener("click", function () {
  if (navBar.classList.contains("navbar-responsive")) {
    showNavbar();
  } else {
    closeNavbar();
  }
});

//managePost editbtn

editBtnManagePost.addEventListener("click", function () {
  console.log("clicked");

  const html = `
    <!--edit post-->
          <div class="add-post margin-top-1">
           <h4 class="add-post__title">Edit Post</h4>

           <form action="#" class="post-form">
              <!--edit post section-->
              <div class="form-control">
                <!-- edit post title-->
                <label class="form-control__label" for="post-title"
                  >post title</label
                >

                <input
                  type="text"
                  name="post title"
                  id="post-title"
                  class="edit-post-title"
                  placeholder="Enter title"
                />
              </div>

              <!--edit catagory section-->
              <div class="form-control">
                <!--catagory-->
                <label class="form-control__label" for="catagory">
                  catagory
                </label>

                <!--select catagory for the post-->
                <select name="post-catagory" id="catagory" class="edit-post-catagory">
                  <option value="athletics">athletics</option>

                  <option value="football">football</option>

                  <option value="gym">gym</option>
                </select>
              </div>

              <!--edit post detail-->
              <div class="form-control post-detail">
                <h4 class="post-detail__title">post details</h4>

                <textarea
                  name="post-detail-text"
                  id="post-detail-text"
                  class="edit-post-description"
                  cols="30"
                  rows="10"
                  placeholder="Enter post detail"
                ></textarea>
              </div>

              <!--edit featured image-->
              <div class="form-control featured-image">
                <h4 class="featured-image__title">posted Image</h4>

                <img src="./image/wollo logo.jpg" alt="image of the coach" class="card-img edit-post-image">
              </div>

              <!--save and post button-->
              <button type="submit">Save and Post</button>
            </form>
          </div>
  `;

  managePost.insertAdjacentHTML("beforeEnd", html);
});

//edit coach members
editCoachInfoBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    const newElement = document.createElement("div");
    newElement.innerHTML = `
   <div>
   <!--edit coach information-->
     <h4 class="coach-profile__title margin-top-1">edit a coach profile</h4>

     <form action="#" class="coach-profile__form ">
         <!--edit coach name-->
            <div class="form-control">
              <!--coach name-->
              <label for="coach-name" class="form-control__label"> name</label>

              <input
                type="text"
                class="edit-coach-name"
                id="coach-name"
                name="coach-name"
                placeholder="Add a name of a coach"
              />
            </div>

            <div class="form-control">
              <!--edit coach username-->
              <label for="username" class="form-control__label">
                username</label
              >

              <input
                type="text"
                class="edit-coach-username"
                id="username"
                name="username"
                placeholder="Add a username"
              />
            </div>

            <div class="form-control">
              <!--edit coach image-->
              <label class="form-control__label" for="image"
                >image of the coach</label
              >

              <img   class="edit-coach-image" style="width: 100px; height: 100px" src="./image/wollo logo.jpg" alt="image of the coach" class="card-img">
            
            </div>

            <div class="form-control display-flex">
              <label class="form-control__label" for="club">Club</label>

              <!--edit coach club-->
              <select name="club" class="style-for-input edit-coach-club" id="club">
                <option value="choose-club">choose club</option>

                <option value="athletics">athletics</option>

                <option value="athletics">football</option>

                <option value="athletics">gym</option>
              </select>
            </div>

            <div class="form-control">
              <label for="coach-password" class="form-control__label">
                password</label
              >

              <!--edit coach password-->
              <input
                type="text"
                id="coach-password"
                class="edit-coach-password"
                name="coach-password"
                placeholder="Add a password"
              />
            </div>

            <div class="form-control">
              <!--edit coach position-->
              <label for="coach-field" class="form-control__label"
                >field of the coach</label
              >

              <input
                type="text"
                 class="edit-coach-position"
                id="coach-field"
                name="coach-field"
                placeholder="Add a field of the coach"
              />
            </div>

            <div class="form-control">
              <!--edit coach year of experience-->
              <label class="form-control__label" for="year-of-experience"
                >year-of-experience</label
              >

              <input
                type="text"
                name="year-of-experience"
                 class="edit-year-of-experience"
                id="year-of-experience"
                placeholder="Add a year of experience"
              />
            </div>

            <div class="form-control">
              <!--edit coach Accomplishment-->
              <label class="form-control__label" for="accomplishment"
                >accomplishment</label
              >

              <input
                type="text"
                name="accomplishment"
                 class="edit-coach-accomplishment"
                id="accomplishment"
                placeholder="Add an accomplishment"
              />
            </div>

            <div class="form-control">
              <!--edit coach Quote-->
              <label class="form-control__label" for="quote">Quote</label>

              <input
                type="text"
                name="quote"
                id="quote"
                placeholder="Add a quote"
                 class="edit-coach-quote"
              />
            </div>

            <button type="submit">save and post</button>
          </form>
        </div>
  `;

    coachProfileSection.insertAdjacentElement("beforeEnd", newElement);
  });
});

/*edit club memebers information*/
