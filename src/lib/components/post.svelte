<script lang="ts">
  import type { Post } from "$lib/mockData";
  import { clipText } from "$lib";
  export let Posts: Post[];

</script>

{#each Posts as post}
  <a href="/"class="lg:w-1/4 md:w-1/2 w-full">
    <img
      src={post.imageURl}
      class="w-full h-[136px] object-cover object-center rounded-t-[12px]"
      alt=""
    />
    <p
      class=" border-[0.5px] min-h-[90px] border-[#D0D5DD] flex p-5 justify-center items-center rounded-b-[12px]"
    >
      {clipText(post.postHeading, 80)}
    </p>
  </a>
{/each}

<style lang="postcss"></style>
