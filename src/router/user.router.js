import express from 'express'
import * as controller from '../controller/user.controller.js'
const router= express.Router()
const userRouter= (app)=>{
    router.get('/',controller.getAllUser)
    router.post('/register', controller.register)
    router.post('/login')
    router.get('/:id',controller.getUserId)
    router.put('/:id',controller.updateUser)
    router.delete('/:id',controller.deleteUser)
    return app.use('/users',router)
}
export default  userRouter