<template>
  <Listbox
    as="div"
  >
    <div class="relative">
      <div class="inline-flex shadow-sm rounded-xl divide-x divide-brand-600">
        <div class="relative z-0 inline-flex shadow-sm rounded-xl divide-x divide-brand-600">
          <button
            class="relative inline-flex items-center text-sm font-medium flex space-x-2 py-2 pl-3 pr-4 border border-transparent rounded-l-lg shadow-sm text-white"
            :disabled="!isValidResume"
            :class="isValidResume ? 'bg-brand-500 hover:bg-brand-600 focus:outline-none' : 'cursor-default bg-brand-400'"
            @click="exportToPdf"
          >
            <n-icon icon="download" />
            <span>{{ t('ui.download') }}</span>
          </button>
          <ListboxButton class="relative outline: none; inline-flex items-center bg-brand-500 p-2 rounded-l-none rounded-r-lg text-sm font-medium text-white hover:bg-brand-600 focus:outline-none ">
            <n-icon icon="chevron-down" />
          </ListboxButton>
        </div>
      </div>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-xl shadow-lg overflow-hidden bg-white divide-y divide-gray-200 focus:outline-none"
        >
          <ListboxOption
            v-for="option in items"
            :key="option.label"
            as="template"
          >
            <li
              class="cursor-pointer select-none relative p-4 text-sm text-white text-brand-500 hover:text-white hover:bg-brand-500"
              @click="option.action"
            >
              <div class="flex flex-col">
                <div class="flex space-x-2 items-center">
                  <n-icon :icon="option.icon" />
                  <p>
                    {{ option.label }}
                  </p>
                </div>
              </div>
            </li>
          </ListboxOption>
          <ListboxOption class="p-4">
            <RadioGroup
              v-model="locale"
              class="space-y-4"
            >
              <RadioGroupLabel class="text-sm text-gray-500 space-x-2 flex items-center">
                <n-icon icon="translate" />
                <span>{{ t('ui.languageLabel') }}</span>
              </RadioGroupLabel>
              <div class="grid grid-cols-2 gap-2">
                <RadioGroupOption
                  v-for="option in languages"
                  :key="option.label"
                  v-slot="{ checked }"
                  as="template"
                  :value="option.value"
                >
                  <div
                    class="cursor-pointer border rounded-xl py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1"
                    :class="[
                      checked ? 'bg-brand-600 border-transparent text-white hover:bg-brand-700' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50']"
                  >
                    <RadioGroupLabel as="p">
                      {{ option.label }}
                    </RadioGroupLabel>
                  </div>
                </RadioGroupOption>
              </div>
            </RadioGroup>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import NIcon from '../ui/NIcon.vue'
import { setNewResume, addsample, isValidResume, exportToPdf } from '../../modules/resumeStore'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default {
  name: 'NMenu',
  components: {
    NIcon,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption
  },
  setup () {
    const { t, locale } = useI18n()

    const items = computed(() => {
      return [
        { label: t('ui.startOver'), icon: 'trash-outline', action: setNewResume },
        { label: t('ui.fill'), icon: 'lightning-bolt', action: addsample },
        { label: t('ui.career'), icon: 'globe', },
        // { label: t('ui.about'), icon: 'question-mark-circle', action: addsample }
      ]
    })

    // const url = "https:/google.com"

    const languages = [
      { label: 'GEO', value: 'ge' },
      { label: 'ENG', value: 'en' }
    ]

    return {
      items,
      exportToPdf,
      t,
      locale,
      languages,
      setNewResume,
      addsample,
      isValidResume
    }
  }
}
</script>
