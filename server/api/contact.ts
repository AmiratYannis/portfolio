import { defineEventHandler, readBody } from 'h3';
import { useRuntimeConfig } from '#imports';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export default defineEventHandler(async (event) => {

    setResponseHeaders(event, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    });

    if (event.method === 'OPTIONS') {
        return { status: 200, message: "CORS Preflight Success" };
    }

    const body = await readBody(event);
    const { name, email, message } = body;

    if (!email || !message) {
        return { status: 400, error: "Email and message are required." };
    }

    // Load credentials securely
    const config = useRuntimeConfig();

    const oAuth2Client = new google.auth.OAuth2(
        config.OAUTH_CLIENT_ID,
        config.OAUTH_CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );

    oAuth2Client.setCredentials({
        refresh_token: config.OAUTH_REFRESH_TOKEN
    });

    try {
        // Get access token
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: config.MAIL_USER,
                clientId: config.OAUTH_CLIENT_ID,
                clientSecret: config.OAUTH_CLIENT_SECRET,
                refreshToken: config.OAUTH_REFRESH_TOKEN,
                accessToken: accessToken.token!,
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        await transporter.sendMail({
            from: `${name} <${email}>`,
            to: config.MAIL_USER,
            subject: `New Message from ${name}`,
            text: `Message from:  ${name} (${email}) \n\n ${message}`,
            replyTo: email,
        });

        return { status: 200, message: "Email sent successfully!" };
    } catch (error) {
        return { status: 500, error: error.message };
    }
});