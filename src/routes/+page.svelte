<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import Designation from "$lib/components/designation.svelte";
  import {designationMockData, postMockData} from "$lib/mockData"
  import { cn } from "$lib/utils";
  import PostTimeLine from "$lib/components/postTimeLine.svelte";

  let followed = true;

  function toggleFollow() {
    followed = !followed;
  }
</script>

<section
  class="lg:mx-auto lg:w-4/5 justify-between my-10 flex flex-col lg:flex-row md:border-none border-b"
>
  <div
    class="flex items-center lg:flex-col gap-4 bg-gray-100 lg:bg-transparent p-2 rounded"
  >
    <img
      src="./profile.jpeg"
      alt="profile"
      class="min-w-min w-[120px] h-[120px] rounded-full"
      srcset=""
    />
    <p class="font-[700] text-[24px] text-center text-[#4B5C6D]">
      Krishna Kiran
    </p>
  </div>
  <div class="lg:w-1/2 w-full flex flex-col gap-4 my-4 lg:my-0 justify-between">
    <p class="font-[400] text-[#141618] mb-4">
      Co-Founder and CEO at Duggup - Social network for people in tech.
      Ex-Amazon Head of Engineering. I write hot-takes on building a business,
      shipping delightful products and accelerating product and career growth.
    </p>
    <div class="lg:mb-2">
      <Button
        on:click={toggleFollow}
        variant={followed ? "active" : "dug"}
        size="dug"
        class={cn("w-full lg:w-auto")}
        >{followed ? "Followed" : "Follow"}</Button
      >
    </div>
  </div>
  <div class="my-2 lg:my-0 flex justify-between lg:flex-col mx-2 lg:mx-0">
    <div class="text-right flex items-start flex-col lg:items-end">
      <img
        src="hero-icon.png"
        alt="hero-icon"
        class="min-w-min w-9 h-9 rounded-full"
      />
      <p class="font-[700] text-[16px]">Duggup</p>
      <p class="font-[400] text-[12px] text-[#7A9299]">Co-Founder and CEO</p>
    </div>
    <div class="flex justify-end gap-4 lg:mb-2 items-center">
      <div>
        <a href="/" class="flex gap-2 items-center">
          <p class="text-[#4D4D4D] text-[400]">My website</p>
          <img src="./link.svg" alt="link" srcset="" />
        </a>
      </div>
      <div class="flex justify-center items-center">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <div class="h-5 flex justify-center items-center">
              <img class="" src="./more-dots.svg" alt="" srcset="" />
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-52 rounded-none">
            <DropdownMenu.Group>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Item class="font-bold">Settings</DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  </div>
</section>

<PostTimeLine postMockData={postMockData[0]} />
<Designation employmentData={designationMockData[0]}/>
<PostTimeLine postMockData={postMockData[1]} />
<Designation employmentData={designationMockData[1]}/>

<style lang="postcss">
</style>
