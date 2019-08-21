//==================const==============================
const URLposts = "http://localhost:3000/posts"
const URLusers = "http://localhost:3000/users"
const URLcomments = "http://localhost:3000/comments"

const UL = document.querySelector("#list")
const divPanel = document.querySelector("#list-panel")
let postLI = document.createElement("postLI")

//==================fetch==============================
//---------fetch for GET-------------------------------
// fetch(URLposts)//`${userIdforPost}`)
// .then(response => response.json())
// .then(slapPostsToTheDOM)
//---------end of fetch for GET------------------------

//----------fetch for User-----------------------------
// function getUsers() {
fetch(URLusers)
.then(response => response.json())
.then(slapUsersToTheDOM)

//----------fetch for Comment-----------------------------
// function getUsers() {
// fetch(URLcomments)
// .then(response => response.json())
// .then(slapCommentsToTheDOM)


//----------end of fetch for User----------------------
//---------fetch for POST------------------------------

function createNewPost(newPost, newImgURL) {
      fetch(URLposts), {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          title: newPost,
          img_url: newImgURL
        })
        .then(response => response.json())
        .then(console.log("Hiii"))
      }
}
// I don't need any CRUD for Post
//questions: how do I define newPost and newImgURL?
// I created a form, and not seeing it on the page. How do I get that onto the page?

//-----------new post form--------------------------------
function createnewpostform(user_id) {
  // console.log(userId)
  // let form =document.createElement("form")
      let form = document.createElement("form")
      form.className = "new-post-form"
      form.userid = `${user_id}`
      form.innerHTML = `
      <input name="post" type="text" class="new-post" id="postinput" >
      <input name="img_url" type="text" class="img_url" id="img_urlinput" >
      <button type="submit" class="btn btn-primary">Submit</button>
      `
      append(form);
    }
//---------end of fetch for POST------------------------
//====================slap==============================
//---------slap for GET users---------------------------------
function slapUsersToTheDOM(users) {
  console.log("Moo2")
    users.forEach(user => {
      let userLI = document.createElement("userLI")
      userLI.innerHTML =`
      <p> Username: ${user.name} of ${user.breed} </p>
      <button type="submit" class="btn btn-primary">Create New Post</button>`
      // createnewpost(user.id)
      UL.append(userLI)



      user.posts.forEach(post => {
        let postLI = document.createElement("postLI")
        console.log(postLI)
        postLI.innerHTML +=`
        <p> Me az tha ${post.title} </p>
        <img src= "${post.img_url}"></img>`
          userLI.append(postLI)
      // slapPostsToTheDOM(user.posts)
      })
    })
  }

// function slapPostsToTheDOM(posts) {
//
//       posts.forEach(post => {
//
//         let postLI = document.createElement("postLI")
//         console.log(postLI)
//         postLI.innerHTML += `
//           <p> Me az tha ${post.title} </p>
//           <img src= "${post.img_url}"></img>`
//           userLI.append(postLI)
//         // userLI.append(postLI)
//         console.log("Moo1")
//       })
//     }

function slapCommentsToTheDOM(comments) {
  comments.forEach(comment => {
    console.log("Test1")
  })

}
    // postLI.innerHTML = `
    //   <p> Me az tha ${post.title} </p>
    //   <img src= "${post.img_url}"></img>`
    //Question: how do I add the post to each user?
    //I need to put postLI inside of the userLI
//---------end of slap for GET users--------------------------





//-----------------addEventListener!---------
//-----------------inventory of what I need to create!!
// Add event listener to the User;s Create New Post button so that once it's clicked, a form with new post will show
//   CRUD for 2 models
//   I have 3 models: User, Post and Comment
//   So, I do CRUD for User and Comment. I don't really touch the POST, except for rendering it on the page
// User: Create, Read and Update; Comment: Create, Read and Delete.
//   The backend and frontend must collaborate to demonstrate Read, Create, and either Update or Delete for at least two of your models. The results of each action should be diplayed to the user without a page refresh.
