import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default {
    async signin(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signin'
        });
    },
    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        });
    },
    async auth(context, payload) {
        const mode = payload.mode;
        const baseURL = process.env.VUE_APP_API_URL;

        try {
            let response;
            if (mode === 'signup') {
                const url = `${baseURL}/auth/signup`;

                response = await axios.post(url, {
                    username: String(payload.username),
                    password: String(payload.password),
                    invitationCode: String(payload.invitecode)
                });

            } else {
                const url = `${baseURL}/auth/signin`;

                response = await axios.post(url, {
                    username: String(payload.username),
                    password: String(payload.password),
                });
            }
            const accessToken = response.data.accessToken;

            localStorage.setItem('token', accessToken)
            context.commit('setToken', {
                token: accessToken
            })

            var decoded = jwt_decode(accessToken);
            const currentTime = new Date();
            const expirationTime = new Date(decoded.exp * 1000)
            var msLeftToLogout = (expirationTime - currentTime);

            context.dispatch('setAutoLogOutTimeout', msLeftToLogout)
        } catch (error) {
            if (error.request.response.includes('Invalid Invitation Code')) {
                const error = new Error('Invalid Invitation Code');
                throw error;
            }
            if (error.request.response.includes('Invalid credentials')) {
                const error = new Error('Invalid credentials');
                throw error;
            }

            throw new Error('Unkown Error, sry');
        }
    },
    async tryLogin(context) {
        const token = localStorage.getItem('token');
        if (!token)
            return;
        var decoded = jwt_decode(token);
        const currentTime = new Date();
        const expirationTime = new Date(decoded.exp * 1000)
        var msLeftToLogout = (expirationTime - currentTime);

        if (msLeftToLogout < 0)
            context.dispatch('logout')

        context.dispatch('setAutoLogOutTimeout', msLeftToLogout)

        context.commit('setToken', {
            token: token
        })
        context.commit('setUser', {
            username: decoded.username,
            permissions: decoded.permissions
        })
    },
    async setAutoLogOutTimeout(context, ms) {
        setTimeout(() => {
            context.dispatch('logout')
        }, ms)
    },
    async logout(context) {
        context.commit('setToken', {
            token: null
        })
        context.commit('setUser', {
            username: null,
            permissions: null
        })

        localStorage.clear();
        return;
    }
};
