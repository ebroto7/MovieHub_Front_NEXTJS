// app/api/auth/[auth0]/route.js
import { handleAuth, handleLogin} from '@auth0/nextjs-auth0';

// export const GET = handleAuth();

export const GET = handleAuth({
    login: handleLogin({
        authorizationParams: {
            // audience: 'http://localhost:8081', // or AUTH0_AUDIENCE
            audience: process.env.AUTH0_AUDIENCE, // or AUTH0_AUDIENCE
        },
        returnTo: "/home"
    })
});