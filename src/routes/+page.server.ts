import { VESSEL_DATA } from "$lib/vessel-data";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    post: await new Promise((resolve, reject) => {
                resolve(VESSEL_DATA);
            })
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
		})
		.catch((err) => console.error(err))
  };
}
