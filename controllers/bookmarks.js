import { Bookmark } from '../models/bookmark.js'

const create = async (req, res) => {
  try{
    const bookmark = await Bookmark.create(req.body)
    res.status(201).json(bookmark)
  } catch (error) {
    res.status(500).json(error)
  }
}


export {
  create
}