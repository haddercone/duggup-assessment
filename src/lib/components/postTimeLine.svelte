<script lang="ts">
  import type { PostMockData } from "$lib/mockData";
  import Post from "./post.svelte";
  export let postMockData: PostMockData;
</script>

<section class="flex my-1 flex-col md:flex-row gap-10">
  <div class="flex flex-col lg:items-end w-1/2 lg:w-[12%] justify-center">
    <div class="lg:text-right md:font-[400] md:text-[12px] font-bold text-2xl text-[#7A9299]">
      <p class="md:px-0 px-4 md:text-right">{postMockData.postDate}</p>
    </div>
  </div>

  <div class="hidden lg:block">
    <p
      class="border-transparent border-dotted border-r-4 border-r-[#778FB1] h-full relative w-4"
    >
      <span
        class="w-[16px] bg-white absolute h-[16px] top-[45%] translate-x-[6px] min-w-min rounded-full border-[3px] border-[#0066FF]"
      ></span>
    </p>
  </div>

  <div class="flex w-full flex-col md:flex-row px-4 gap-10 my-2">
    <Post Posts={postMockData.posts} />
  </div>
</section>

<style lang="postcss">
</style>
