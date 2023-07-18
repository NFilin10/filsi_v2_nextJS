

import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"  rel="stylesheet"/>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                    crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Bungee+Outline&display=swap"
                              rel="stylesheet"/>
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}