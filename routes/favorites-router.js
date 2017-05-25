const router = require('express').Router();
const Post = require('../models').Post;

const getFavoritesList = (req, res) => {
  Post.findAll()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
};

const createFavorite = (req, res) => {
  Post.create({
    title: req.body.title,
    author: req.body.author,
    thumbnail: req.body.thumbnail,
    favorite: req.body.favorite,
    url: req.body.url
  })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
};

const deleteFavorite = (req, res) => {
  Post.destroy({
    where: { id: req.params.id }
  })
  .then((data) => {
    res.status(200).send('deleted');
  })
  .catch((err) => {
    res.status(500).send(err);
  });
};

router.route('/')
  .get(getFavoritesList)
  .post(createFavorite);

router.route('/:id')
  .delete(deleteFavorite);

module.exports = router;
