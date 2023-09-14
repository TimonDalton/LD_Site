export const users = [
    {
        id:0,
        name: 'Jeff Mikkelman',
        password: 'asd'
    },
    {
        id:1,
        name: 'asd',
        password: 'asd'
    }
];
export const locations = [
    {
        id:0,
        name: 'Love Chirstian',
        region: 'Mamelodi',
    },
    {
        id:1,
        name: 'Leghlabile',
        region: 'Mamelodi',
    },
];
export const locationEvents = [
    {
        id:0,
        date: '2 August',
        state: 'available',
        count: 21,
    },
    {
        id:1,
        date: '9 August',
        state: 'confirmed',
        count: 2,
    },
    {
        id:2,
        date: '16 August',
        state: 'available',
        count: 1,
    },
    {
        id:3,
        date: '23 August',
        state: 'unavailable',
        count: 0,
    },
];

export const signupInformation = {
    locationEventId:0,
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
};