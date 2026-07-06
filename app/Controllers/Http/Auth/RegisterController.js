'use strict'

const {validateAll } = use('Validator')
const User = use('App/Models/User')

class RegisterController {
    showRegister({view}){
        return view.render('auth.register')
    }

    async register({request, response, auth}){
        const userData = request.only(['name', 'email', 'password'])
        const rules = {
            name: 'required',
            email: 'required|email|unique:users,email',
            password: 'required|min:6'
        }

        const validation = await validateAll(request.all(), rules)

        if(validation.fails()){
            sessionStorage.withErrors(validation.messages().flashExcept(['password']))
            return response.redirect('back')
        }

        const user = await User.create(request.all())
        await auth.login(user)
        return response.route('dashboard')
    }
}


module.exports = RegisterController
