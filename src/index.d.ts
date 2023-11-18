declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
declare module '*.svg' {
    import * as React from 'react'

    export const ReactComponent: React.FunctionComponent<
        React.ComponentProps<'svg'> & { title?: string }
    >
    export default ReactComponent
}