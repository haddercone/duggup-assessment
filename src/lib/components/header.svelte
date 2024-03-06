<script lang="ts">
  import { cn } from "$lib/utils";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import Button from "./ui/button/button.svelte";

  const clipName = (name) => {
    return name.length >= 15 ? name.slice(0,15) + "..." : name;
  }
  
  const name = clipName("Krishna Kiran")
</script>

<header class="flex justify-between items-center border-b py-4">
    <div>
        <a class="flex gap-2" href="/">
            <img src="./hero-icon.png" alt="hero-icon" class="w-9 h-9">
            <img src="./title.svg" alt="hero-icon" class="hidden lg:block">
        </a>
    </div>
    <div class="md:flex gap-8 items-center hidden ">
        <ul class="flex gap-4 items-center">
            <li >
                <a href="/" class="flex gap-2 lg:mx-2">
                    <img src="./home.svg" alt="home">
                Home
                </a>
            </li>
            <li >
                <a href="/" class="flex gap-2 lg:mx-2">
                    <img src="./explore.svg" alt="home">
                    Explore
                </a>
            </li>
            <li >
                <a href="/" class="flex gap-2 lg:mx-2">
                    <img src="./learn.svg" alt="home">
                    Learn
                </a>
            </li>
        </ul>
        <Button variant="dug" size="dug" class={cn("gap-2 group")}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4.33333V9.66667M4.33333 7H9.66667M4.2 13H9.8C10.9201 13 11.4802 13 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C13 11.4802 13 10.9201 13 9.8V4.2C13 3.0799 13 2.51984 12.782 2.09202C12.5903 1.71569 12.2843 1.40973 11.908 1.21799C11.4802 1 10.9201 1 9.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.0799 13 4.2 13Z" stroke="#4D4D4D" class="group-hover:stroke-white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            <span class="group-hover:text-red-50 font-normal">Post</span>
        </Button>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <div class="flex gap-4 items-center">
                    <img src="./profile.jpeg" class="w-[46px] h-[46px] rounded-full border-[0.5px] border-[#4D4D4D]" alt="user">
                    <span class="font-[500] text-[20px] text-[#4D4D4D] lg:block max-w-60 text-nowrap">{name}</span>
                    <img src="./arrow-head-down.svg" alt="" srcset="">
                </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content class="w-52 rounded-none">
                <DropdownMenu.Group>
                    <DropdownMenu.Item>Explore</DropdownMenu.Item>
                    <DropdownMenu.Item class="font-bold">Settings</DropdownMenu.Item>
                </DropdownMenu.Group>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
        
    </div>
    <div class="md:hidden flex items-center gap-4">
        <Button variant="dug" size="dug" class={cn("gap-2 w-full flex group")}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4.33333V9.66667M4.33333 7H9.66667M4.2 13H9.8C10.9201 13 11.4802 13 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C13 11.4802 13 10.9201 13 9.8V4.2C13 3.0799 13 2.51984 12.782 2.09202C12.5903 1.71569 12.2843 1.40973 11.908 1.21799C11.4802 1 10.9201 1 9.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.0799 13 4.2 13Z" stroke="#4D4D4D" class="group-hover:stroke-white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            <span class="group-hover:text-red-50 font-normal">Post</span>
        </Button>

        <DropdownMenu.Root>
            <DropdownMenu.Trigger class="mr-2">
                <img src="./profile.jpeg" class="min-w-[46px] min-h-min h-[46px] rounded-full border-[0.5px] border-[#4D4D4D]" alt="user">
                <!-- <img src="./arrow-head-down.svg" alt="" srcset=""> -->
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-1/2 rounded-none">
            <DropdownMenu.Group>
            <DropdownMenu.Label>{name}</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
                Home
            </DropdownMenu.Item>
            <DropdownMenu.Item>Explore</DropdownMenu.Item>
            <DropdownMenu.Item>Learn</DropdownMenu.Item>
            <DropdownMenu.Item class="font-bold">Settings</DropdownMenu.Item>
            </DropdownMenu.Group>
        </DropdownMenu.Content>
        </DropdownMenu.Root>
    </div>
</header>