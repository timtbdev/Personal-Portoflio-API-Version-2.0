import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp()

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// WELCOME ----------------------------------------------
export interface Welcome{
    id: String,
    title: String,
    sub_title: String,
    text: String,
    image_description: String,
    order: number
}

// PROFILE ---------------------------------------------
export interface Profile{
    id: String,
    name: String,
    title: String,
    image: String,
    image_description: String,
    email: String,
    greeting: String,
    order: number
}
// SOCIAL ----------------------------------------------
export interface Social {
    id: String,
    owner_id: String,
    name: String,
    url: String,
    order: number,
}
// ABOUT -----------------------------------------------
export interface About {
    id: String,
    owner_id: String,
    header: String,
    text: String,
    order: number
}

// APP --------------------------------------------------
export interface App{
    id: String,
    title: String,
    text: String,
    order: number
}

// PORTFOLIO --------------------------------------------
export interface Portfolio {
    id: String,
    owner_id: String,
    title: String,
    sub_title: String,
    logo: String,
    logo_description: String,
    cover_image: String,
    image_description: String,
    info: String,
    text: String,
    date_from: String,
    date_to: String,
    order: number,
    header: String
}

// BUTTON ------------------------------------------------
export interface Button {
    id: String,
    owner_id: String,
    title: String,
    url: String,
    order: number
}

// EXPERIENCE --------------------------------------------
export interface Experience {
    id: String,
    owner_id: String,
    title: String,
    company: String,
    date: String,
    location: String,
    logo: String,
    logo_description: String,
    cover_image: String,
    image_description: String,
    order: number
}

export interface Task {
    id: String,
    owner_id: String,
    task: String,
    order: number
}

// All response -------------------------------------------
export interface All{
    welcome: Welcome[],
    profile: Profile[],
    social: Social[],
    about: About[],
    app: App[],
    portfolio: Portfolio[],
    experience: Experience[],
    button: Button[],
    task: Task[]
}

// API ALL RESPONSE --------------------------------------------------------------------------------------------------------------------
export const all = functions.https.onRequest(async (request, response) => {
    try {
        const data = {} as All

        // Welcome
        const welcomeHolder = await admin.firestore().collection("portfolio/welcome/items").orderBy("order").get()
        const welcomeResult: Welcome[] =[]
        welcomeHolder.forEach(async item =>{
            const obj = {} as Welcome
            obj.id = item.id
            obj.title = item.data().title
            obj.sub_title = item.data().sub_title
            obj.text = item.data().text
            obj.image_description = item.data().image_description
            obj.order = item.data().order
            welcomeResult.push(obj)
        })
        data.welcome = welcomeResult
        
        // Profile
        const profileHolder = await admin.firestore().collection("portfolio/profile/profile").orderBy("order").get()
        const profileResult: Profile[] = []
        profileHolder.forEach(async item =>{
            const obj = {} as Profile
            obj.id = item.id
            obj.name = item.data().name
            obj.title = item.data().title
            obj.image = item.data().image
            obj.image_description = item.data().image_description
            obj.email = item.data().email
            obj.greeting = item.data().greeting
            obj.order = item.data().order
            profileResult.push(obj)
        })
        data.profile = profileResult

        // About
        const aboutHolder = await admin.firestore().collection("portfolio/profile/about").orderBy("order").get()
        const aboutResult: About[] =[]
        aboutHolder.forEach(async item =>{
            const obj = {} as About
            obj.id = item.id
            obj.owner_id = item.data().owner_id
            obj.header = item.data().header
            obj.text = item.data().text
            obj.order = item.data().order
            aboutResult.push(obj)
        })
        data.about = aboutResult

        // Social
        const socialHolder = await admin.firestore().collection("portfolio/profile/social").orderBy("order").get()

        const socialResult: Social[] =[]
        socialHolder.forEach(async item =>{
            const obj = {} as Social
            obj.id = item.id
            obj.owner_id = item.data().owner_id
            obj.name= item.data().name
            obj.url = item.data().url
            obj.order = item.data().order
            socialResult.push(obj)
        })
        data.social = socialResult

        // App
        const appHolder = await admin.firestore().collection("portfolio/app/info").orderBy("order").get()
        const appResult: App[] =[]
        appHolder.forEach(async item =>{
            const obj = {} as App
            obj.id = item.id
            obj.title = item.data().title
            obj.text = item.data().text
            obj.order = item.data().order
            appResult.push(obj)
        })
        data.app = appResult

        // Portfolio
        const portfolioHolder = await admin.firestore().collection("portfolio/portfolio/items").orderBy("order").get()
        const portfolioResult: Portfolio[] =[]
        portfolioHolder.forEach(async item =>{
            const obj = {} as Portfolio
            obj.id = item.id
            obj.owner_id = item.data().owner_id
            obj.title = item.data().title
            obj.sub_title = item.data().sub_title
            obj.logo = item.data().logo
            obj.logo_description = item.data().logo_description
            obj.cover_image = item.data().cover_image
            obj.image_description = item.data().image_description
            obj.info = item.data().info
            obj.text = item.data().text
            obj.date_from = item.data().date_from
            obj.date_to = item.data().date_to
            obj.order = item.data().order
            obj.header = item.data().header
            portfolioResult.push(obj)
        })
        data.portfolio = portfolioResult

        // Button
        const buttonHolder = await admin.firestore().collection('portfolio/buttons/items').orderBy("owner_id").get()
        const buttonResult: Button[] =[]
        buttonHolder.forEach(async item =>{
            const obj = {} as Button
            obj.id = item.id
            obj.owner_id = item.data().owner_id
            obj.title = item.data().title
            obj.url = item.data().url
            obj.order = item.data().order
            buttonResult.push(obj)
        })
        data.button = buttonResult

        // Experience
        const experienceHolder = await admin.firestore().collection("portfolio/experience/items").orderBy("order").get()
        const experienceResult: Experience[] =[]
        experienceHolder.forEach(async item =>{
            const obj = {} as Experience
            obj.id = item.id
            obj.owner_id = item.data().owner_id
            obj.title = item.data().title
            obj.company = item.data().company
            obj.date = item.data().date
            obj.location = item.data().location
            obj.logo = item.data().logo
            obj.logo_description = item.data().logo_description
            obj.cover_image = item.data().cover_image
            obj.image_description = item.data().image_description
            obj.order = item.data().order
            experienceResult.push(obj)
        })
        data.experience = experienceResult

        // Task
        const taskHolder = await admin.firestore().collection("portfolio/tasks/items").orderBy("owner_id").get()
        const taskResult: Task[] =[]
        taskHolder.forEach(async item =>{
            const obj = {} as Task
            obj.id = item.id
            obj.owner_id = item.data().owner_id
            obj.task = item.data().task
            obj.order = item.data().order
            taskResult.push(obj)
        })
        data.task = taskResult

        response.send(data)
    }
    catch(error){
        console.log(error)
        response.status(500).send(error)
    }
})