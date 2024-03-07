<script lang="ts">
    import type { DesignationMockData } from "$lib/mockData";
    export let employmentData : DesignationMockData ;
</script>

<section class="flex my-1 md:flex-row flex-col  md:gap-10">
    <div class="flex md:flex-col  items-center gap-4 md:items-end md:w-1/2 lg:w-[12%] mx-4 md:mx-0 lg:justify-center">
        <div class="md:flex justify-center flex-col items-end">
            <img class="w-12 h-12 rounded-full min-w-min" src={employmentData.orgProfile} alt="">
            <p class="font-[700] text-[17px] ">{employmentData.org}</p>
        </div>
        <div class="md:text-right font-[400] text-[12px] text-[#7A9299]">
            <p>{employmentData.orgLocation}</p>
            <p>Joined</p>
            <p>{employmentData.yearJoined}</p>
        </div>
    </div>

    <div class="hidden lg:block">
        <p class="border-transparent border-dotted border-r-4 border-r-[#778FB1] h-full relative">
            <img src="./arrow-head-up.svg" alt="arrow-up" class="translate-x-[8px] bg-white" srcset="">
            <span class="w-[27px] bg-white absolute h-[28px] top-1/3 min-w-min rounded-full border-[9px] border-[#0066FF]"></span>
        </p>
    </div>

    <div class="flex items-center w-full">
        <div class="px-4 py-5 rounded-[13px] bg-white shadow-[0px_1px_2px_0px_#DBE5F540] w-full lg:w-1/2">
            <p class="font-[700] text-[20px]">{employmentData.designation}</p>
        <p class="text-[12px] font-[400] text-[#7A9299]">
            <span>{employmentData.employmentType}</span> 
            <span>{!!employmentData?.employmentLocation ? "·" + " " + employmentData?.employmentLocation : ""}</span>
        </p>
        </div>
    </div>
</section>

<style lang="postcss">
</style>