<script lang="ts">
import { VESSEL_DATA } from '$lib/vessel-data';
import Header from './Header.svelte';
import Card from './Card.svelte';

console.log(VESSEL_DATA);
</script>



{#each VESSEL_DATA as vessel}
  <Card vessel={vessel}></Card>
{/each}

