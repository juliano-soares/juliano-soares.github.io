import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string;

        colors: {
            black: string;
            
            dark_blue: string;
            light_blue: string;
            
            dark_gray: string;
            medium_gray: string;
            light_gray: string;
            
            white: string;

            text: string;
        },
    }
}