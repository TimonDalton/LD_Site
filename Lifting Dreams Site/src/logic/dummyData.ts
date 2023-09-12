import {reactive} from 'vue';
export const users = reactive([
    {
        name: 'Jeff Mikkelman',
        password: 'asd'
    },
    {
        name: 'asd',
        password: 'asd'
    }
]);
export const locations = reactive([
    {
        name: 'Love Chirstian',
        region: 'Mamelodi',
    },
    {
        name: 'Leghlabile',
        region: 'Mamelodi',
    },
]);
export const locationSignups = reactive([
    {
        date: '2 August',
        state: 'available',
        count: 21,
    },
    {
        date: '9 August',
        state: 'confirmed',
        count: 2,
    },
    {
        date: '16 August',
        state: 'available',
        count: 1,
    },
    {
        date: '23 August',
        state: 'unavailable',
        count: 0,
    },
]);

export const signupInformation = reactive({
    transport: {
        status: "lift-required",
        count: 0,
    },
    grades: {
        g3_5: false,
        g6_7: true,
        g8_9: true,
    },
    subjects: {
        math: true,
        english: true,
    }
});