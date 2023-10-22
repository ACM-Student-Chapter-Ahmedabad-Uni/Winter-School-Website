/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import './global.css'
import React from "react";
import { AppProviders } from "./src/components/app-providers";

export const wrapRootElement = ({ element }) => (
    <AppProviders>{element}</AppProviders>
);