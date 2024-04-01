const router = require("express").Router();
const { Blog, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a blog
router.post("/", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.create({
      ...req.body,
      doctor_id: req.session.user_id,
    });
    res.status(200).json(blogData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

// Update a blog
router.put("/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.update(
      {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        birthday: req.body.birthday,
      },
      {
        where: {
          id: req.params.id,
          doctor_id: req.session.user_id,
        },
      }
    );
    res.status(200).json(blogData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

// Delete a blog
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(blogData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blogData = await blog.findByPk(req.params.id);

    const blog = blogData.get({ plain: true });
    res.render("blog", {
      blog,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
