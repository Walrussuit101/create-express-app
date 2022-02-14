import { name as projectName } from './package.json';
import {Endpoint} from "express-list-endpoints";

const rootDisplay = (endpoints: Endpoint[]): string => {

    endpoints = endpoints.sort((a, b) => {
        return a.path.localeCompare(b.path);
    })

    const html = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${projectName} | Routes</title>
            </head>
            <body style="color: #e3e3e3; background-color: #232729;">
                ${
                    endpoints.map((endpoint) => {
                        return `
                            <h2 style="margin-bottom: 0;">${endpoint.path}</h2>
                            <small><p style="margin-top: 0;">[${endpoint.methods.join('] [')}]</p></small>
                        `
                    }).join('')
                }
            </body>
        </html>
    `;

    return html;
} 

export default rootDisplay;