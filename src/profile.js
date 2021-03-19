

const constraints = {
    username: {
        presence: true,
        exclusion:{
            within: {boon:"huakuy"},
            message: "'%{value}'sawatdee"
        }
    },
    password: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    },
    chosensubject: {
        presence: true
    },
    
       
    }


const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello, Vue3',
            shown: true,
            showfirstname: 'Pattarapol',
            showlastname: 'Sangsunee',
            status: 'SIT student',
            followers: '300',
            image: './images/profile.jpg',

            username: null,
            password: null,
            gender: null,
            fullname: null,
            age: null,
            email: null,
            phone: null,
            chosensubject: null,
            subject_lists: [{ subject_id: 1, subject_name: 'INT203' },
            { subject_id: 2, subject_name: 'INT204' },
            { subject_id: 3, subject_name: 'INT206' },
            { subject_id: 4, subject_name: 'INT208' },
            { subject_id: 5, subject_name: 'INT209' },
            { subject_id: 6, subject_name: 'INT210' },
            { subject_id: 7, subject_name: 'LNG220' }],
            errors: null,
        }

    },
    methods: {
        checkForm() {
            this.errors = validate({
                username: this.username,
                email: this.email,
                password: this.password,
                fullname: this.fullname,
                age: this.age,
                gender: this.gender,
                phone: this.phone,
                chosensubject: this.chosensubject,

            },
                constraints)
            if (!this.errors) {
                alert("Registered successfully.")
            }
        }
    }
})
app.mount('#app')