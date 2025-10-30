import { brands } from "../../fixtures/brands";
import { productList } from '../../fixtures/items'

/**
 * Returns an object containing the URL that includes the given substring for a specific environment type.
 * @param {string} envType - The environment type (e.g., "production", "staging", "dev").
 * @param {string} urlName - Substring to search for in the URLs.
 * @returns {{ url: string | undefined }} - Object with a 'url' property containing the matched URL, or undefined if not found.
 */
export const urlHook = (envType, urlName) => {
    // Get the array of brand objects for the specified environment type
    const environmentSetUp = brands.environments[envType];
    // If the environment type does not exist or urlSubstring is not provided, return empty object
    if (!environmentSetUp || !urlName) { 
         throw new Error(`Environment details ${envType},${urlName} are not configuare`);}

    // Find the brand object whose URL includes the substring
    const url = environmentSetUp.find(b => b.url.includes(urlName))?.url;

    if(!url){
        throw new Error (`url: ${url} is not cofiguare`)
    }
   
    // Return the matched URL in an object for use in tests
    return { url };
};