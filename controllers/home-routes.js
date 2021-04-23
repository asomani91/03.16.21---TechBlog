const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    // const postData = await Post.findAll({
    //   include: [User],
    // });

    // const posts = postData.map((post) => post.get({ plain: true }));
    const posts = [
      {
        id: "djaj231k",
        title: "My new blog post",
        format_date: new Date(),
        createdAt: new Date(),
      },
      {
        id: "djaj2dsad31k",
        title: "My favorite foods",
        format_date: new Date(),
        createdAt: new Date(),
      },
      {
        id: "djaj231k",
        title: "How to code for beginners",
        format_date: new Date(),
        createdAt: new Date(),
      },
      {
        id: "djaj231k",
        title: "My new blog post",
        format_date: new Date(),
        createdAt: new Date(),
      },
      {
        id: "djaj231k",
        title: "My new blog post",
        format_date: new Date(),
        createdAt: new Date(),
      },
    ];
    res.render("all-posts", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get("/post/:id", async (req, res) => {
  try {
    // const postData = await Post
    //   .findByPk
    //   // TODO: YOUR CODE HERE
    //   ();

    const postData = {
      title: "example post",
    };

    if (postData) {
      // come back and connect with db
      // const post = postData.get({ plain: true });
      post = {
        User: { username: "Jim Browning" },
        createdAt: new Date(),
        title: "How I learned programming",
        body: `Lorem Ipsum is simply dummy text 
        of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
         but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
         Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        Comments: [
          {
            body: "Wow! That was a pretty good article",
            createdAt: new Date(),
            User: { username: "Blogman88" },
          },
          {
            body: "Wow! That was a pretty good article",
            createdAt: new Date(),
            User: { username: "Blogman98" },
          },
          {
            body: "Meh! It was alright",
            createdAt: new Date(),
            User: { username: "Blogman18" },
          },
          {
            body: "Nah! it sucked",
            createdAt: new Date(),
            User: { username: "Blogman88" },
          },
        ],
      };
      res.render("single-post", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // let loggedIn = true
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    res.render("login");
  } catch (error) {
    res.render("login");
  }
});

router.get("/signup", (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  } catch {
    res.render("signup");
  }
});

module.exports = router;
