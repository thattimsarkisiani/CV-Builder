import { computed, reactive } from 'vue'
import { sample } from '../assets/sample'
import { i18n } from '../composables/i18n'
import axios from 'axios'
const { t } = i18n.global

const initialResume = {
  firstName: null,
  lastName: null,
  title: null,
  summary: null,
  email: null,
  phone: null,
  address: null,
  avatar: null,
  more: null,
  link: [],
  experience: [],
  education: [],
  skill: [],
  hobby: null
}

const state = reactive({
  model: {
    main: {
      title: null,
      data: [
        {
          component: 'input',
          key: 'firstName',
          type: 'text',
          placeholder: computed(() => t('resume.firstName')),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'lastName',
          type: 'text',
          placeholder: computed(() => t('resume.lastName')),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'title',
          type: 'text',
          placeholder: computed(() => t('resume.title')),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'summary',
          type: 'textarea',
          placeholder: computed(() => t('resume.summary'))
        },
        {
          component: 'input',
          key: 'email',
          type: 'text',
          placeholder: computed(() => t('resume.email')),
          rules: ['required', 'email']
        },
        {
          component: 'input',
          key: 'phone',
          type: 'text',
          placeholder: computed(() => t('resume.phone')),
          rules: ['required', 'phone']
        },
        {
          component: 'input',
          key: 'address',
          type: 'text',
          placeholder: computed(() => t('resume.address'))
        },
        {
          component: 'input',
          key: 'more',
          type: 'textarea',
          placeholder: computed(() => t('resume.more'))
        }
      ]
    },
    education: {
      title: computed(() => t('resume.section.title.education')),
      new: {},
      data: [
        {
          component: 'input',
          key: 'degree',
          type: 'text',
          placeholder: computed(() => t('resume.section.fields.degree')),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'beginDate',
          type: 'text',
          placeholder: computed(() => t('resume.section.fields.beginDate')),
          short: true,
          rules: ['required']
        },
        {
          component: 'input',
          key: 'endDate',
          type: 'text',
          placeholder: computed(() => t('resume.section.fields.endDate')),
          short: true
        },
        {
          component: 'input',
          key: 'school',
          type: 'text',
          placeholder: computed(() => t('resume.section.fields.school')),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'city',
          type: 'text',
          placeholder: computed(() => t('resume.section.fields.city'))
        },
        {
          component: 'input',
          key: 'description',
          type: 'textarea',
          placeholder: computed(() => t('resume.section.fields.description'))
        }
      ]
    },
    experience: {
      title: computed(() => t('resume.section.title.employmentHistory')),
      new: {},
      data: [
        {
          component: 'input',
          key: 'title',
          type: 'text',
          placeholder: computed(() => t('resume.section.fields.jobTitle')),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'beginDate',
          type: 'text',
          placeholder: computed(() => t('resume.section.fields.beginDate')),
          short: true,
          rules: ['required']
        },
        {
          component: 'input',
          key: 'endDate',
          type: 'text',
          placeholder: computed(() => t('resume.section.fields.endDate')),
          short: true
        },
        {
          component: 'input',
          key: 'company',
          type: 'text',
          placeholder: computed(() => t('resume.section.fields.employer')),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'description',
          type: 'textarea',
          placeholder: computed(() => t('resume.section.fields.description'))
        }
      ]
    },
    link: {
      title: computed(() => t('resume.section.title.links')),
      new: {},
      data: [
        {
          component: 'input',
          key: 'label',
          type: 'text',
          placeholder: computed(() => t('resume.section.fields.label')),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'url',
          type: 'text',
          placeholder: computed(() => t('resume.section.fields.link')),
          rules: ['required']
        }
      ]
    },
    skill: {
      title: computed(() => t('resume.section.title.skills')),
      new: {},
      data: [
        {
          component: 'input',
          key: 'label',
          type: 'textarea',
          placeholder: computed(() => t('resume.section.fields.skill')),
          rules: ['required']
        }
      ]
    },
    hobby: {
      title: computed(() => t('resume.section.title.hobbies')),
      data: [
        {
          component: 'input',
          key: 'hobby',
          type: 'textarea',
          placeholder: computed(() => t('resume.section.fields.hobbies'))
        }
      ]
    }
  },
  resume: { ...initialResume },
  theme: {
    options: {
      colors: [
        { name: 'dark', value: '#121E24' },
        { name: 'sky', value: '#4EABE9' },
        { name: 'mint', value: '#73BDAF' },
        { name: 'sunflower', value: '#EBB835' },
        { name: 'raspberry', value: '#D8556D' },
        { name: 'ocean', value: '#2D63D3' },
      ]
    },
    color: '#121E24'
  }
})

const resume = computed(() => state.resume)
const model = computed(() => state.model)
const theme = computed(() => state.theme)

const addItem = (type) => {
  state.resume[type].push({
    id: Date.now()
  })
}

const saveItem = (type) => {
  state.resume[type].push({
    id: Date.now(),
    ...state.model[type].new
  })
  clearNew(type)
}

const setNewResume = async () => {
  await clearState()
}

const isEmpty = (type) => {
  const { id, ...obj } = state.resume[type]
  return Object.values(obj).every((i) => !i)
}

const requiredKey = (type) => {
  return state.model[type].data.reduce((acc, i) => {
    if (i.rules?.includes('required')) acc.push(i.key)
    return acc
  }, [])
}

const isValid = (type) => {
  return requiredKey(type).every((i) => !!state.model[type].new[i])
}

const isValidResume = computed(() => {
  const isMainValid = requiredKey('main').every((i) => !!state.resume[i])
  return isMainValid && !!state.resume.education.length &&
    !!state.resume.experience.length &&
    !!state.resume.skill.length &&
    !!state.resume.link.length
})

const removeItem = (id, type) => {
  if (!id) return
  const index = state.resume[type].findIndex((i) => i.id === id)
  if (index !== -1) state.resume[type].splice(index, 1)
}

const clearNew = (type) => {
  for (const item of Object.getOwnPropertyNames(state.model[type].new)) {
    delete state.model[type].new[item]
  }
}

const clearState = (key, customPath = resume) => {
  if (!key) {
    Object.assign(state.resume, initialResume)
  } else {
    state[customPath][key] = null
  }
}

const addsample = () => {
  Object.assign(state.resume, sample)
}

const exportToPdf = () => {
  axios.post('https://cvite-pdfserver.herokuapp.com/pdf/', { resume: state.resume, model: state.model, theme: state.theme }, {
    responseType: 'arraybuffer'
  })
    .then((res) => {
      const file = new Blob([res.data], { type: 'application/pdf' })
      const fileURL = URL.createObjectURL(file)
      window.open(fileURL)
    })
}

export {
  resume,
  model,
  theme,
  addItem,
  removeItem,
  clearState,
  addsample,
  isEmpty,
  setNewResume,
  saveItem,
  isValid,
  isValidResume,
  exportToPdf
}
