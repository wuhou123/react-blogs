declare module '*.css';
declare module '*.scss';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

interface Window {
  Canvas2Image: any
  wmShare:any,
  Stack:any,
  dynamics:any,
  isInitCarcous:any,
  scrollEr:any,
  TweenMax:any,
  Scrollbar:any,
  scrollStop:any,
  listerEvent:any
}
