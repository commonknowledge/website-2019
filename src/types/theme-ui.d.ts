import { InterpolationWithTheme } from "@emotion/core";

declare module 'react' {
    interface DOMAttributes<T> {
        xs?: InterpolationWithTheme<any>
    }
}

declare global {
    namespace JSX {
        /**
         * Do we need to modify `LibraryManagedAttributes` too,
         * to make `className` props optional when `css` props is specified?
         */

        interface IntrinsicAttributes {
            xs?: InterpolationWithTheme<any>
        }
    }
}