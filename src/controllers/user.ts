import userModel from '../models/user'

import { Request, Response } from 'express'

const create = (req: Request, res: Response) => {
    const { body } = req

    return userModel.create(body)
        .then(() => res.status(201).send())
        .catch(err => res.status(500).send({ error: err.errmsg }))
}

export = {
    create
}