const express = require('express');
const { checkUsername, resetAllLimit } = require('../database/db');
const { addPremium, deletePremium, checkPremium, changeKey, resetOneLimit, resetTodayReq } = require('../database/premium');
const { isAuthenticated } = require('../lib/auth');
const { limitCount, tokens } = require('../lib/settings');
const router = express.Router();

router.get('/', isAuthenticated, async (req, res) => {
    let { username } = req.user
    if (username !== 'Ashboo') return res.redirect('/docs')
    res.render('admin/index', {
        layout: 'admin/index'
    })
})

router.get('/add', isAuthenticated, async (req, res) => {
    let { username } = req.user
    if (username !== 'Ashboo') return res.redirect('/docs')
    res.render('admin/add', {
        layout: 'admin/add'
    });
});

router.post('/add', isAuthenticated, async (req, res) => {
    let { username, expired, customKey, token } = req.body;
    if (token != tokens) {
        req.flash('error_msg', 'Invalid Token');
        res.redirect('/admin/add');
    }
    let checking = await checkUsername(username);
    if (!checking) {
        req.flash('error_msg', 'Username is not registered');
        res.redirect('/admin/add');
    } else {
        let checkPrem = await checkPremium(username)
        if (checkPrem) {
            req.flash('error_msg', `'${username}' is alredy Premium before`);
            res.redirect('/admin/add');
        } else {
            addPremium(username, customKey, expired)
            req.flash('success_msg', `Success Added Premium ${username}`);
            res.redirect('/admin');
        }
    }
})

router.get('/delete', isAuthenticated, async (req, res) => {
    let { username } = req.user
    if (username !== 'Ashboo') return res.redirect('/docs')
    res.render('admin/delete', {
        layout: 'admin/delete'
    });
});

router.post('/delete', isAuthenticated, async (req, res) => {
    let { username, token } = req.body;
    if (token != tokens) {
        req.flash('error_msg', 'Invalid Token');
        return res.redirect('/admin/delete');
    }
    let checking = await checkUsername(username);
    if (!checking) {
        req.flash('error_msg', 'Username is not registered');
        res.redirect('/admin/delete');
    } else {
        let checkPrem = await checkPremium(username)
        if (checkPrem) {
            deletePremium(username);
            req.flash('success_msg', `Succes Delete Premium ${username}`);
            res.redirect('/admin');
        } else {
            req.flash('error_msg', 'Username is not Premium');
            res.redirect('/admin/delete');
        }
    };
});

router.get('/custom', isAuthenticated, (req, res) => {
    res.render('admin/custom', {
        layout: 'admin/custom'
    });
})

router.post('/custom', isAuthenticated, async (req, res) => {
    let { customKey } = req.body;
    let { username } = req.user
    let checkPrem = await checkPremium(username);
    if (checkPrem) {
        changeKey(username, customKey)
        req.flash('success_msg', `Succes Custom Apikey ${customKey}`);
        res.redirect('/docs');
    } else {
        req.flash('error_msg', 'Youre not Premium');
        res.redirect('/docs');
    }
})

router.get('/limit', isAuthenticated, async (req, res) => {
    let { username } = req.user
    if (username !== 'Ashboo') return res.redirect('/docs')
    res.render('admin/limit', {
        layout: 'admin/limit'
    });
})

router.post('/limit', isAuthenticated, async (req, res) => {
    let { username, token } = req.body;
    if (token != tokens) {
        req.flash('error_msg', 'Invalid Token');
        return res.redirect('/admin/limit');
    }
    let reset = await checkPremium(username);
    if (!reset) {
        resetOneLimit(username)
        req.flash('success_msg', `Succes Reset Limit Apikey User ${username} to ${limitCount}`);
        res.redirect('/admin');
    } else {
        req.flash('error_msg', 'Cannot Reset Premium Apikey');
        res.redirect('/admin/limit');
    }
})

router.post('/resetall', isAuthenticated, async (req, res) => {
    let { username } = req.user
    if (username !== 'Ashboo') return res.redirect('/docs')
    let { token } = req.body;
    if (token != tokens) {
        req.flash('error_msg', 'Invalid Token');
        return res.redirect('/admin');
    } else {
        resetAllLimit();
        resetTodayReq();
        req.flash('success_msg', `Succes Reset Limit All Apikey`);
        return res.redirect('/admin');
    }
})

module.exports = router;
