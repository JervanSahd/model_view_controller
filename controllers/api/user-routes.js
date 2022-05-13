const router = require('express').Router();
const { Users } = require('../../models');

// create an account
// ### SIGNUP FEATURE:

// - For users not logged in
// - GET: If click sign up user is prompted to create a username and password
// - GET: Log in after sign-up - If click on the sign-up button user credentials are saved and are logged into the site
// - POST: username and password are saved
router.post('/', async (req, res) => {
  try {
    const userData = await Users.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// ### LOGIN FEATURE:

// - For users not logged in
// - GET: When user revisits the site at a later time and choose to sign in they are prompted to enter my username and password
// - SESSION TIME OUT: When user is idle on the site for more than a set time they are able to view comments but are prompted to log in again before they can add, update, or delete comments

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { userName: req.body.userName } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect user name or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect user name or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// ### LOGOUT FEATURE:
// - For users logged in
// - SESSION END: The logout option in the navigation signs out of the site
router.post('/logout', (req,res)=>{
    if (req.session.logged_in){
        req.session.destroy(()=>{
            res.status(204).end();
        });
    } else{
        res.status(404).end();
    }
});


module.exports = router;


