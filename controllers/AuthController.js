const { response, request } = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = class AuthController {
    static login(req, res){
        return res.render('auth/login');
    }

    static async loginPost(req, res){
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ where: { email: email } });
            if (!user) {
                req.flash("message", "Usuário não encontrado");
                return res.render('home');
            }

            const passwordMatch = bcrypt.compareSync(password, user.password);
            if (!passwordMatch) {
                req.flash("message", "Senha Inválida");
                return res.render('home');
            }

            req.session.userId = user.id;

            req.flash("message", "Autenticação realizada com sucesso!");
            
        } catch (error) {
            console.log(error);
            req.flash("message", "Erro ao autenticar usuário");
            return res.render('home');
        }
    }

    static register(req, res){
        return res.render('auth/register');
    }

    static async registerPost(req, res){
        const { name, email, password, passwordconfirm } = req.body;
       
        if (password !== passwordconfirm) {
            req.flash("message", "As senhas não conferem, tente novamente");
            return res.render('home');
        }

        try {
            const checkIfUserExists = await User.findOne({ where: { email: email } });
            if (checkIfUserExists) {
                req.flash("message", "O Email já está cadastrado");
                return res.render('home');
            }
        
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);

            await User.create({ name, email, password: hashedPassword });
            req.flash("message", "Cadastro realizado com sucesso");
            return res.redirect('/');
        } catch (error) {
            console.log(error);
            req.flash("message", "Erro ao cadastrar usuário");
            return res.render('home');
        }
    }
};
