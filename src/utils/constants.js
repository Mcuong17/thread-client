export const ROUTES = {
    //Auth Router
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgotpassword',
    RESET_PASSWORD: '/resetpassword',

    //Main Router
    HOME: '/home',
    FOR_YOU: 'foryou',
    FOLLOWING: 'following',

    //Dynamic Router
    PROFILE: 'profile/:username',
    POST_DETAIL: '/post/:id',

    // Search
    SEARCH: '/search',

    // Activity
    ACTIVITY: '/activity',

    // Settings
    SETTINGS: '/settings',
    SETTINGS_ACCOUNT: '/settings/account',
    SETTINGS_PRIVACY: '/settings/privacy',
    SETTINGS_NOTIFICATIONS: '/settings/notifications',

    // Other
    SAVED: '/saved',
    GHOST_POSTS: '/ghost',
    INSIGHT: '/insight',

    // No layout
    NOT_FOUND: '*',
    EMBED_POST: '/embed/:id',
}

export const API_BASE_URL ='https://threads.f8team.dev/'