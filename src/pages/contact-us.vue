<page>
    title: Contact Us
</page>
<template>
  <section class="pb-12">
    <div
      class="py-12 bg-primary-600 dark:bg-primary-200 text-white dark:text-primary-800"
    >
      <div
        class="container flex justify-center mx-auto px-4 relative"
        role="surface"
      >
        <div container class="py-12 w-4/5">
          <div class="flex flex-col rounded-lg">
            <div class="mx-auto text-center">
              <h2>Contact sales</h2>
              <p class="mt-2 text-lg leading-8">
                Aute magna irure deserunt veniam aliqua magna enim voluptate.
              </p>
            </div>
            <form action="#" method="POST" class="mt-16 mx-auto sm:mt-20">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    for="first-name"
                    class="block text-sm font-semibold leading-6"
                    >First name</label
                  >
                  <div class="mt-2.5">
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-container-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="last-name"
                    class="block text-sm font-semibold leading-6"
                    >Last name</label
                  >
                  <div class="mt-2.5">
                    <input
                      id="last-name"
                      type="text"
                      name="last-name"
                      autocomplete="family-name"
                      class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-container-600 placeholder:text-neutral-400 px-3.5 py-2 ring-1 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm w-full"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="company"
                    class="block text-sm font-semibold leading-6"
                    >Company</label
                  >
                  <div class="mt-2.5">
                    <input
                      id="company"
                      type="text"
                      name="company"
                      autocomplete="organization"
                      class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-container-600 placeholder:text-neutral-400 px-3.5 py-2 ring-1 ring-inset rounded-md shadow-sm w-full sm:leading-6 sm:text-sm"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-semibold leading-6"
                    >Email</label
                  >
                  <div class="mt-2.5">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autocomplete="email"
                      class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-container-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="phone-number"
                    class="block text-sm font-semibold leading-6"
                    >Phone number</label
                  >
                  <div class="relative mt-2.5">
                    <div class="absolute inset-y-0 left-0 flex items-center">
                      <label for="country" class="sr-only">Country</label>
                      <select
                        id="country"
                        name="country"
                        class="bg-none bg-transparent border-0 focus:ring-2 focus:ring-inset focus:ring-primary-container-600 h-full pl-4 pr-9 py-0 rounded-md sm:text-sm"
                      >
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                      <svg
                        class="absolute h-full pointer-events-none right-3 top-0 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="phone-number"
                      type="tel"
                      name="phone-number"
                      autocomplete="tel"
                      class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 shadow-sm ring-1 ring-inset placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-container-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-sm font-semibold leading-6"
                    >Message</label
                  >
                  <div class="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-container-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
                <div class="flex gap-x-4 sm:col-span-2">
                  <div class="flex h-6 items-center">
                    <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                    <button
                      type="button"
                      class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                      role="switch"
                      aria-checked="false"
                      aria-labelledby="switch-1-label"
                    >
                      <span class="sr-only">Agree to policies</span>
                      <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" -->
                      <span
                        aria-hidden="true"
                        class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                      ></span>
                    </button>
                  </div>
                  <label id="switch-1-label" class="text-sm leading-6">
                    By selecting this, you agree to our<a
                      href="#"
                      class="font-semibold ml-1"
                      >privacy&nbsp;policy</a
                    >.
                  </label>
                </div>
              </div>
              <div class="mt-10">
                <BaseButton
                  type="submit"
                  class="block w-full rounded-md"
                  variant="soft"
                  >Let's talk</BaseButton
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
