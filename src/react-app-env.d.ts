/// <reference types="react-scripts" />
declare module "*.md";

declare module "*.svg" {
    const content: any;
    export default content;
}