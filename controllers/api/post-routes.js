const router = require("express").Router();
const { Posts } = require("../../models");
const withAuth = require("../../utils/auth");

// - GET: DASHBOARD ALL POST

// - GET: DASHBOARD ONE POST

// - POST: DASHBOARD ADD POST
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Posts.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// - PUT: DASHBOARD EDIT POST
router.put("/:id", withAuth, async (req, res) => {
  try {
    const [row] = await Posts.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (row > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// - DELETE:  DASHBOARD DELETE POST
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Posts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;


// router.get('/', async (req, res) => {
//     try {
//       // Get all projects and JOIN with user data
//       const projectData = await Project.findAll({
//         include: [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//         ],
//       });

//       // Serialize data so the template can read it
//       const projects = projectData.map((project) => project.get({ plain: true }));

//       // Pass serialized data and session flag into template
//       res.render('homepage', {
//         projects,
//         logged_in: req.session.logged_in
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   router.get('/project/:id', async (req, res) => {
//     try {
//       const projectData = await Project.findByPk(req.params.id, {
//         include: [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//         ],
//       });

//       const project = projectData.get({ plain: true });

//       res.render('project', {
//         ...project,
//         logged_in: req.session.logged_in
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   // Use withAuth middleware to prevent access to route
//   router.get('/profile', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [{ model: Project }],
//       });

//       const user = userData.get({ plain: true });

//       res.render('profile', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
