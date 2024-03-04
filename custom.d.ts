declare module "*.css";
declare module "*.scss";
declare module "*.ttf";
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    const content: any;
    export default content;
}
