//==================const==============================
const URLposts = "http://localhost:3000/posts"
const URLusers = "http://localhost:3000/users"

const UL = document.querySelector("#list")
//==================fetch==============================
//---------fetch for GET-------------------------------
fetch(URLposts)
.then(response => response.json())
.then(slapPostsToTheDOM)
//---------end of fetch for GET------------------------

//----------fetch for User-----------------------------
// function getUsers() {
  fetch(URLusers)
  .then(response => response.json())
  .then(slapUsersToTheDOM)

//----------end of fetch for User----------------------
//---------fetch for POST------------------------------
// fetch(URL), {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json'
//     // 'Accept': 'application/json'
//   },
//   body: JSON.stringify({
//     title: newPost,
//     img_url: newImgURL,
//   })
//   .then(response => response.json())
//   .then(console.log("Hiii"))
// } I don't need any CRUD for Post
//questions: how do I define newPost and newImgURL?
// I created a form, and not seeing it on the page. How do I get that onto the page?

//-----------new post form--------------------------------
// function createnewpost(user_id) {
//   // console.log(userId)
//   // let form =document.createElement("form")
//       let form = document.createElement("form")
//       form.className = "new-post-form"
//       form.userid = `${user_id}`
//       form.innerHTML = `
//       <input name="post" type="text" class="new-post" id="postinput" >
//       <input name="img_url" type="text" class="img_url" id="img_urlinput" >
//       <button type="submit" class="btn btn-primary">Submit</button>
//       `
//       postdivform.append(form);
//     }
//---------end of fetch for POST------------------------
//====================slap==============================
//---------slap for GET posts---------------------------------
function slapPostsToTheDOM(posts) {
      posts.forEach(post => {
        let li = document.createElement("li")
        li.innerHTML = `
          <p> Me az tha ${post.title} </p>
          <img src= "${post.img_url}"></img>`
        UL.append(li)
        console.log("Moo1")
      })
    }
//---------end of slep for GET posts--------------------------
//---------slap for GET users---------------------------------
function slapUsersToTheDOM(users) {
  console.log("Moo2")
    users.forEach(user => {
      let li = document.createElement("lil")
      li.innerHTML =
      `<p> ${user.name} of ${user.breed} </p>`
      UL.append(li)
      console.log("Moo3")
  })
}
//---------end of slap for GET users--------------------------





//-----------------addEventListener!---------
//-----------------inventory of what I need to create!!
//   CRUD for 2 models
//   I have 3 models: User, Post and Comment
//   So, I do CRUD for User and Comment. I don't really touch the POST, except for rendering it on the page
// User: Create, Read and Update; Comment: Create, Read and Delete.
//   The backend and frontend must collaborate to demonstrate Read, Create, and either Update or Delete for at least two of your models. The results of each action should be diplayed to the user without a page refresh.
