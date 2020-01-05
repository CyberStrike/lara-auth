import axios from 'axios'

/**
 * Wrapper for axios.
 * @param {string} action   - Action for axios
 * @param {string} resource - Endpoint to use
 * @param {(* | null)} [payload = null] - Data to post
 * @param {(* | null)} [config = null] - Config Axios
 */

export default async function transmit (action, resource, payload = null, config = null) {
  const response = await axios[action](resource, payload, config)
  return response.data
}
